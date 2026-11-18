# Relatório da partida 45

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 20:19:00.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **A** |
| Mãos jogadas | 22 |
| Nível final de blinds | 3 (15/30) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 91% → 91% |
| Conhecimento de B sobre A | 91% → 91% |
| Acerto das previsões (A / B) | 77% / 59% |
| Evidências (cada evento, decisão e adaptação) | [partida-045.jsonl](partida-045.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 1** — Na mão 1 da partida 45, com blinds de 5/10, o menor stack vale 100,0 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 1** — Na mão 1 da partida 45, com blinds de 5/10, o menor stack vale 100,0 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 12 | 9 |
| VPIP (entra no pote) | 91% | 82% |
| PFR (aumenta no pré-flop) | 45% | 27% |
| Agressão (bet+raise / bet+raise+call) | 70% | 33% |
| Desiste diante de aposta | 33% | 16% |
| Blefes (sucesso) | 4 (25%) | 0 (—) |
| Armadilhas | 0 | 1 |
| Showdowns ganhos | 6/10 | 3/10 |
| All-ins | 0 | 2 |
| Maior pote ganho | 1064 | 987 |

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
| Desiste diante de aposta | 18% (n≈141) | 28% (n≈140) |
| Agressão (bet+raise / ações) | 38% (n≈141) | 66% (n≈141) |
| Entra no pote (VPIP) | 80% (n≈141) | 84% (n≈141) |
| Aumenta no pré-flop (PFR) | 27% (n≈141) | 46% (n≈141) |
| Check-raise | 2% (n≈121) | 6% (n≈79) |
| Aposta após meu check | 34% (n≈133) | 55% (n≈138) |
| Blefe revelado no showdown | 33% (n≈65) | 43% (n≈110) |
| Meus blefes que funcionaram | 27% (n≈67) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | A | **pré:** A call B check **flop:** B bet 14 A call **turn:** B check A bet 31 B call **river:** B bet 75 A raise 231 B call | showdown — A: Dois pares (6 e 4); B: Full house (6 com 4) | B | 572 | 714/1286 |
| 2 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A bet 37 B call **turn:** A bet 84 B call **river:** A bet 191 B call | showdown — A: Trinca de Ases; B: Dois pares (Ases e 7) | A | 682 | 1055/945 |
| 3 | 5/10 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A check **river:** B check A bet 10 B fold | fold | A | 30 | 1065/935 |
| 4 | 5/10 | B | **pré:** B raise 26 A call **flop:** A bet 33 B fold | fold | A | 85 | 1091/909 |
| 5 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A check **turn:** B bet 39 A call **river:** B bet 92 A fold | fold | B | 228 | 1023/977 |
| 6 | 5/10 | B | **pré:** B call A check **flop:** A bet 13 B call **turn:** A bet 29 B call **river:** A bet 66 B fold | fold | A | 170 | 1075/925 |
| 7 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A check **turn:** B check A check **river:** B check A check | showdown — A: Par de 4; B: Par de 4 | A | 58 | 1104/896 |
| 8 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A bet 37 B call **turn:** A check B check **river:** A check B bet 90 A fold | fold | B | 222 | 1038/962 |
| 9 | 10/20 | A | **pré:** A call B raise 50 A call **flop:** B check A bet 65 B call **turn:** B check A bet 145 B call **river:** B check A bet 330 B fold | fold | A | 850 | 1298/702 |
| 10 | 10/20 | B | **pré:** B raise 50 A call **flop:** A check B bet 70 A call **turn:** A check B bet 165 A call **river:** A check B bet (all-in) 417 A fold | fold | B | 987 | 1013/987 |
| 11 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 50 B call **turn:** B check A check **river:** B check A check | showdown — A: Carta alta (Rei); B: Carta alta (Rei) | B | 220 | 903/1097 |
| 12 | 10/20 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de 7; B: Par de 7 | A | 40 | 923/1077 |
| 13 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A check **turn:** B check A check **river:** B check A bet 50 B call | showdown — A: Dois pares (Valetes e 10); B: Dois pares (Valetes e 10) | A | 220 | 1033/967 |
| 14 | 10/20 | B | **pré:** B raise 50 A call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de 4; B: Par de 4 | B | 100 | 983/1017 |
| 15 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 75 B call **turn:** B check A bet 170 B call **river:** B check A bet 390 B fold | fold | A | 1000 | 1288/712 |
| 16 | 10/20 | B | **pré:** B raise 50 A call **flop:** A check B check **turn:** A check B bet 70 A fold | fold | B | 170 | 1238/762 |
| 17 | 15/30 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A bet 30 B call **river:** B bet 80 A fold | fold | B | 200 | 1178/822 |
| 18 | 15/30 | B | **pré:** B raise 80 A call **flop:** A check B check **turn:** A check B check **river:** A bet 100 B call | showdown — A: Dois pares (9 e 3); B: Par de 9 | A | 360 | 1358/642 |
| 19 | 15/30 | A | **pré:** A raise 85 B call **flop:** B check A bet 110 B call **turn:** B check A bet 250 B fold | fold | A | 640 | 1553/447 |
| 20 | 15/30 | B | **pré:** B call A raise 85 B call **flop:** A check B bet 115 A fold | fold | B | 285 | 1468/532 |
| 21 | 15/30 | A | **pré:** A call B check **flop:** B bet 40 A call **turn:** B check A check **river:** B check A bet 90 B call | showdown — A: Par de Reis; B: Par de Reis | empate | 320 | 1468/532 |
| 22 | 15/30 | B | **pré:** B call A raise 85 B call **flop:** A bet 110 B call **turn:** A bet 250 B call **river:** A bet 565 B call parcial (all-in) | showdown — A: Dois pares (8 e 7); B: Dois pares (7 e 3) | A | 1064 | 2000/0 |

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

Placar acumulado: A 25 × 20 B.
