# Relatório da partida 47

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 20:29:43.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **A** |
| Mãos jogadas | 12 |
| Nível final de blinds | 2 (10/20) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 91% → 91% |
| Conhecimento de B sobre A | 91% → 91% |
| Acerto das previsões (A / B) | 76% / 77% |
| Evidências (cada evento, decisão e adaptação) | [partida-047.jsonl](partida-047.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

_Nenhuma adaptação nesta partida._

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 7 | 5 |
| VPIP (entra no pote) | 100% | 83% |
| PFR (aumenta no pré-flop) | 58% | 33% |
| Agressão (bet+raise / bet+raise+call) | 60% | 47% |
| Desiste diante de aposta | 21% | 17% |
| Blefes (sucesso) | 2 (50%) | 0 (—) |
| Armadilhas | 0 | 3 |
| Showdowns ganhos | 4/6 | 2/6 |
| All-ins | 0 | 1 |
| Maior pote ganho | 1426 | 312 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 70% | 40% | 40% |
| Frequência de blefe | 0% | 0% | 0% | 0% |
| Roubo após check | 25% | 25% | 0% | 0% |
| Armadilha (induzir) | 10% | 10% | 65% | 65% |
| Margem para pagar | -8% | -8% | -6% | -6% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Corrigir blefes, Pagar o blefador, Valor contra pagador; B: Valor contra pagador, Pagar o blefador, Corrigir blefes, Induzir o agressor.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 18% (n≈141) | 26% (n≈140) |
| Agressão (bet+raise / ações) | 39% (n≈141) | 64% (n≈141) |
| Entra no pote (VPIP) | 82% (n≈141) | 85% (n≈141) |
| Aumenta no pré-flop (PFR) | 27% (n≈141) | 48% (n≈141) |
| Check-raise | 2% (n≈124) | 5% (n≈83) |
| Aposta após meu check | 34% (n≈135) | 58% (n≈139) |
| Blefe revelado no showdown | 35% (n≈72) | 44% (n≈112) |
| Meus blefes que funcionaram | 27% (n≈70) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | A | **pré:** A raise 29 B call **flop:** B bet 39 A call **turn:** B bet 92 A fold | fold | B | 228 | 932/1068 |
| 2 | 5/10 | B | **pré:** B raise 26 A call **flop:** A bet 33 B call **turn:** A bet 75 B call **river:** A bet 170 B call | showdown — A: Dois pares (8 e 6); B: Par de 8 | A | 608 | 1236/764 |
| 3 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A check **turn:** B bet 39 A fold | fold | B | 97 | 1207/793 |
| 4 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A bet 37 B call **turn:** A check B check **river:** A check B bet 90 A call | showdown — A: Carta alta (Ás); B: Par de Reis | B | 312 | 1051/949 |
| 5 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 37 B call **turn:** B check A bet 84 B fold | fold | A | 216 | 1117/883 |
| 6 | 5/10 | B | **pré:** B raise 26 A call **flop:** A check B check **turn:** A check B bet 35 A call **river:** A check B bet 83 A fold | fold | B | 205 | 1056/944 |
| 7 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 23 B call **turn:** B check A check **river:** B check A bet 42 B fold | fold | A | 146 | 1108/892 |
| 8 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de 9; B: Par de 9 | A | 58 | 1137/863 |
| 9 | 10/20 | A | **pré:** A call B check **flop:** B check A bet 25 B fold | fold | A | 65 | 1157/843 |
| 10 | 10/20 | B | **pré:** B raise 50 A call **flop:** A check B check **turn:** A check B check **river:** A check B bet 70 A call | showdown — A: Par de 2; B: Dois pares (Damas e 2) | B | 240 | 1037/963 |
| 11 | 10/20 | A | **pré:** A call B check **flop:** B check A bet 25 B call **turn:** B bet 60 A call **river:** B bet 145 A call | showdown — A: Par de 9; B: Par de 3 | A | 500 | 1287/713 |
| 12 | 10/20 | B | **pré:** B raise 50 A raise 150 B call **flop:** A bet 190 B raise (all-in) 563 A call | showdown — A: Dois pares (Damas e 9); B: Dois pares (9 e 4) | A | 1426 | 2000/0 |

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

Placar acumulado: A 27 × 20 B.
