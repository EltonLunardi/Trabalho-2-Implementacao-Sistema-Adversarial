# Relatório da partida 56

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 21:14:50.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **B** |
| Mãos jogadas | 21 |
| Nível final de blinds | 3 (15/30) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 91% → 91% |
| Conhecimento de B sobre A | 91% → 91% |
| Acerto das previsões (A / B) | 79% / 65% |
| Evidências (cada evento, decisão e adaptação) | [partida-056.jsonl](partida-056.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **B · mão 1** — Na mão 1 da partida 56, B percebeu que A começou a apostar só com mãos fortes — blefe revelado no showdown foi de 35% (histórico) para 16% (recente); B passou a confiar na leitura recente em vez do histórico.
- **B · mão 1** — A partir do momento em que A começou a apostar só com mãos fortes (percebido na mão 1), B abandonou a postura "Pagar o blefador" na mão 1 da partida 56 (margem para pagar -6 p.p. → +2 p.p.). Leitura: A mostrou mão fraca em 16% dos showdowns em que apostou (3/20 recentes); a leitura que motivou essa postura deixou de valer.
- **B · mão 6** — Na mão 6 da partida 56, B observou que A aposta em 60% das vezes depois do check de B (17/20 recentes). Em resposta, B passou a dar check com mãos fortes esperando a aposta dele (armadilha (induzir) 65% → 80%; margem para pagar +2 p.p. → -2 p.p.).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 12 | 9 |
| VPIP (entra no pote) | 86% | 100% |
| PFR (aumenta no pré-flop) | 33% | 52% |
| Agressão (bet+raise / bet+raise+call) | 58% | 40% |
| Desiste diante de aposta | 18% | 29% |
| Blefes (sucesso) | 4 (50%) | 0 (—) |
| Armadilhas | 0 | 1 |
| Showdowns ganhos | 4/10 | 6/10 |
| All-ins | 2 | 1 |
| Maior pote ganho | 421 | 1602 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 70% | 40% | 40% |
| Frequência de blefe | 0% | 0% | 0% | 0% |
| Roubo após check | 25% | 25% | 0% | 0% |
| Armadilha (induzir) | 20% | 20% | 65% | 80% |
| Margem para pagar | -8% | -8% | -6% | -2% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Corrigir blefes, Pagar o blefador, Valor contra pagador; B: Valor contra pagador, Corrigir blefes, Induzir o agressor, Armadilha contra roubo.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 19% (n≈141) | 23% (n≈141) |
| Agressão (bet+raise / ações) | 38% (n≈141) | 61% (n≈141) |
| Entra no pote (VPIP) | 84% (n≈141) | 85% (n≈141) |
| Aumenta no pré-flop (PFR) | 32% (n≈141) | 40% (n≈141) |
| Check-raise | 3% (n≈131) | 5% (n≈93) |
| Aposta após meu check | 33% (n≈138) | 58% (n≈141) |
| Blefe revelado no showdown | 32% (n≈83) | 36% (n≈120) |
| Meus blefes que funcionaram | 29% (n≈77) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B raise 26 A call **flop:** A check B check **turn:** A check B check **river:** A bet 33 B call | showdown — A: Par de 7; B: Carta alta (Ás) | A | 118 | 1059/941 |
| 2 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 37 B fold | fold | A | 95 | 1088/912 |
| 3 | 5/10 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de 6; B: Par de 6 | B | 20 | 1078/922 |
| 4 | 5/10 | A | **pré:** A call B raise 26 A call **flop:** B check A bet 21 B fold | fold | A | 73 | 1104/896 |
| 5 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A bet 37 B call **turn:** A bet 84 B fold | fold | A | 216 | 1170/830 |
| 6 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 37 B fold | fold | A | 95 | 1199/801 |
| 7 | 5/10 | B | **pré:** B raise 26 A call **flop:** A bet 33 B call **turn:** A bet 75 B call **river:** A bet 170 B raise (all-in) 667 A call | showdown — A: Dois pares (10 e 4); B: Dois pares (Reis e 10) | B | 1602 | 398/1602 |
| 8 | 5/10 | A | **pré:** A call B raise 26 A call **flop:** B check A bet 21 B call **turn:** B check A check **river:** B check A check | showdown — A: Carta alta (Ás); B: Carta alta (Ás) | B | 94 | 351/1649 |
| 9 | 10/20 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B bet 25 A call **river:** A check B check | showdown — A: Par de 3; B: Par de 5 | B | 90 | 306/1694 |
| 10 | 10/20 | A | **pré:** A call B raise 50 A call **flop:** B check A bet 65 B call **turn:** B check A bet (all-in) 191 B fold | fold | A | 421 | 421/1579 |
| 11 | 10/20 | B | **pré:** B raise 50 A call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Carta alta (Rei); B: Carta alta (Dama) | A | 100 | 471/1529 |
| 12 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A check **turn:** B check A check **river:** B check A bet 50 B fold | fold | A | 170 | 531/1469 |
| 13 | 10/20 | B | **pré:** B raise 50 A call **flop:** A bet 65 B call **turn:** A bet 145 B fold | fold | A | 375 | 646/1354 |
| 14 | 10/20 | A | **pré:** A call B raise 50 A call **flop:** B bet 70 A fold | fold | B | 170 | 596/1404 |
| 15 | 10/20 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A bet 25 B call | showdown — A: Sequência até Dama; B: Par de 8 | A | 90 | 641/1359 |
| 16 | 10/20 | A | **pré:** A call B raise 50 A call **flop:** B check A check **turn:** B bet 70 A call **river:** B bet 165 A fold | fold | B | 405 | 521/1479 |
| 17 | 15/30 | B | **pré:** B raise 80 A call **flop:** A bet 100 B call **turn:** A check B check **river:** A check B check | showdown — A: Par de 8; B: Par de 8 | A | 360 | 701/1299 |
| 18 | 15/30 | A | **pré:** A raise 85 B call **flop:** B check A check **turn:** B check A bet 70 B call **river:** B check A check | showdown — A: Carta alta (Dama); B: Carta alta (Rei) | B | 310 | 546/1454 |
| 19 | 15/30 | B | **pré:** B call A raise 85 B call **flop:** A bet 110 B fold | fold | A | 280 | 631/1369 |
| 20 | 15/30 | A | **pré:** A call B raise 80 A call **flop:** B check A check **turn:** B check A check **river:** B bet 110 A fold | fold | B | 270 | 551/1449 |
| 21 | 15/30 | B | **pré:** B call A raise 85 B call **flop:** A bet 110 B call **turn:** A bet (all-in) 356 B call | showdown — A: Par de 8; B: Dois pares (4 e 3) | B | 1102 | 0/2000 |

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
| [12](partida-012.md) | B | 15 | 86% | 87% | 90% | 67% | 0 | 0 |
| [13](partida-013.md) | B | 19 | 87% | 87% | 84% | 50% | 0 | 0 |
| [14](partida-014.md) | B | 11 | 87% | 88% | 74% | 72% | 0 | 0 |
| [15](partida-015.md) | A | 7 | 88% | 88% | 86% | 75% | 0 | 0 |
| [16](partida-016.md) | B | 9 | 88% | 88% | 89% | 82% | 0 | 0 |
| [17](partida-017.md) | A | 8 | 88% | 88% | 100% | 59% | 0 | 0 |
| [18](partida-018.md) | B | 4 | 88% | 88% | 100% | 100% | 0 | 0 |
| [19](partida-019.md) | B | 26 | 89% | 89% | 89% | 70% | 2 | 1 |
| [20](partida-020.md) | A | 17 | 89% | 89% | 83% | 69% | 1 | 1 |
| [21](partida-021.md) | B | 7 | 89% | 89% | 86% | 73% | 0 | 0 |
| [22](partida-022.md) | A | 22 | 90% | 89% | 88% | 57% | 2 | 0 |
| [23](partida-023.md) | B | 28 | 90% | 90% | 83% | 62% | 0 | 0 |
| [24](partida-024.md) | A | 17 | 90% | 90% | 83% | 56% | 0 | 0 |
| [25](partida-025.md) | A | 11 | 90% | 90% | 85% | 62% | 2 | 0 |
| [26](partida-026.md) | B | 17 | 90% | 90% | 78% | 59% | 1 | 0 |
| [27](partida-027.md) | A | 3 | 90% | 90% | 100% | 80% | 0 | 0 |
| [28](partida-028.md) | A | 31 | 90% | 90% | 79% | 66% | 1 | 0 |
| [29](partida-029.md) | A | 5 | 90% | 90% | 80% | 89% | 0 | 0 |
| [30](partida-030.md) | A | 17 | 90% | 90% | 76% | 68% | 0 | 0 |
| [31](partida-031.md) | A | 17 | 91% | 90% | 78% | 90% | 0 | 0 |
| [32](partida-032.md) | A | 16 | 91% | 91% | 72% | 52% | 1 | 0 |
| [33](partida-033.md) | A | 21 | 91% | 91% | 71% | 55% | 1 | 0 |
| [34](partida-034.md) | A | 10 | 91% | 91% | 81% | 73% | 0 | 0 |
| [35](partida-035.md) | A | 9 | 91% | 91% | 88% | 88% | 0 | 0 |
| [36](partida-036.md) | A | 11 | 91% | 91% | 81% | 44% | 0 | 0 |
| [37](partida-037.md) | B | 30 | 91% | 91% | 73% | 63% | 3 | 1 |
| [38](partida-038.md) | B | 17 | 91% | 91% | 72% | 63% | 6 | 2 |
| [39](partida-039.md) | A | 3 | 91% | 91% | 89% | 67% | 0 | 0 |
| [40](partida-040.md) | A | 42 | 91% | 91% | 62% | 66% | 4 | 2 |
| [41](partida-041.md) | B | 6 | 91% | 91% | 75% | 86% | 0 | 0 |
| [42](partida-042.md) | B | 11 | 91% | 91% | 89% | 71% | 0 | 0 |
| [43](partida-043.md) | B | 8 | 91% | 91% | 90% | 50% | 0 | 0 |
| [44](partida-044.md) | A | 3 | 91% | 91% | 83% | 80% | 0 | 0 |
| [45](partida-045.md) | A | 22 | 91% | 91% | 77% | 59% | 0 | 0 |
| [46](partida-046.md) | A | 26 | 91% | 91% | 77% | 77% | 0 | 0 |
| [47](partida-047.md) | A | 12 | 91% | 91% | 76% | 77% | 0 | 0 |
| [48](partida-048.md) | B | 6 | 91% | 91% | 94% | 93% | 1 | 0 |
| [49](partida-049.md) | B | 30 | 91% | 91% | 74% | 63% | 0 | 0 |
| [50](partida-050.md) | A | 14 | 91% | 91% | 87% | 58% | 1 | 0 |
| [51](partida-051.md) | A | 24 | 91% | 91% | 76% | 76% | 0 | 0 |
| [52](partida-052.md) | B | 14 | 91% | 91% | 79% | 73% | 0 | 0 |
| [53](partida-053.md) | A | 20 | 91% | 91% | 72% | 61% | 0 | 0 |
| [54](partida-054.md) | A | 15 | 91% | 91% | 87% | 71% | 0 | 0 |
| [55](partida-055.md) | A | 9 | 91% | 91% | 81% | 87% | 0 | 0 |
| [56](partida-056.md) | B | 21 | 91% | 91% | 79% | 65% | 3 | 1 |

Placar acumulado: A 32 × 24 B.
