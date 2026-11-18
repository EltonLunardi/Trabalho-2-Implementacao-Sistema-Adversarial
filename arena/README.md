# Arena Adversarial: Poker heads-up com agentes adaptativos

**Trabalho 2: Implementação de um Sistema Adversarial**
Engenharia de Software Adversarial · Grupo 7 · continuação do [Trabalho 1](https://github.com/rafaelbtorres/Trabalho-1-Analise-de-Sistema-Adversarial)

Dois agentes heurísticos, **A** e **B**, jogam heads-up de Texas Hold'em No Limit. Cada partida vai até um deles perder todas as fichas, com blinds subindo por nível. Ao fim de uma partida, outra começa automaticamente. Cada agente observa apenas as ações públicas do outro, constrói um modelo do oponente, prevê suas respostas e muda de política quando percebe um padrão. A memória atravessa partidas: na partida 1 eles não se conhecem; na partida 5 cada um já sabe como o outro costuma agir.

A interface web mostra o jogo ao vivo e responde à pergunta central do trabalho:

> **Como as decisões de um agente influenciam o comportamento do adversário nas rodadas seguintes?**

## Como executar

Requisitos: Node.js 20 ou mais recente. O Ollama é opcional.

```bash
npm install
npm start            # http://127.0.0.1:3000
```

| Comando | O que faz |
|---|---|
| `npm start` | Sobe a arena ao vivo (servidor web + WebSocket) |
| `npm test` | Testa o motor contra os cenários do Trabalho 1 e os requisitos dos agentes |
| `npm run simular -- 10` | Joga 10 partidas sem interface e grava os relatórios |
| `npm run experimento -- 20` | Compara 20 partidas **com** e **sem** memória entre partidas |
| `npm run typecheck` | Verificação de tipos TypeScript |

Variáveis de ambiente opcionais: `PAUSADO=1` para subir a arena parada, `PORT`, `VELOCIDADE` (`lenta`, `normal`, `rapida`, `turbo`), `MEMORIA=0` para desligar a memória entre partidas, `TREINADOR=0` para desligar o Llama, `OLLAMA_URL` e `OLLAMA_MODELO` (padrão `llama3.1:8b`).

### Treinador Llama (opcional, local)

Com `ollama serve` rodando, ao fim de cada partida um modelo local analisa a partida de cada agente e propõe até 3 ajustes, de no máximo 10 pontos percentuais, na política base. O treinador recebe só o que o agente pôde observar. A resposta é tratada como entrada não confiável: o JSON é validado, os parâmetros inventados são descartados e os valores são limitados. Tudo roda na máquina local, sem serviço externo. Sem o Ollama, a arena funciona normalmente, apenas com as heurísticas.

## O que a interface mostra

- **Mesa ao vivo**: cartas, apostas, pote e a ação de cada agente. As cartas privadas aparecem porque a tela é a visão do operador.
- **Decisão privada** de cada agente: equidade estimada, pot odds e o motivo da jogada (valor, blefe, roubo, armadilha…). O oponente nunca recebe isso.
- **Influência**: linha do tempo com uma faixa para A e outra para B. Cada ponto é uma mudança de política e cada seta liga a mudança de um agente à reação do outro. Ao lado, a narrativa causal ("a partir da mão 7, quando B passou a dar check com mãos fortes, A…") e os indicadores: quantas reações cada um provocou, tempo médio de reação e maior cadeia de reações.
- **Análise**: estatísticas (VPIP, PFR, agressão, desistência diante de aposta), política atual × base, leitura que cada um tem do outro (memória de longo prazo × janela recente), fichas por mão, curva de aprendizado entre partidas, histórico de partidas com relatórios e o status do treinador.
- **Controles**: pausar, avançar passo a passo, velocidade (até turbo, para acumular partidas), configuração (fichas, mãos por nível, seed, perfis, treinador) e apagar a memória.

## Evidências geradas

A cada partida, a pasta `relatorios/` recebe:

- `partida-NNN.md`: resultado, linha do tempo das adaptações com encadeamento causal, estatísticas, política inicial × final, leitura mútua e todas as mãos com suas ações;
- `partida-NNN.jsonl`: **log completo de evidências**, com uma linha por evento do motor, decisão (raciocínio, equidade e política vigente) e adaptação;
- `geral.md`: evolução entre partidas e principais cadeias de reação.

A memória dos agentes fica em `dados/memoria.json`; o botão "Apagar memória" a remove.

## Arquitetura

```
src/
  engine/   motor do jogo — autoridade sobre cartas e fichas
    hand.ts        máquina de estados da mão (PREPARACAO → PRE_FLOP … → ENCERRADA | INTERROMPIDA)
    evaluator.ts   avaliação de mãos (hierarquia PokerStars)
    cards.ts       baralho e PRNG com seed (partidas reproduzíveis)
  agents/   agentes heurísticos adaptativos
    agent.ts       observação → decisão → adaptação
    model.ts       modelo do oponente: memória de longo prazo + janela recente, previsões
    policy.ts      política, perfis iniciais e regras de adaptação explícitas
    equity.ts      equidade Monte Carlo contra a faixa inferida do oponente
  match/    arena: partidas, níveis de blinds, memória, transmissão e estatísticas
  report/   narrativa causal e relatórios Markdown
  llm/      treinador opcional via Ollama
  server/   Express + WebSocket
public/     interface (HTML/CSS/JS puro, sem build)
tests/      critérios da seção 7.3 do Trabalho 1 + requisitos dos agentes
```

### Motor: controles do Trabalho 1

| Controle | Implementação |
|---|---|
| C1: filtrar visões | `Hand.view(agente)` entrega apenas as cartas próprias, a mesa aberta e o histórico público. Eventos privados ou do operador não chegam ao agente (`Hand.visibleTo`). |
| C2: validar antes de atualizar | `Hand.validate`: vez, tipo legal, valor inteiro, mínimo de aumento e saldo. Uma ação rejeitada não altera fichas. |
| C3: versão e aplicação única | Cada ação carrega a `versao` do estado; repetições e respostas atrasadas são rejeitadas. |
| C5: invariantes | Após cada evento, A + B + pote = total e nenhum saldo fica negativo. Uma violação leva a mão para `INTERROMPIDA`, sem vencedor. |

Regras de heads-up seguem a seção 1.1 do Trabalho 1: o botão é o small blind e age primeiro no pré-flop; o big blind tem opção depois de um call simples; raise define o total da etapa; all-in incompleto não reabre aumento; a parte não coberta é devolvida; no empate, a ficha ímpar fica com quem não está no botão. Os testes reproduzem exatamente o percurso 50/170 e os ramos 120/100, 0/220 e 40/140 de `dados/cenario*.json`.

### Agentes: ações, objetivos e regras de decisão

Os dois agentes têm o **mesmo objetivo conflitante**: maximizar as próprias fichas, que são retiradas do outro. As ações possíveis são fold, check, call, bet, raise e all-in. Cada um parte de um perfil: A é **Pressionador**, que testa pressão e blefa; B é **Valor e indução**, que valoriza mão forte e dá check para induzir. Os perfis vêm da seção 4.1 do Trabalho 1.

**Decisão** (`agent.ts → decide`), sempre a partir da visão autorizada:

1. Estima a **faixa do oponente** a partir das apostas e aumentos públicos dele na mão, misturando mãos fortes com a taxa de blefe que aprendeu nos showdowns.
2. Calcula a **equidade** por Monte Carlo contra essa faixa e a compara às **pot odds**.
3. Aplica regras explícitas: aposta por valor acima do `limiarValor`; armadilha (check com mão muito forte) com probabilidade `freqArmadilha`; roubo após o check do oponente com `freqRoubo`; blefe com `freqBlefe`; paga se equidade ≥ pot odds + `margemCall`; com stack curto (≤ 12 big blinds), modo push/fold.

**Observação** (`agent.ts → observe`), somente sobre eventos públicos. As métricas sobre o oponente são: desistência diante de aposta, agressão, VPIP, PFR, check-raise, aposta depois de um check, blefes revelados no showdown e a taxa de sucesso dos próprios blefes. Cada métrica tem duas memórias: **longo prazo**, com decaimento lento, que atravessa partidas, e **recente**, com decaimento rápido. Quando as duas divergem, o agente registra a **mudança de comportamento** do oponente.

**Adaptação** (`policy.ts → RULES`): oito regras com histerese e intervalo mínimo de 6 mãos entre mudanças. Exemplos:

| Observação pública | Resposta |
|---|---|
| Oponente desiste em ≥ 55% das apostas | Explorar desistências: mais blefe e mais roubo |
| Oponente desiste em ≤ 32% das apostas | Valor contra pagador: corta blefes, aposta por valor mais fino |
| Oponente mostra mão fraca em ≥ 40% dos showdowns em que apostou | Pagar o blefador: paga com mãos mais fracas |
| Oponente aposta ou aumenta em ≥ 55% das ações | Induzir o agressor: check e call com mão forte |
| Oponente aposta em ≥ 60% das vezes após o check | Armadilha contra roubo |
| Os próprios blefes funcionam em ≤ 35% das vezes | Corrigir blefes |

**Encadeamento causal** (`report/narrative.ts`): quando um agente se adapta por causa da métrica M, o narrador procura a mudança de política mais recente do oponente que mexeu um parâmetro que move M **no mesmo sentido**. Por exemplo, aumentar `freqRoubo` faz subir a métrica "aposta após o check". Encontrada a causa, a adaptação vira um elo; a cadeia de elos mede a escalada.

**Previsão**: antes de cada resposta do oponente, o agente prevê se ele vai desistir diante da aposta ou apostar depois do check. O acerto e o escore de Brier medem quanto um conhece o outro.

## Análise dos resultados

Ver [ANALISE.md](../ANALISE.md): experimento com e sem memória, limitações e melhorias.

## Uso de IA generativa

O código, a interface e esta documentação foram produzidos com assistência do Claude Code (Anthropic) a partir do relatório do Trabalho 1 e das instruções do grupo. O treinador opcional usa um modelo Llama local via Ollama. Os resultados da análise vêm de execuções reproduzíveis (`npm run experimento`), não de valores inseridos manualmente.
