# Análise dos resultados

Resultados de `npm run experimento -- 20` (seed 2026, 1000 fichas por agente, blinds sobem a cada 8 mãos, perfis A = Pressionador e B = Valor e indução, treinador Llama desligado para manter o experimento determinístico). Os mesmos números saem de qualquer nova execução com a mesma seed.

## 1. Rodadas conectadas e adaptação

O ciclo **ação → resposta → observação → adaptação** acontece dentro de cada partida, sem roteiro. As cartas vêm de um baralho embaralhado por seed, e cada decisão depende do estado da mesa e do modelo que o agente construiu até ali. Um exemplo da partida 1 desse experimento, registrado no `partida-001.md` que o comando grava no diretório indicado ao final da execução:

1. **Mão 7.** B observou que A aposta em 60% das vezes depois do check de B (6/9 observações). B passou a dar check com mãos fortes esperando essa aposta: armadilha de 30% para 50%, margem para pagar de +2 para −2 p.p.
2. **Mão 8.** Com essa mudança, B passou a jogar de forma mais passiva. A observou que B aposta ou aumenta em só 25% das ações e passou a desistir quando B aposta e a roubar quando B não aposta: roubo de 50% para 60%, margem de 0 para +7 p.p.
3. **Mão 8.** Com A mais agressivo, B observou que A aposta ou aumenta em 61% das ações e passou a induzir o agressor: agressividade de 55% para 45%, armadilha de 50% para 75%. Isso forma uma **cadeia de 2 reações**.

Nas 20 partidas com memória houve 7 influências cruzadas (2 de A sobre B e 5 de B sobre A), com reação média de **6,6 mãos** entre a mudança de um agente e a resposta do outro, e maior cadeia de 3 reações.

## 2. Aprendizado entre partidas: com memória × sem memória

| Bloco | Conhecimento A→B (com / sem) | Acerto das previsões de A (com / sem) | Acerto das previsões de B (com / sem) | Adaptações (com / sem) |
|---|---|---|---|---|
| Partidas 1–5 | 65% / 43% | 76% / 71% | 54% / 57% | 10 / 16 |
| Partidas 6–10 | 83% / 48% | 80% / 68% | 57% / 54% | 2 / 21 |
| Partidas 11–15 | 87% / 55% | 87% / 78% | 62% / 53% | 0 / 29 |
| Partidas 16–20 | 88% / 40% | 90% / 72% | 78% / 69% | 0 / 19 |

Leitura:

- **Com memória**, cada agente acumula observações do outro: o índice de conhecimento sobe de 65% para 88% e as previsões ficam mais precisas (A de 76% para 90%, B de 54% para 78%). É o efeito pedido: na partida 5 cada um já "sabe" como o outro costuma reagir.
- **Sem memória**, cada partida começa do zero. O conhecimento oscila entre 40% e 55%, e os agentes reaprendem as mesmas leituras a cada partida. Isso gera muito mais adaptações (85 contra 12) e cadeias mais longas (7 contra 3), ou seja, a escalada se reinicia em toda partida.
- **Convergência.** Com memória, as adaptações cessam depois da partida 10. As leituras de longo prazo se estabilizam, as regras ativas deixam de cruzar seus limiares e os dois agentes chegam a um par de posturas estáveis. Por ser um equilíbrio de respostas às leituras, e não um equilíbrio de Nash do jogo completo, ele só se rompe se um agente mudar de comportamento de forma persistente, por exemplo com o treinador Llama ou com uma troca de perfil.
- **Assimetria.** B prevê A com menos acerto que o inverso. A, como Pressionador, mistura mais blefes e roubos, e isso o torna menos previsível. B, de valor e indução, é mais consistente e, portanto, mais legível.
- **Resultado esportivo.** B venceu 13 das 20 partidas com memória e 15 das 20 sem memória. O perfil de valor e indução se saiu melhor contra o pressionador nos dois cenários. A memória reduziu a vantagem de B, o que indica que A tirou mais proveito de conhecer o oponente.

## 3. Execução ao vivo com o treinador Llama (68 partidas)

Execução contínua da arena (`npm start`, seed 2026, memória ligada, treinador `llama3.1:8b` via Ollama), com **68 partidas e 1 119 mãos**. Os dados estão em `relatorios/geral.md`, nos relatórios por partida e em `dados/memoria.json`.

| Bloco | Mãos/partida | Conhecimento A→B | Acerto A | Acerto B | Adaptações | Maior cadeia | Vitórias A/B |
|---|---:|---:|---:|---:|---:|---:|---|
| P1–P10 | 15,5 | 74% | 80% | 59% | 12 | 3 | 5/5 |
| P11–P20 | 12,4 | 88% | 86% | 72% | 4 | 1 | 3/7 |
| P21–P30 | 15,8 | 90% | 84% | 67% | 6 | 0 | 7/3 |
| P31–P40 | 17,6 | 91% | 77% | 66% | 15 | 2 | 8/2 |
| P41–P50 | 13,8 | 91% | 82% | 71% | 2 | 0 | 5/5 |
| P51–P60 | 19,5 | 91% | 77% | 71% | 5 | 1 | 5/5 |
| P61–P68 | 21,6 | 91% | 79% | 70% | 2 | 1 | 6/2 |

Leitura:

