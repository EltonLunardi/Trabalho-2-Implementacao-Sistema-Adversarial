# Relatório da partida 40

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 20:03:44.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **A** |
| Mãos jogadas | 42 |
| Nível final de blinds | 6 (40/80) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 91% → 91% |
| Conhecimento de B sobre A | 91% → 91% |
| Acerto das previsões (A / B) | 62% / 66% |
| Evidências (cada evento, decisão e adaptação) | [partida-040.jsonl](partida-040.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 2** — Na mão 2 da partida 40, A percebeu que B começou a apostar e aumentar com mais frequência — agressão (bet+raise / ações) foi de 39% (histórico) para 58% (recente); A passou a confiar na leitura recente em vez do histórico.
- **B · mão 2** — Na mão 2 da partida 40, B percebeu que A começou a jogar de forma mais passiva — agressão (bet+raise / ações) foi de 64% (histórico) para 45% (recente); B passou a confiar na leitura recente em vez do histórico.
- **A · mão 3** — A partir do momento em que B começou a apostar e aumentar com mais frequência (percebido na mão 2), A abandonou a postura "Induzir o agressor" na mão 3 da partida 40 (agressividade 60% → 70%; armadilha (induzir) 35% → 10%). Leitura: B aposta ou aumenta em 39% das suas ações (10/20 recentes); a leitura que motivou essa postura deixou de valer.
- **B · mão 4** — A partir da mão 3, quando A abandonou a postura "Induzir o agressor", A começou a apostar e aumentar com mais frequência. B observou que A aposta ou aumenta em 64% das suas ações (11/20 recentes). Na mão 4 da partida 40, B passou a dar check e pagar com mãos fortes para induzir apostas (agressividade 50% → 40%; armadilha (induzir) 40% → 65%). **[cadeia 2]**
- **A · mão 20** — Na mão 20 da partida 40, com blinds de 15/30, o menor stack vale 8,3 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 20** — Na mão 20 da partida 40, com blinds de 15/30, o menor stack vale 8,3 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).
- **A · mão 21** — Na mão 21 da partida 40, com blinds de 15/30, o menor stack vale 16,7 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 21** — Na mão 21 da partida 40, com blinds de 15/30, o menor stack vale 16,7 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.
- **A · mão 24** — Na mão 24 da partida 40, com blinds de 15/30, o menor stack vale 7,0 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 24** — Na mão 24 da partida 40, com blinds de 15/30, o menor stack vale 7,0 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).
- **A · mão 29** — Na mão 29 da partida 40, com blinds de 20/40, o menor stack vale 19,5 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 29** — Na mão 29 da partida 40, com blinds de 20/40, o menor stack vale 19,5 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.
- **A · mão 30** — Na mão 30 da partida 40, com blinds de 20/40, o menor stack vale 11,0 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 30** — Na mão 30 da partida 40, com blinds de 20/40, o menor stack vale 11,0 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 23 | 19 |
| VPIP (entra no pote) | 62% | 57% |
| PFR (aumenta no pré-flop) | 36% | 19% |
| Agressão (bet+raise / bet+raise+call) | 61% | 46% |
| Desiste diante de aposta | 37% | 28% |
| Blefes (sucesso) | 7 (29%) | 0 (—) |
| Armadilhas | 0 | 3 |
| Showdowns ganhos | 6/10 | 4/10 |
| All-ins | 10 | 5 |
| Maior pote ganho | 1780 | 1750 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 60% | 70% | 50% | 40% |
| Frequência de blefe | 0% | 0% | 0% | 0% |
| Roubo após check | 25% | 25% | 0% | 0% |
| Armadilha (induzir) | 35% | 10% | 40% | 65% |
| Margem para pagar | -8% | -8% | -6% | -6% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Corrigir blefes, Pagar o blefador, Valor contra pagador; B: Valor contra pagador, Pagar o blefador, Corrigir blefes, Induzir o agressor.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 22% (n≈141) | 28% (n≈138) |
| Agressão (bet+raise / ações) | 41% (n≈141) | 64% (n≈141) |
| Entra no pote (VPIP) | 53% (n≈141) | 82% (n≈141) |
| Aumenta no pré-flop (PFR) | 26% (n≈141) | 46% (n≈141) |
| Check-raise | 2% (n≈117) | 4% (n≈73) |
| Aposta após meu check | 33% (n≈131) | 55% (n≈136) |
| Blefe revelado no showdown | 33% (n≈60) | 41% (n≈106) |
| Meus blefes que funcionaram | 28% (n≈64) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B bet 14 A fold | fold | B | 34 | 990/1010 |
| 2 | 5/10 | A | **pré:** A call B raise 27 A call **flop:** B bet 38 A call **turn:** B bet 91 A call **river:** B bet 218 A fold | fold | B | 530 | 834/1166 |
| 3 | 5/10 | B | **pré:** B call A raise 28 B call **flop:** A check B bet 39 A call **turn:** A check B bet 94 A fold | fold | B | 228 | 767/1233 |
| 4 | 5/10 | A | **pré:** A call B raise 27 A call **flop:** B check A check **turn:** B check A bet 22 B call **river:** B check A bet 39 B call | showdown — A: Par de 6; B: Par de 6 | B | 176 | 679/1321 |
| 5 | 5/10 | B | **pré:** B call A check **flop:** A check B bet 14 A fold | fold | B | 34 | 669/1331 |
| 6 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 23 B call **turn:** B check A bet 42 B call **river:** B check A bet 120 B fold | fold | A | 308 | 763/1237 |
| 7 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A bet 37 B fold | fold | A | 95 | 792/1208 |
| 8 | 5/10 | A | **pré:** A call B check **flop:** B check A bet 13 B call **turn:** B check A bet 18 B call **river:** B bet 56 A call | showdown — A: Par de 9; B: Dois pares (9 e 3) | B | 194 | 695/1305 |
| 9 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A bet 75 B call **turn:** A bet 170 B call **river:** A bet (all-in) 390 B fold | fold | A | 1000 | 1000/1000 |
| 10 | 10/20 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A bet 20 B fold | fold | A | 60 | 1020/980 |
| 11 | 10/20 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B bet 25 A fold | fold | B | 65 | 1000/1000 |
| 12 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 75 B call **turn:** B check A bet 170 B call **river:** B check A check | showdown — A: Par de 4; B: Carta alta (Rei) | A | 610 | 1305/695 |
| 13 | 10/20 | B | **pré:** B raise 50 A call **flop:** A check B check **turn:** A bet 65 B call **river:** A bet 145 B fold | fold | A | 375 | 1420/580 |
| 14 | 10/20 | A | **pré:** A call B check **flop:** B bet 25 A call **turn:** B bet 60 A call **river:** B bet 145 A fold | fold | B | 355 | 1315/685 |
| 15 | 10/20 | B | **pré:** B raise 50 A call **flop:** A bet 65 B raise 225 A call **turn:** A check B check **river:** A check B bet (all-in) 410 A fold | fold | B | 960 | 1040/960 |
| 16 | 10/20 | A | **pré:** A raise 60 B call **flop:** B bet 80 A call **turn:** B bet 190 A fold | fold | B | 470 | 900/1100 |
| 17 | 15/30 | B | **pré:** B call A check **flop:** A bet 40 B fold | fold | A | 100 | 930/1070 |
| 18 | 15/30 | A | **pré:** A raise 85 B call **flop:** B check A check **turn:** B check A bet 110 B call **river:** B check A bet 250 B fold | fold | A | 640 | 1125/875 |
| 19 | 15/30 | B | **pré:** B call A raise 85 B call **flop:** A check B bet 115 A call **turn:** A bet 255 B raise (all-in) 675 A call | showdown — A: Par de 9; B: Dois pares (9 e 4) | B | 1750 | 250/1750 |
| 20 | 15/30 | A | **pré:** A raise (all-in) 250 B call | showdown — A: Par de Ases; B: Par de 9 | A | 500 | 500/1500 |
| 21 | 15/30 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B bet 40 A call | showdown — A: Dois pares (8 e 5); B: Full house (5 com 8) | B | 140 | 430/1570 |
| 22 | 15/30 | A | **pré:** A call B check **flop:** B check A check **turn:** B bet 40 A fold | fold | B | 100 | 400/1600 |
| 23 | 15/30 | B | **pré:** B raise 80 A call **flop:** A check B bet 110 A call **turn:** A check B bet 260 A fold | fold | B | 640 | 210/1790 |
| 24 | 15/30 | A | **pré:** A fold | fold | B | 45 | 195/1805 |
| 25 | 20/40 | B | **pré:** B raise (all-in) 1805 A call parcial (all-in) | showdown — A: Flush (Ás alto); B: Flush (9 alto) | A | 390 | 390/1610 |
| 26 | 20/40 | A | **pré:** A raise (all-in) 390 B fold | fold | A | 430 | 430/1570 |
| 27 | 20/40 | B | **pré:** B raise (all-in) 1570 A fold | fold | B | 1610 | 390/1610 |
| 28 | 20/40 | A | **pré:** A raise (all-in) 390 B call | showdown — A: Par de 9; B: Par de 8 | A | 780 | 780/1220 |
| 29 | 20/40 | B | **pré:** B raise 105 A call **flop:** A bet 135 B call **turn:** A bet 305 B call **river:** A bet (all-in) 235 B call | showdown — A: Par de 8; B: Carta alta (Ás) | A | 1560 | 1560/440 |
| 30 | 20/40 | A | **pré:** A raise (all-in) 1560 B fold | fold | A | 1600 | 1600/400 |
| 31 | 20/40 | B | **pré:** B fold | fold | A | 60 | 1620/380 |
| 32 | 20/40 | A | **pré:** A fold | fold | B | 60 | 1600/400 |
| 33 | 30/60 | B | **pré:** B fold | fold | A | 90 | 1630/370 |
| 34 | 30/60 | A | **pré:** A raise (all-in) 1630 B fold | fold | A | 1690 | 1690/310 |
| 35 | 30/60 | B | **pré:** B fold | fold | A | 90 | 1720/280 |
| 36 | 30/60 | A | **pré:** A raise (all-in) 1720 B fold | fold | A | 1780 | 1780/220 |
| 37 | 30/60 | B | **pré:** B fold | fold | A | 90 | 1810/190 |
| 38 | 30/60 | A | **pré:** A fold | fold | B | 90 | 1780/220 |
| 39 | 30/60 | B | **pré:** B fold | fold | A | 90 | 1810/190 |
| 40 | 30/60 | A | **pré:** A fold | fold | B | 90 | 1780/220 |
| 41 | 40/80 | B | **pré:** B fold | fold | A | 120 | 1820/180 |
| 42 | 40/80 | A | **pré:** A raise (all-in) 1820 B call parcial (all-in) | showdown — A: Sequência até 9; B: Par de 5 | A | 360 | 2000/0 |

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

Placar acumulado: A 23 × 17 B.
