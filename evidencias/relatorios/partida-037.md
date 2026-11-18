# Relatório da partida 37

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 19:49:04.

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
| Acerto das previsões (A / B) | 73% / 63% |
| Evidências (cada evento, decisão e adaptação) | [partida-037.jsonl](partida-037.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 16** — Na mão 16 da partida 37, com blinds de 10/20, o menor stack vale 10,4 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 16** — Na mão 16 da partida 37, com blinds de 10/20, o menor stack vale 10,4 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).
- **A · mão 19** — Na mão 19 da partida 37, A percebeu que B começou a desistir mais diante de apostas — desiste diante de aposta foi de 21% (histórico) para 40% (recente); A passou a confiar na leitura recente em vez do histórico.
- **A · mão 19** — A partir da mão 16, quando B entrou em modo push/fold (all-in ou desistência no pré-flop), B começou a desistir mais diante de apostas. A observou que B desiste diante de 40% das apostas (8/20 recentes); a leitura que motivou essa postura deixou de valer. Na mão 19 da partida 37, A abandonou a postura "Valor contra pagador" (frequência de blefe 0% → 8%; roubo após check 35% → 55%; limiar de valor 50% → 56%).
- **A · mão 24** — Na mão 24 da partida 37, com blinds de 15/30, o menor stack vale 19,4 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 24** — Na mão 24 da partida 37, com blinds de 15/30, o menor stack vale 19,4 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.
- **A · mão 25** — A partir da mão 24, quando B saiu do modo push/fold e voltou a jogar todas as etapas, B começou a pagar mais as apostas. A observou que B desiste diante de 20% das apostas (7/20 recentes). Na mão 25 da partida 37, A cortou blefes e passou a apostar por valor com mãos médias (frequência de blefe 8% → 0%; roubo após check 55% → 35%; limiar de valor 56% → 50%).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 20 | 10 |
| VPIP (entra no pote) | 77% | 77% |
| PFR (aumenta no pré-flop) | 53% | 23% |
| Agressão (bet+raise / bet+raise+call) | 76% | 27% |
| Desiste diante de aposta | 14% | 30% |
| Blefes (sucesso) | 7 (43%) | 0 (—) |
| Armadilhas | 1 | 2 |
| Showdowns ganhos | 4/12 | 8/12 |
| All-ins | 6 | 3 |
| Maior pote ganho | 1832 | 1176 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 70% | 40% | 40% |
| Frequência de blefe | 0% | 0% | 0% | 0% |
| Roubo após check | 35% | 35% | 0% | 0% |
| Armadilha (induzir) | 10% | 10% | 65% | 65% |
| Margem para pagar | -1% | -1% | -6% | -6% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Corrigir blefes, Pagar o blefador, Respeitar o passivo, Valor contra pagador; B: Induzir o agressor, Valor contra pagador, Pagar o blefador, Corrigir blefes.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 20% (n≈141) | 27% (n≈136) |
| Agressão (bet+raise / ações) | 33% (n≈141) | 71% (n≈141) |
| Entra no pote (VPIP) | 82% (n≈140) | 85% (n≈139) |
| Aumenta no pré-flop (PFR) | 26% (n≈140) | 49% (n≈139) |
| Check-raise | 3% (n≈113) | 5% (n≈66) |
| Aposta após meu check | 28% (n≈128) | 55% (n≈135) |
| Blefe revelado no showdown | 37% (n≈55) | 41% (n≈103) |
| Meus blefes que funcionaram | 27% (n≈59) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A bet 13 B call **river:** B check A bet 29 B fold | fold | A | 75 | 1023/977 |
| 2 | 5/10 | B | **pré:** B raise 26 A raise 78 B call **flop:** A check B bet 106 A call **turn:** A check B check **river:** A check B check | showdown — A: Carta alta (Ás); B: Par de 6 | B | 368 | 839/1161 |
| 3 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 37 B call **turn:** B check A bet 84 B fold | fold | A | 216 | 905/1095 |
| 4 | 5/10 | B | **pré:** B call A check **flop:** A check B bet 14 A call **turn:** A check B check **river:** A bet 31 B call | showdown — A: Dois pares (Ases e 2); B: Dois pares (Ases e 4) | B | 110 | 850/1150 |
| 5 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 37 B call **turn:** B check A bet 84 B fold | fold | A | 216 | 916/1084 |
| 6 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A check B check **turn:** A check B bet 39 A call **river:** A bet 86 B call | showdown — A: Dois pares (Reis e 3); B: Dois pares (3 e 2) | A | 308 | 1070/930 |
| 7 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A check **turn:** B check A bet 23 B call **river:** B check A check | showdown — A: Carta alta (Rei); B: Carta alta (Dama) | A | 104 | 1122/878 |
| 8 | 5/10 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de 9; B: Par de 9 | A | 20 | 1132/868 |
| 9 | 10/20 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A bet 20 B fold | fold | A | 60 | 1152/848 |
| 10 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A check B check **turn:** A bet 75 B call **river:** A bet 170 B fold | fold | A | 440 | 1287/713 |
| 11 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A check **turn:** B check A check **river:** B check A bet 75 B fold | fold | A | 195 | 1347/653 |
| 12 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A bet 75 B call **turn:** A check B check **river:** A bet 170 B fold | fold | A | 440 | 1482/518 |
| 13 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A check **turn:** B check A check **river:** B check A bet 75 B call | showdown — A: Dois pares (9 e 6); B: Par de 6 | A | 270 | 1617/383 |
| 14 | 10/20 | B | **pré:** B raise 50 A call **flop:** A bet 65 B call **turn:** A check B check **river:** A bet 145 B fold | fold | A | 375 | 1732/268 |
| 15 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 50 B fold | fold | A | 170 | 1792/208 |
| 16 | 10/20 | B | **pré:** B fold | fold | A | 30 | 1802/198 |
| 17 | 15/30 | A | **pré:** A raise (all-in) 1802 B fold | fold | A | 1832 | 1832/168 |
| 18 | 15/30 | B | **pré:** B raise (all-in) 168 A fold | fold | B | 198 | 1802/198 |
| 19 | 15/30 | A | **pré:** A raise (all-in) 1802 B fold | fold | A | 1832 | 1832/168 |
| 20 | 15/30 | B | **pré:** B fold | fold | A | 45 | 1847/153 |
| 21 | 15/30 | A | **pré:** A raise (all-in) 1847 B call parcial (all-in) | showdown — A: Dois pares (Valetes e 9); B: Sequência até Dama | B | 306 | 1694/306 |
| 22 | 15/30 | B | **pré:** B fold | fold | A | 45 | 1709/291 |
| 23 | 15/30 | A | **pré:** A raise (all-in) 1709 B call parcial (all-in) | showdown — A: Dois pares (Reis e 10); B: Trinca de 3 | B | 582 | 1418/582 |
| 24 | 15/30 | B | **pré:** B raise 80 A call **flop:** A check B check **turn:** A check B check **river:** A bet 90 B call | showdown — A: Par de 2; B: Par de 2 | B | 340 | 1248/752 |
| 25 | 20/40 | A | **pré:** A call B raise 105 A call **flop:** B check A check **turn:** B check A check **river:** B bet 145 A raise 445 B call | showdown — A: Dois pares (9 e 6); B: Dois pares (Reis e Damas) | B | 1100 | 698/1302 |
| 26 | 20/40 | B | **pré:** B call A check **flop:** A bet 50 B call **turn:** A bet 115 B fold | fold | A | 295 | 788/1212 |
| 27 | 20/40 | A | **pré:** A call B raise 105 A call **flop:** B check A check **turn:** B check A check **river:** B check A bet 85 B call | showdown — A: Par de 7; B: Par de 7 | B | 380 | 598/1402 |
| 28 | 20/40 | B | **pré:** B call A raise 115 B call **flop:** A bet 145 B call **turn:** A bet (all-in) 338 B fold | fold | A | 858 | 858/1142 |
| 29 | 20/40 | A | **pré:** A raise 115 B call **flop:** B bet 155 A call **turn:** B bet 365 A fold | fold | B | 905 | 588/1412 |
| 30 | 20/40 | B | **pré:** B raise 105 A call **flop:** A bet 135 B raise 470 A call **turn:** A bet (all-in) 13 B call | showdown — A: Dois pares (7 e 3); B: Full house (Valetes com 3) | B | 1176 | 0/2000 |

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

Placar acumulado: A 21 × 16 B.