- **Conhecimento.** Sobe rápido nas primeiras 20 partidas (de 74% para 88%) e satura em 91%. Depois disso, novas partidas acrescentam pouco ao modelo de longo prazo.
- **O treinador reabriu a dinâmica.** Sem ele, o experimento da seção 2 parou de se adaptar após a partida 10. Aqui o treinador ajustou a política base de A nas partidas 22, 32, 48 e 50, e a de B na 22. Os ajustes de A (agressividade, roubo e armadilha) mudaram o comportamento observável de A. Isso disparou uma nova rodada de reações nas partidas 37–40, com 15 adaptações e cadeia 2: B voltou a "induzir o agressor" e A respondeu abandonando e retomando a mesma postura.
- **Efeito no resultado.** Antes da primeira intervenção do treinador (P1–P22), A venceu 9 de 22 partidas (41%). Depois (P23–P68), venceu 30 de 46 (65%). É uma correlação de uma única execução, com um modelo não determinístico; mostra que o ciclo de aprendizado entre partidas tem efeito mensurável, mas não prova que o treinador seja a causa.
- **Influência cruzada.** Ao longo das 68 partidas, B reagiu a mudanças de A 5 vezes e A reagiu a mudanças de B 9 vezes, com intervalo médio de 5,6 mãos entre a mudança de um e a reação do outro.
- **Previsões.** O acerto de A estabiliza perto de 80% e o de B perto de 70%. A continua mais difícil de prever, por misturar blefe e roubo.
- **Limitação observada.** Em velocidade turbo as partidas acabam em cerca de 1 s, e o treinador leva cerca de 22 s por agente. Por isso ele analisou só algumas partidas. A versão atual inicia uma análise apenas quando a anterior termina.

### Comportamento dos agentes ao longo das 68 partidas

Reconstruído a partir das adaptações registradas (política efetiva) e das estatísticas observadas em cada relatório:

| | Início (perfil) | Fim (partida 68) | Comportamento observado |
|---|---|---|---|
| **A** (Pressionador) | blefe 30%, roubo 50%, armadilha 5% | blefe 0%, roubo 25%, armadilha 20% | Continua agressivo (64–72% de agressão), mas cortou o blefe já nas partidas 2 a 4, quando percebeu que B pagava, e passou a apostar por valor. |
| **B** (Valor e indução) | blefe 8%, armadilha 30%, agressividade 55% | blefe 0%, armadilha 80%, agressividade 40% | Virou um "armador": passivo (32–40% de agressão), desiste diante de só 13–19% das apostas e não blefa mais desde a partida 18. |

A primeira cadeia aparece na partida 1. Na mão 7, B vê A apostar em 60% das vezes depois do check e sobe a armadilha de 30% para 50%. Na mão 8, A percebe B mais passivo e rouba mais potes, e B responde induzindo o agressor, com armadilha de 75%. Depois disso, cada um explora o estilo do outro: A deixa de blefar contra quem paga, e B deixa de apostar contra quem é agressivo.

## 4. Limitações

- **Agentes heurísticos.** As regras e os limiares foram escolhidos à mão. Não há garantia de política ótima nem de equilíbrio do jogo completo; a análise mostra adaptação, não otimalidade.
- **Modelo de faixa simples.** A faixa do oponente é inferida apenas pelo número de apostas e por categorias de mão (par ou melhor, dois pares ou melhor). Draws e tamanhos de aposta são ignorados na faixa.
- **Encadeamento causal heurístico.** O narrador liga uma adaptação à mudança mais recente do oponente que mexe a métrica no mesmo sentido, dentro de uma janela de 60 mãos. É uma explicação plausível e rastreável, não uma prova estatística de causalidade.
- **Uma seed por experimento.** Os números acima vêm de uma única sequência de cartas. Conclusões mais fortes exigiriam várias seeds e intervalos de confiança.
- **Convergência precoce com memória.** O decaimento lento da memória de longo prazo estabiliza as leituras e encerra a dinâmica de adaptação por volta da partida 10.
- **Treinador Llama não determinístico.** Os ajustes do modelo local variam entre execuções. Ele foi desligado no experimento e entra só como componente opcional.
- **Fora do escopo, por decisão do grupo:** a demonstração ao vivo das ameaças T1–T3 do Trabalho 1. Os controles C1, C2, C3 e C5 estão no motor e são testados; o C4 (orçamento de tempo em processo separado) não foi implementado, porque os agentes são módulos locais e confiáveis.

## 5. Melhorias possíveis

- Executar o experimento com várias seeds e reportar médias com intervalos de confiança.
- Introduzir **exploração** (por exemplo, ε-greedy sobre as posturas) ou esquecimento adaptativo, para evitar a convergência precoce e manter a corrida armamentista observável.
- Usar o tamanho das apostas e os draws na inferência da faixa do oponente.
- Medir a causalidade com testes contrafactuais: repetir a mesma seed com uma regra desligada e comparar a reação do oponente.
- Implementar o C4 (executor em processo separado com orçamento de tempo) e um modo de ataque T1–T3 para verificar os controles sob adversário malicioso.
- Comparar o treinador Llama com o modelo Qwen 2.5, também instalado, e medir se os ajustes do treinador melhoram o resultado em relação às heurísticas puras.
