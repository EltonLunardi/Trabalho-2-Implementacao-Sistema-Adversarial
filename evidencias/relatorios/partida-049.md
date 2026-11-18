# Relatório da partida 49

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 20:40:34.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **B** |
| Mãos jogadas | 30 |
| Nível final de blinds | 4 (20/40) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 91% → 91% |
| Conhecimento de B sobre A | 91% → 91% |
| Acerto das previsões (A / B) | 74% / 63% |
| Evidências (cada evento, decisão e adaptação) | [partida-049.jsonl](partida-049.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

_Nenhuma adaptação nesta partida._

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 14 | 15 |
| VPIP (entra no pote) | 93% | 87% |
| PFR (aumenta no pré-flop) | 50% | 30% |
| Agressão (bet+raise / bet+raise+call) | 59% | 43% |
| Desiste diante de aposta | 20% | 19% |
| Blefes (sucesso) | 1 (0%) | 0 (—) |
| Armadilhas | 1 | 6 |
| Showdowns ganhos | 5/14 | 8/14 |
| All-ins | 4 | 2 |
| Maior pote ganho | 1470 | 1340 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 65% | 65% | 40% | 40% |
| Frequência de blefe | 0% | 0% | 0% | 0% |
| Roubo após check | 25% | 25% | 0% | 0% |
| Armadilha (induzir) | 15% | 15% | 65% | 65% |
| Margem para pagar | -8% | -8% | -6% | -6% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Corrigir blefes, Pagar o blefador, Valor contra pagador; B: Valor contra pagador, Pagar o blefador, Corrigir blefes, Induzir o agressor.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 18% (n≈141) | 23% (n≈141) |
| Agressão (bet+raise / ações) | 42% (n≈141) | 62% (n≈141) |
| Entra no pote (VPIP) | 83% (n≈141) | 86% (n≈141) |
| Aumenta no pré-flop (PFR) | 28% (n≈141) | 48% (n≈141) |
| Check-raise | 2% (n≈125) | 5% (n≈86) |
| Aposta após meu check | 36% (n≈136) | 55% (n≈140) |
| Blefe revelado no showdown | 34% (n≈75) | 41% (n≈114) |
| Meus blefes que funcionaram | 27% (n≈71) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | A | **pré:** A call B check **flop:** B check A bet 13 B call **turn:** B check A bet 29 B fold | fold | A | 75 | 1023/977 |
| 2 | 5/10 | B | **pré:** B raise 26 A call **flop:** A bet 33 B call **turn:** A check B bet 80 A call **river:** A check B check | showdown — A: Carta alta (Ás); B: Carta alta (Ás) | A | 278 | 1162/838 |
| 3 | 5/10 | A | **pré:** A raise 29 B call **flop:** B bet 39 A call **turn:** B bet 92 A fold | fold | B | 228 | 1094/906 |
| 4 | 5/10 | B | **pré:** B raise 26 A call **flop:** A check B bet 35 A call **turn:** A bet 76 B call **river:** A bet 172 B call | showdown — A: Par de 5; B: Dois pares (Ases e 5) | B | 618 | 785/1215 |
| 5 | 5/10 | A | **pré:** A call B raise 26 A call **flop:** B bet 35 A call **turn:** B bet 83 A call **river:** B bet 196 A fold | fold | B | 484 | 641/1359 |
| 6 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A bet 36 B call **turn:** A bet 82 B fold | fold | A | 212 | 706/1294 |
| 7 | 5/10 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A check **river:** B check A bet 13 B call | showdown — A: Dois pares (Reis e 2); B: Par de Reis | A | 46 | 729/1271 |
| 8 | 5/10 | B | **pré:** B raise 26 A call **flop:** A check B bet 35 A call **turn:** A bet 76 B call **river:** A bet 172 B call | showdown — A: Dois pares (9 e 2); B: Flush (Dama alto) | B | 618 | 420/1580 |
| 9 | 10/20 | A | **pré:** A raise 55 B call **flop:** B check A check **turn:** B check A check **river:** B bet 75 A call | showdown — A: Carta alta (Ás); B: Sequência até 8 | B | 260 | 290/1710 |
| 10 | 10/20 | B | **pré:** B raise 50 A call **flop:** A check B check **turn:** A bet 65 B call **river:** A bet (all-in) 175 B call | showdown — A: Dois pares (Reis e 3); B: Dois pares (Damas e 3) | A | 580 | 580/1420 |
| 11 | 10/20 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A bet 25 B call **river:** B check A bet 55 B fold | fold | A | 145 | 625/1375 |
| 12 | 10/20 | B | **pré:** B call A raise 55 B call **flop:** A bet 70 B call **turn:** A bet 155 B fold | fold | A | 405 | 750/1250 |
| 13 | 10/20 | A | **pré:** A raise 55 B call **flop:** B check A bet 45 B call **turn:** B bet 135 A call **river:** B bet 320 A fold | fold | B | 790 | 515/1485 |
| 14 | 10/20 | B | **pré:** B call A check **flop:** A bet 25 B call **turn:** A bet 55 B call **river:** A bet 125 B fold | fold | A | 325 | 615/1385 |
| 15 | 10/20 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A check **river:** B bet 25 A fold | fold | B | 65 | 595/1405 |
| 16 | 10/20 | B | **pré:** B raise 50 A call **flop:** A check B check **turn:** A bet 65 B call **river:** A bet 145 B call | showdown — A: Flush (Dama alto); B: Par de 7 | A | 520 | 855/1145 |
| 17 | 15/30 | A | **pré:** A raise 85 B call **flop:** B bet 115 A call **turn:** B check A bet 250 B call **river:** B bet (all-in) 695 A call parcial (all-in) | showdown — A: Sequência até 9; B: Sequência até 9 | empate | 1710 | 855/1145 |
| 18 | 15/30 | B | **pré:** B call A raise 85 B call **flop:** A bet 105 B call **turn:** A bet 240 B fold | fold | A | 620 | 1045/955 |
| 19 | 15/30 | A | **pré:** A raise 85 B call **flop:** B check A check **turn:** B check A check **river:** B bet 115 A call | showdown — A: Par de 2; B: Dois pares (Reis e 2) | B | 400 | 845/1155 |
| 20 | 15/30 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B bet 40 A call **river:** A check B check | showdown — A: Par de 2; B: Par de 2 | B | 140 | 775/1225 |
| 21 | 15/30 | A | **pré:** A raise 85 B call **flop:** B check A check **turn:** B check A check **river:** B bet 115 A fold | fold | B | 285 | 690/1310 |
| 22 | 15/30 | B | **pré:** B call A raise 85 B call **flop:** A bet 105 B call **turn:** A bet 240 B fold | fold | A | 620 | 880/1120 |
| 23 | 15/30 | A | **pré:** A raise 85 B call **flop:** B check A check **turn:** B bet 115 A call **river:** B check A bet 250 B fold | fold | A | 650 | 1080/920 |
| 24 | 15/30 | B | **pré:** B call A raise 85 B call **flop:** A check B bet 115 A call **turn:** A check B bet 270 A fold | fold | B | 670 | 880/1120 |
| 25 | 20/40 | A | **pré:** A call B raise 105 A call **flop:** B bet 145 A call **turn:** B bet 340 A fold | fold | B | 840 | 630/1370 |
| 26 | 20/40 | B | **pré:** B raise 105 A call **flop:** A bet 130 B fold | fold | A | 340 | 735/1265 |
| 27 | 20/40 | A | **pré:** A raise 115 B call **flop:** B bet 155 A call **turn:** B bet 365 A raise incompleto (all-in) 465 B call | showdown — A: Trinca de 4; B: Dois pares (9 e 4) | A | 1470 | 1470/530 |
| 28 | 20/40 | B | **pré:** B call A raise 115 B call **flop:** A bet 145 B call **turn:** A check B check **river:** A bet 325 B call parcial (all-in) | showdown — A: Dois pares (Ases e Damas); B: Flush (Ás alto) | B | 1060 | 940/1060 |
| 29 | 20/40 | A | **pré:** A raise 115 B call **flop:** B check A check **turn:** B check A check **river:** B bet 155 A call | showdown — A: Carta alta (Ás); B: Sequência até Valete | B | 540 | 670/1330 |
| 30 | 20/40 | B | **pré:** B raise 105 A call **flop:** A check B bet 145 A call **turn:** A bet (all-in) 420 B call | showdown — A: Dois pares (Valetes e 6); B: Dois pares (Valetes e 9) | B | 1340 | 0/2000 |

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

Placar acumulado: A 27 × 22 B.
