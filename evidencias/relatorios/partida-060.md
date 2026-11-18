# Relatório da partida 60

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 21:37:34.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **B** |
| Mãos jogadas | 41 |
| Nível final de blinds | 6 (40/80) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 91% → 91% |
| Conhecimento de B sobre A | 91% → 91% |
| Acerto das previsões (A / B) | 73% / 69% |
| Evidências (cada evento, decisão e adaptação) | [partida-060.jsonl](partida-060.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 1** — Na mão 1 da partida 60, com blinds de 5/10, o menor stack vale 100,0 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 1** — Na mão 1 da partida 60, com blinds de 5/10, o menor stack vale 100,0 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.
- **A · mão 11** — Na mão 11 da partida 60, com blinds de 10/20, o menor stack vale 10,7 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 11** — Na mão 11 da partida 60, com blinds de 10/20, o menor stack vale 10,7 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).
- **A · mão 15** — Na mão 15 da partida 60, com blinds de 10/20, o menor stack vale 21,4 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 15** — Na mão 15 da partida 60, com blinds de 10/20, o menor stack vale 21,4 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.
- **A · mão 26** — Na mão 26 da partida 60, com blinds de 20/40, o menor stack vale 7,5 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 26** — Na mão 26 da partida 60, com blinds de 20/40, o menor stack vale 7,5 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).
- **A · mão 36** — Na mão 36 da partida 60, A percebeu que B começou a desistir mais diante de apostas — desiste diante de aposta foi de 21% (histórico) para 39% (recente); A passou a confiar na leitura recente em vez do histórico.
- **A · mão 38** — A partir da mão 26, quando B entrou em modo push/fold (all-in ou desistência no pré-flop), B começou a desistir mais diante de apostas. A observou que B desiste diante de 43% das apostas (9/20 recentes); a leitura que motivou essa postura deixou de valer. Na mão 38 da partida 60, A abandonou a postura "Valor contra pagador" (frequência de blefe 0% → 3%; roubo após check 25% → 45%; limiar de valor 50% → 56%).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 23 | 17 |
| VPIP (entra no pote) | 73% | 59% |
| PFR (aumenta no pré-flop) | 37% | 29% |
| Agressão (bet+raise / bet+raise+call) | 66% | 43% |
| Desiste diante de aposta | 19% | 27% |
| Blefes (sucesso) | 2 (50%) | 0 (—) |
| Armadilhas | 3 | 3 |
| Showdowns ganhos | 5/14 | 8/14 |
| All-ins | 7 | 4 |
| Maior pote ganho | 1741 | 1868 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 70% | 40% | 40% |
| Frequência de blefe | 0% | 3% | 0% | 0% |
| Roubo após check | 25% | 45% | 0% | 0% |
| Armadilha (induzir) | 20% | 20% | 80% | 80% |
| Margem para pagar | -8% | -8% | -2% | -2% |
| Limiar de valor | 50% | 56% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Corrigir blefes, Pagar o blefador; B: Valor contra pagador, Corrigir blefes, Induzir o agressor, Armadilha contra roubo.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 43% (n≈141) | 24% (n≈141) |
| Agressão (bet+raise / ações) | 39% (n≈141) | 66% (n≈141) |
| Entra no pote (VPIP) | 58% (n≈141) | 84% (n≈141) |
| Aumenta no pré-flop (PFR) | 31% (n≈141) | 43% (n≈141) |
| Check-raise | 2% (n≈134) | 5% (n≈98) |
| Aposta após meu check | 33% (n≈140) | 57% (n≈141) |
| Blefe revelado no showdown | 37% (n≈88) | 37% (n≈124) |
| Meus blefes que funcionaram | 30% (n≈82) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B raise 26 A call **flop:** A bet 33 B call **turn:** A bet 75 B call **river:** A bet 170 B call | showdown — A: Full house (8 com 10); B: Full house (8 com 3) | A | 608 | 1304/696 |
| 2 | 5/10 | A | **pré:** A raise 29 B call **flop:** B bet 39 A call **turn:** B check A bet 86 B call **river:** B bet 209 A fold | fold | B | 517 | 1150/850 |
| 3 | 5/10 | B | **pré:** B raise 26 A call **flop:** A bet 33 B call **turn:** A bet 75 B call **river:** A bet 170 B fold | fold | A | 438 | 1284/716 |
| 4 | 5/10 | A | **pré:** A raise 29 B call **flop:** B bet 39 A call **turn:** B check A check **river:** B check A check | showdown — A: Carta alta (Ás); B: Carta alta (Dama) | A | 136 | 1352/648 |
| 5 | 5/10 | B | **pré:** B raise 26 A call **flop:** A bet 33 B call **turn:** A check B bet 80 A call **river:** A check B bet 189 A fold | fold | B | 467 | 1213/787 |
| 6 | 5/10 | A | **pré:** A raise 29 B call **flop:** B bet 39 A fold | fold | B | 97 | 1184/816 |
| 7 | 5/10 | B | **pré:** B raise 26 A call **flop:** A bet 33 B raise 116 A call **turn:** A check B check **river:** A bet 181 B call | showdown — A: Dois pares (10 e 5); B: Trinca de 5 | B | 646 | 861/1139 |
| 8 | 5/10 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A bet 13 B call **river:** B check A bet 29 B call | showdown — A: Dois pares (Valetes e 3); B: Dois pares (Valetes e 3) | A | 104 | 913/1087 |
| 9 | 10/20 | B | **pré:** B raise 50 A call **flop:** A bet 65 B call **turn:** A bet 145 B call **river:** A bet 330 B call | showdown — A: Par de 5; B: Par de Ases | B | 1180 | 323/1677 |
| 10 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A check **turn:** B check A bet 50 B call **river:** B check A check | showdown — A: Carta alta (Ás); B: Par de 4 | B | 220 | 213/1787 |
| 11 | 10/20 | B | **pré:** B fold | fold | A | 30 | 223/1777 |
| 12 | 10/20 | A | **pré:** A raise (all-in) 223 B fold | fold | A | 243 | 243/1757 |
| 13 | 10/20 | B | **pré:** B raise 50 A call **flop:** A bet 65 B fold | fold | A | 165 | 293/1707 |
| 14 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A check **turn:** B check A check **river:** B check A bet 75 B call | showdown — A: Par de Damas; B: Carta alta (Rei) | A | 270 | 428/1572 |
| 15 | 10/20 | B | **pré:** B raise 50 A call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de 3; B: Par de 4 | B | 100 | 378/1622 |
| 16 | 10/20 | A | **pré:** A raise 60 B call **flop:** B bet 80 A call **turn:** B check A bet (all-in) 238 B call | showdown — A: Dois pares (Ases e 6); B: Par de 2 | A | 756 | 756/1244 |
| 17 | 15/30 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Dois pares (Reis e 7); B: Dois pares (Reis e 7) | empate | 60 | 756/1244 |
| 18 | 15/30 | A | **pré:** A raise 85 B call **flop:** B check A check **turn:** B check A check **river:** B check A bet 110 B fold | fold | A | 280 | 841/1159 |
| 19 | 15/30 | B | **pré:** B call A raise 85 B call **flop:** A check B bet 115 A call **turn:** A check B bet 270 A fold | fold | B | 670 | 641/1359 |
| 20 | 15/30 | A | **pré:** A raise 85 B call **flop:** B bet 115 A raise 355 B call **turn:** B check A check **river:** B check A bet (all-in) 201 B fold | fold | A | 1081 | 1081/919 |
| 21 | 15/30 | B | **pré:** B call A raise 85 B call **flop:** A bet 110 B call **turn:** A bet 250 B fold | fold | A | 640 | 1276/724 |
| 22 | 15/30 | A | **pré:** A call B check **flop:** B check A bet 40 B call **turn:** B check A bet 90 B fold | fold | A | 230 | 1346/654 |
| 23 | 15/30 | B | **pré:** B raise 80 A call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de 4; B: Par de 4 | B | 160 | 1266/734 |
| 24 | 15/30 | A | **pré:** A raise 85 B call **flop:** B check A bet 110 B call **turn:** B check A bet 250 B fold | fold | A | 640 | 1461/539 |
| 25 | 20/40 | B | **pré:** B raise 105 A call **flop:** A bet 135 B call **turn:** A bet 305 B fold | fold | A | 785 | 1701/299 |
| 26 | 20/40 | A | **pré:** A fold | fold | B | 60 | 1681/319 |
| 27 | 20/40 | B | **pré:** B fold | fold | A | 60 | 1701/299 |
| 28 | 20/40 | A | **pré:** A fold | fold | B | 60 | 1681/319 |
| 29 | 20/40 | B | **pré:** B fold | fold | A | 60 | 1701/299 |
| 30 | 20/40 | A | **pré:** A raise (all-in) 1701 B fold | fold | A | 1741 | 1741/259 |
| 31 | 20/40 | B | **pré:** B fold | fold | A | 60 | 1761/239 |
| 32 | 20/40 | A | **pré:** A fold | fold | B | 60 | 1741/259 |
| 33 | 30/60 | B | **pré:** B raise (all-in) 259 A call | showdown — A: Dois pares (6 e 2); B: Dois pares (6 e 4) | B | 518 | 1482/518 |
| 34 | 30/60 | A | **pré:** A fold | fold | B | 90 | 1452/548 |
| 35 | 30/60 | B | **pré:** B fold | fold | A | 90 | 1482/518 |
| 36 | 30/60 | A | **pré:** A raise (all-in) 1482 B fold | fold | A | 1542 | 1542/458 |
| 37 | 30/60 | B | **pré:** B fold | fold | A | 90 | 1572/428 |
| 38 | 30/60 | A | **pré:** A raise (all-in) 1572 B fold | fold | A | 1632 | 1632/368 |
| 39 | 30/60 | B | **pré:** B raise (all-in) 368 A call | showdown — A: Par de 9; B: Par de 9 | B | 736 | 1264/736 |
| 40 | 30/60 | A | **pré:** A call B check **flop:** B bet 80 A call **turn:** B bet 190 A call **river:** B bet (all-in) 406 A fold | fold | B | 1066 | 934/1066 |
| 41 | 40/80 | B | **pré:** B raise (all-in) 1066 A call parcial (all-in) | showdown — A: Carta alta (10); B: Trinca de 10 | B | 1868 | 0/2000 |

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
| [57](partida-057.md) | A | 10 | 91% | 91% | 74% | 86% | 0 | 0 |
| [58](partida-058.md) | B | 12 | 91% | 91% | 71% | 61% | 0 | 0 |
| [59](partida-059.md) | B | 29 | 91% | 91% | 79% | 59% | 0 | 0 |
| [60](partida-060.md) | B | 41 | 91% | 91% | 73% | 69% | 2 | 1 |

Placar acumulado: A 33 × 27 B.
