# Relatório da partida 11

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 18:01:03.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **B** |
| Mãos jogadas | 8 |
| Nível final de blinds | 1 (5/10) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 85% → 85% |
| Conhecimento de B sobre A | 86% → 86% |
| Acerto das previsões (A / B) | 65% / 71% |
| Evidências (cada evento, decisão e adaptação) | [partida-011.jsonl](partida-011.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **B · mão 2** — A partir da mão 3 da partida 10, quando A passou a pagar apostas com mãos mais fracas, A começou a pagar os blefes. B observou que os blefes de B funcionam em 32% das vezes (2/8 recentes). Na mão 2 da partida 11, B reduziu os próprios blefes (roubo após check 5% → 0%).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 2 | 6 |
| VPIP (entra no pote) | 88% | 75% |
| PFR (aumenta no pré-flop) | 38% | 38% |
| Agressão (bet+raise / bet+raise+call) | 56% | 53% |
| Desiste diante de aposta | 20% | 20% |
| Blefes (sucesso) | 1 (100%) | 1 (0%) |
| Armadilhas | 0 | 2 |
| Showdowns ganhos | 0/4 | 4/4 |
| All-ins | 1 | 0 |
| Maior pote ganho | 33 | 796 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 70% | 45% | 45% |
| Frequência de blefe | 3% | 3% | 0% | 0% |
| Roubo após check | 20% | 20% | 5% | 0% |
| Armadilha (induzir) | 5% | 5% | 55% | 55% |
| Margem para pagar | -8% | -8% | -6% | -6% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Valor contra pagador, Corrigir blefes, Pagar o blefador; B: Induzir o agressor, Valor contra pagador, Pagar o blefador, Corrigir blefes.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 18% (n≈113) | 31% (n≈86) |
| Agressão (bet+raise / ações) | 39% (n≈131) | 65% (n≈130) |
| Entra no pote (VPIP) | 78% (n≈96) | 84% (n≈95) |
| Aumenta no pré-flop (PFR) | 30% (n≈96) | 41% (n≈95) |
| Check-raise | 2% (n≈49) | 5% (n≈26) |
| Aposta após meu check | 30% (n≈71) | 47% (n≈83) |
| Blefe revelado no showdown | 43% (n≈14) | 51% (n≈45) |
| Meus blefes que funcionaram | 31% (n≈26) | 32% (n≈8) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A check **turn:** B bet 40 A call **river:** B bet 95 A fold | fold | B | 233 | 931/1069 |
| 2 | 5/10 | B | **pré:** B call A check **flop:** A check B bet 10 A call **turn:** A bet 25 B call **river:** A check B check | showdown — A: Par de 5; B: Par de 5 | B | 90 | 886/1114 |
| 3 | 5/10 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A bet 10 B fold | fold | A | 30 | 896/1104 |
| 4 | 5/10 | B | **pré:** B raise 27 A call **flop:** A check B bet 37 A call **turn:** A check B check **river:** A bet 81 B call | showdown — A: Par de 4; B: Par de 4 | B | 290 | 751/1249 |
| 5 | 5/10 | A | **pré:** A call B check **flop:** B check A bet 13 B fold | fold | A | 33 | 761/1239 |
| 6 | 5/10 | B | **pré:** B raise 27 A call **flop:** A check B check **turn:** A check B bet 37 A call **river:** A check B bet 88 A raise 270 B call | showdown — A: Dois pares (Reis e 7); B: Full house (7 com Reis) | B | 668 | 427/1573 |
| 7 | 5/10 | A | **pré:** A raise 29 B call **flop:** B bet 40 A fold | fold | B | 98 | 398/1602 |
| 8 | 5/10 | B | **pré:** B raise 27 A raise 81 B call **flop:** A bet 103 B call **turn:** A bet (all-in) 214 B call | showdown — A: Par de 7; B: Par de 10 | B | 796 | 0/2000 |

## Aprendizado entre partidas

| Partida | Vencedor | Mãos | Conhecimento A→B | Conhecimento B→A | Acerto A | Acerto B | Adaptações | Maior cadeia |
|---:|---|---:|---:|---:|---:|---:|---:|---:|
| [1](partida-001.md) | B | 11 | 42% | 40% | 45% | 68% | 4 | 2 |
| [2](partida-002.md) | A | 26 | 67% | 64% | 80% | 57% | 3 | 2 |
| [3](partida-003.md) | A | 5 | 68% | 67% | 88% | 40% | 1 | 1 |
| [4](partida-004.md) | B | 14 | 73% | 72% | 89% | 58% | 2 | 3 |
| [5](partida-005.md) | A | 13 | 76% | 76% | 77% | 47% | 0 | 0 |
| [6](partida-006.md) | B | 18 | 79% | 80% | 81% | 58% | 0 | 0 |
| [7](partida-007.md) | B | 22 | 82% | 83% | 82% | 53% | 0 | 0 |
| [8](partida-008.md) | A | 34 | 84% | 85% | 78% | 62% | 1 | 0 |
| [9](partida-009.md) | A | 1 | 84% | 85% | 100% | 100% | 0 | 0 |
| [10](partida-010.md) | B | 11 | 85% | 86% | 79% | 50% | 1 | 0 |
| [11](partida-011.md) | B | 8 | 85% | 86% | 65% | 71% | 1 | 1 |

Placar acumulado: A 5 × 6 B.
