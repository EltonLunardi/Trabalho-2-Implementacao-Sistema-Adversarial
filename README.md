# Arena Adversarial: Poker heads-up com agentes adaptativos

**Trabalho 2: Implementação de um Sistema Adversarial**

**Disciplina:** Engenharia de Software Adversarial · **Grupo:** 7 · Continuação do [Trabalho 1](https://github.com/rafaelbtorres/Trabalho-1-Analise-de-Sistema-Adversarial)

| Integrante | E-mail institucional |
|---|---|
| Rafael Barboza Torres | rafaelbarbozarafaelbarboza.aluno@unipampa.edu.br |
| Elton Henrique Lunardi Gimenes | eltongimenes.aluno@unipampa.edu.br |
| Frederico Marques da Silva Barcelos | fredericobarcelos.aluno@unipampa.edu.br |
| Diego Santos de Araujo | diegoaraujo.aluno@unipampa.edu.br |

## Materiais da entrega

| Material | Acesso |
|---|---|
| Relatório principal | Este README |
| Código executável | [arena/](arena/): instruções em [arena/README.md](arena/README.md) |
| Análise dos resultados | [ANALISE.md](ANALISE.md) |
| Evidências das rodadas | [evidencias/](evidencias/): relatório e log completo de cada partida |
| Vídeo (YouTube) | [Assistir no YouTube](https://www.youtube.com/watch?v=S0OIkzr4Xb8) · roteiro e fontes em [video/](video/) |

## Resumo

O Trabalho 1 descreveu, sobre um cenário escrito à mão, uma mão de pôquer entre dois agentes de software. Este trabalho transforma a proposta em código. Dois agentes heurísticos, **A** e **B**, jogam heads-up de Texas Hold'em No Limit, partida após partida, até um deles perder todas as fichas, com blinds crescentes. Cada agente recebe apenas a sua visão autorizada e as ações públicas do outro. A partir delas, mede o comportamento do adversário, prevê as respostas dele e muda de política por regras explícitas. A memória atravessa as partidas, e um treinador opcional (Llama local) ajusta a política base entre uma partida e outra.

O motor implementa os controles C1, C2, C3 e C5 do Trabalho 1 e reproduz os cenários sintéticos daquele relatório nos testes. Uma interface web mostra o jogo ao vivo e responde à pergunta central:

> **Como as decisões de um agente influenciam o comportamento do adversário nas rodadas seguintes?**

Principais resultados:
- **O ciclo ação → resposta → observação → adaptação ocorre já na primeira partida.** Na mão 7, B percebe que A rouba o pote depois do seu check e passa a armar armadilhas. Na mão 8, A reage, e B reage de novo.
- **Com memória entre partidas,** o conhecimento mútuo vai de 65% para 88% e o acerto das previsões de A chega a 90%. Os agentes, porém, convergem e param de se adaptar.
- **Sem memória,** a escalada recomeça a cada partida.
- **O treinador reabriu a disputa** na execução de 68 partidas.

## Sumário

1. [Proposta e delimitação](#1-proposta-e-delimitação)
2. [Requisitos e onde são atendidos](#2-requisitos-e-onde-são-atendidos)
3. [Arquitetura](#3-arquitetura)
4. [Os agentes](#4-os-agentes)
5. [Rodadas adversariais e adaptação](#5-rodadas-adversariais-e-adaptação)
6. [Evidências](#6-evidências)
7. [Resultados](#7-resultados)
8. [Limitações e melhorias](#8-limitações-e-melhorias)
9. [Como executar](#9-como-executar)
10. [Contribuições individuais](#10-contribuições-individuais)
11. [Declaração de uso de IA generativa](#11-declaração-de-uso-de-ia-generativa)

## 1. Proposta e delimitação

A interação é a mesma do Trabalho 1: Texas Hold'em No Limit, um contra um, com as regras da seção 1.1 daquele relatório. O botão é o small blind e age primeiro no pré-flop. Raise define o total da etapa. All-in incompleto não reabre aumento. A parte não coberta de um all-in é devolvida. Em caso de empate, a ficha ímpar vai para quem não está no botão.

**O que mudou em relação ao escopo do Trabalho 1.** O Trabalho 1 excluía "múltiplas mãos de treino". Aqui a unidade passou a ser a **partida completa**: várias mãos até um agente quebrar, com os blinds subindo a cada 8 mãos (5/10, 10/20, 15/30…), e uma nova partida começando em seguida. Sem várias rodadas não haveria o que observar nem a que se adaptar, que é o centro do Trabalho 2.

**Incluído:** execução local; dois agentes com perfis configuráveis; visões filtradas; validação central; aplicação única por versão; conservação de fichas conferida após cada evento; memória entre partidas; treinador opcional; relatórios e logs de evidência.

**Excluído, por decisão do grupo:** a demonstração ao vivo das ameaças T1–T3 e o controle C4 (orçamento de tempo com o agente em processo separado), já que os agentes são módulos locais confiáveis. Também ficam de fora torneios com mais de dois jogadores, dinheiro real e agentes externos.

## 2. Requisitos e onde são atendidos

| Requisito do enunciado | Implementação | Evidência |
|---|---|---|
| Escopo delimitado | Uma interação: pôquer heads-up, regras do Trabalho 1 | Seção 1; testes do motor |
| Pelo menos dois agentes com objetivos conflitantes e regras de decisão explícitas | A e B disputam as mesmas fichas; decisão por faixa do adversário, equidade, pot odds e 7 parâmetros de política | [arena/src/agents/agent.ts](arena/src/agents/agent.ts), [policy.ts](arena/src/agents/policy.ts) |
| Pelo menos três rodadas conectadas: ação → resposta → observação → adaptação | Cada ação pública atualiza o modelo do outro; 8 regras mudam a política; a memória liga mãos e partidas | Cadeias de reação nos relatórios, ex.: [partida-001.md](evidencias/relatorios/partida-001.md) |
| Adaptação pelos resultados anteriores | Regras com histerese, mudança percebida (memória recente × longa) e treinador entre partidas | Seção 5; [ANALISE.md](ANALISE.md) |
| Evidências de ações, decisões e resultados de cada rodada | Log JSONL com cada evento do motor, cada decisão (raciocínio, equidade, política) e cada adaptação; relatório Markdown por partida | [evidencias/](evidencias/) |
| Nada roteirizado | Baralho embaralhado por seed; as decisões dependem do estado e do modelo aprendido; mesmos agentes, partidas diferentes | Experimento com e sem memória ([ANALISE.md §2](ANALISE.md)) |

## 3. Arquitetura

```
arena/
  src/engine/   motor do jogo, a autoridade sobre cartas e fichas (hand.ts, evaluator.ts, cards.ts)
  src/agents/   agentes: decisão, modelo do oponente, política, regras, equidade
  src/match/    arena: partidas, blinds, memória, estatísticas, transmissão ao vivo
  src/report/   narrativa causal e relatórios Markdown
  src/llm/      treinador opcional (Ollama local)
  src/server/   Express + WebSocket
  public/       interface web (mesa, decisões, influência, análise)
  tests/        critérios da seção 7.3 do Trabalho 1 + requisitos dos agentes
  scripts/      simulação em lote e experimento com/sem memória
```

| Controle do Trabalho 1 | Implementação |
|---|---|
| **C1** filtrar visões | `Hand.view(agente)` entrega só as cartas próprias, a mesa aberta e o histórico público. Eventos privados ou de operador nunca chegam ao outro agente. |
| **C2** validar antes de atualizar | Vez, tipo legal, inteiro, aumento mínimo e saldo. Ação rejeitada não altera fichas. |
| **C3** versão e aplicação única | Cada ação leva a versão do estado; repetida ou atrasada é recusada. |
| **C4** orçamento de execução | Não implementado (seção 1). |
| **C5** auditoria e invariantes | A + B + pote = total após cada evento. Violação leva a mão a `INTERROMPIDA`, sem vencedor. Todo evento vai para o log. |

Os testes (`npm test`, 9 de 9) reproduzem o percurso sintético do Trabalho 1, que termina em 50 × 170, e os ramos de all-in: 120 × 100, 0 × 220 e a devolução de 40 fichas. Também conferem que nenhuma visão vaza cartas do oponente ou futuras e que ações ilegais e versões antigas são rejeitadas sem mexer nas fichas.

## 4. Os agentes

**Objetivo:** os dois têm o mesmo objetivo conflitante, maximizar as próprias fichas, que são tiradas do outro. **Ações:** fold, check, call, bet, raise e all-in.

**Decisão, em três passos:**
1. Estima a faixa de mãos do adversário pelas apostas públicas dele nesta mão, misturando mãos fortes com a taxa de blefe aprendida nos showdowns.
2. Calcula por Monte Carlo a equidade contra essa faixa e a compara às pot odds.
3. Consulta a política.

Abaixo de 12 big blinds, o agente entra em modo push/fold.

**A política são sete números:**

| Parâmetro | Significado |
|---|---|
| Agressividade | Chance de aumentar com mão boa em vez de só pagar |
| Frequência de blefe | Chance de apostar com mão fraca (< 45% de equidade) |
| Roubo após check | Chance de apostar logo depois do check do adversário |
| Armadilha | Com mão muito forte (> 75%), chance de só dar check ou pagar para induzir aposta |
| Margem para pagar | Quanto a equidade precisa superar as pot odds para pagar |
| Limiar de valor | Equidade mínima para apostar por valor |
| Tamanho da aposta | Fração do pote apostada |

**Os perfis são o ponto de partida desses números:**

| Perfil | Ideia | Agress. | Blefe | Roubo | Armadilha |
|---|---|---:|---:|---:|---:|
| **Pressionador** (A) | Testa pressão com mãos fracas | 70% | 30% | 50% | 5% |
| **Valor e indução** (B) | Aposta com mão boa e esconde a força | 55% | 8% | 25% | 30% |
| Conservador | Poucos potes, quase sem blefe | 40% | 4% | 15% | 10% |
| Equilibrado | Valor e blefe moderados | 55% | 15% | 35% | 15% |

Os perfis existem por três motivos:
1. **Continuidade:** A e B são os estilos da seção 4.1 do Trabalho 1.
2. **Sem diferença não há o que ler:** agentes idênticos veriam o próprio reflexo e não haveria padrão para explorar.
3. **Experimentos:** permitem trocar estilos.

A política efetiva é **perfil + posturas ativadas pelas regras + ajustes do treinador**.

**Intenção privada × ação pública.** Toda decisão recebe uma categoria registrada só para o operador: valor, blefe, roubo, armadilha, pagar, check, desistir e pressão. O adversário vê apenas a ação, por exemplo "bet 40", sem saber se é valor ou blefe. É dessa dúvida que nasce a leitura, e é a categoria privada que permite medir depois quantos blefes funcionaram.

## 5. Rodadas adversariais e adaptação

**Observação.** Depois de cada ação pública, o agente atualiza oito medidas sobre o adversário:
- desistência diante de aposta;
- agressão;
- VPIP;
- PFR;
- check-raise;
- aposta após o meu check;
- blefe revelado no showdown;
- sucesso dos meus blefes.

Cada medida tem **duas memórias**. A de longo prazo tem decaimento lento e atravessa as partidas. A recente reage rápido. Quando as duas divergem, o agente registra que o adversário **mudou de comportamento**.

**Adaptação.** Oito regras explícitas, com histerese e pelo menos 6 mãos entre mudanças da mesma regra:

| Regra | Se o adversário… | Então |
|---|---|---|
| Explorar desistências | desiste de ≥ 55% das apostas | mais blefe e mais roubo |
| Valor contra pagador | desiste de ≤ 32% | menos blefe, aposta por valor mais fino |
| Pagar o blefador | mostra mão fraca em ≥ 40% dos showdowns em que apostou | paga com mãos mais fracas |
| Respeitar o passivo | aposta ou aumenta em ≤ 30% das ações | desiste quando ele aposta e rouba quando ele não aposta |
| Induzir o agressor | aposta ou aumenta em ≥ 55% | mais armadilha, menos agressividade |
| Evitar check-raise | dá check-raise em ≥ 30% | para de apostar no automático após o check |
| Armadilha contra roubo | aposta em ≥ 60% das vezes após o meu check | check com mão forte esperando a aposta |
| Corrigir blefes | (os meus blefes funcionam em ≤ 35%) | menos blefe |

**Previsão.** Antes de cada resposta do adversário, o agente prevê se ele vai desistir diante da aposta ou apostar depois do check. O acerto e o escore de Brier medem quanto um conhece o outro.

**Narrativa causal.** Quando um agente se adapta por causa de uma medida, o narrador procura a mudança de política mais recente do adversário que move aquela medida **no mesmo sentido** observado. Exemplo real, da partida 1:

> B · mão 7: B observou que A aposta em 60% das vezes depois do check de B (6/9 recentes). Em resposta, B passou a dar check com mãos fortes esperando a aposta dele (armadilha 30% → 50%).
> A · mão 8: a partir da mão 7, quando B passou a dar check com mãos fortes, B começou a jogar de forma mais passiva. A observou que B aposta ou aumenta em 25% das suas ações e passou a roubar potes quando ele não aposta (roubo 50% → 60%).
> B · mão 8: A começou a apostar e aumentar com mais frequência. B passou a induzir o agressor (armadilha 50% → 75%). **[cadeia 2]**

**Treinador Llama (opcional).** Entre partidas, um modelo local (llama3.1:8b via Ollama) recebe só o que o agente pôde observar e sugere até 3 ajustes de no máximo 10 pontos percentuais na política base. A resposta é tratada como entrada não confiável: parâmetros inventados são descartados e os valores, limitados.

## 6. Evidências

Cada partida gera, em [evidencias/relatorios/](evidencias/relatorios/):

- **`partida-NNN.jsonl`**: uma linha por registro:
  - `evento`: cada evento do motor, com o estado das fichas;
  - `decisao`: agente, etapa, categoria, raciocínio, equidade, pot odds e a política vigente;
  - `adaptacao`: observação, resposta, parâmetros antes e depois, e a causa;
  - `partida_inicio` e `partida_fim`.
- **`partida-NNN.md`**: resultado, linha do tempo das adaptações com o encadeamento causal, estatísticas, política inicial × final, leitura mútua e todas as mãos com suas ações.
- **`geral.md`**: evolução entre partidas e principais cadeias de reação.

O snapshot desta pasta tem **71 partidas** da execução contínua com o treinador. A análise usa as 68 primeiras, que eram as concluídas no momento do levantamento. [evidencias/memoria.json](evidencias/memoria.json) é o estado aprendido pelos agentes ao final.

## 7. Resultados

Detalhes, tabelas e método em [ANALISE.md](ANALISE.md).

- **Comportamento.** B virou um **armador**: armadilha de 30% para 80%, nenhum blefe desde a partida 18, e desiste diante de só 13–19% das apostas. A **deixou de blefar** (30% → quase 0% já nas partidas 2 a 4), mas continuou agressivo, apostando por valor. Cada um explora o estilo do outro.
- **Memória entre partidas** (experimento com 20 partidas, seed 2026). Com memória, o conhecimento vai de 65% para 88% e o acerto das previsões de A de 76% para 90%, mas as adaptações cessam depois da partida 10. Sem memória, o conhecimento fica entre 40% e 55%, há mais adaptações (85 contra 12) e cadeias mais longas (7 contra 3).
- **Treinador** (execução de 68 partidas). Ajustou A quatro vezes e reabriu a disputa, com nova escalada nas partidas 37–40. A venceu 41% das partidas antes da primeira intervenção e 65% depois. É correlação de uma única execução.
- **Influência.** Reação média de cerca de 6 mãos entre a mudança de um agente e a resposta do outro.

**Resposta à pergunta central.** Um agente influencia o outro pelo que mostra em público. Cada ação vira estatística na memória do adversário, e quando ela cruza um limite o adversário muda de política. A influência é mútua e encadeada. A memória faz os agentes se conhecerem e preverem melhor, mas os leva a um ponto estável; para a disputa continuar, algo novo precisa entrar no jogo.

## 8. Limitações e melhorias

**Limitações:**
- regras e limiares escolhidos à mão, sem garantia de otimalidade;
- faixa do adversário simples, sem draws nem tamanho de aposta;
- narrativa causal heurística, rastreável mas sem prova estatística;
- resultados de uma única sequência de cartas;
- treinador não determinístico;
- C4 e ataques T1–T3 fora do escopo.

**Melhorias:**
- repetir com várias seeds e reportar intervalos de confiança;
- exploração (ε-greedy) para evitar a convergência precoce;
- inferência de faixa mais rica;
- testes contrafactuais de causalidade;
- implementar C4 e um modo de ataque.

## 9. Como executar

Requisitos: Node.js 20 ou mais recente. Ollama é opcional.

```bash
cd arena
npm install
npm start                   # http://127.0.0.1:3000
npm test                    # 9 testes: motor contra o Trabalho 1 + requisitos dos agentes
npm run experimento -- 20   # com memória × sem memória
```

Detalhes, variáveis de ambiente e a descrição completa da interface estão em [arena/README.md](arena/README.md).

## 10. Contribuições individuais

Registro baseado no histórico Git deste repositório. Atividades não registradas em commits não são contadas.

| Integrante | Contribuição registrada no Trabalho 2 | Evidência no Git |
|---|---|---|
| Rafael Barboza Torres | _a completar com os próprios commits_ | — |
| Elton Henrique Lunardi Gimenes | Implementação da arena (motor, agentes, adaptação, memória, treinador, interface), análise dos resultados e produção do vídeo, com assistência de IA (seção 11) | Commit inicial deste repositório, autoria EltonLunardi |
| Frederico Marques da Silva Barcelos | _a completar com os próprios commits_ | — |
| Diego Santos de Araujo | _a completar com os próprios commits_ | — |

## 11. Declaração de uso de IA generativa

O **Claude Code** (Anthropic) foi usado na implementação do código (motor, agentes, arena, interface e testes), na execução e análise dos experimentos, na redação desta documentação e na produção do vídeo (roteiro, cenas, narração sintética, trilha e montagem), a partir do relatório do Trabalho 1 e das decisões do grupo. Ao longo do trabalho, o grupo escolheu o tipo de agente (heurístico), o formato das partidas, a memória entre partidas, o escopo sem ataques, o visual e o uso de um modelo local como treinador.

O **Llama 3.1 8B** roda localmente via Ollama como treinador opcional entre partidas. Ele não decide jogadas; sua saída é validada e limitada pelo sistema.

As verificações automatizadas incluem:
- os 9 testes (`npm test`), que reproduzem os cenários do Trabalho 1 e conferem C1, C2, C3 e C5;
- a conferência dos números citados contra os relatórios e o experimento reproduzível.

O grupo deve revisar o conteúdo produzido com assistência de IA antes da entrega.
