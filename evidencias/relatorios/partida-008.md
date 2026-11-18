# Relatório da partida 8

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 17:51:48.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **A** |
| Mãos jogadas | 34 |
| Nível final de blinds | 5 (30/60) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 82% → 84% |
| Conhecimento de B sobre A | 83% → 85% |
| Acerto das previsões (A / B) | 78% / 62% |
| Evidências (cada evento, decisão e adaptação) | [partida-008.jsonl](partida-008.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **B · mão 22** — Na mão 22 da partida 8, B observou que A aposta em 44% das vezes depois do check de B (4/20 recentes); a leitura que motivou essa postura deixou de valer. Em resposta, B abandonou a postura "Armadilha contra roubo" (armadilha (induzir) 75% → 55%; margem para pagar -10 p.p. → -6 p.p.).
- **A · mão 28** — Na mão 28 da partida 8, com blinds de 20/40, o menor stack vale 12.0 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 28** — Na mão 28 da partida 8, com blinds de 20/40, o menor stack vale 12.0 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 16 | 15 |
| VPIP (entra no pote) | 74% | 68% |
| PFR (aumenta no pré-flop) | 29% | 32% |
| Agressão (bet+raise / bet+raise+call) | 62% | 39% |
| Desiste diante de aposta | 38% | 19% |
| Blefes (sucesso) | 3 (33%) | 0 (—) |
| Armadilhas | 0 | 4 |
| Showdowns ganhos | 6/14 | 5/14 |
| All-ins | 5 | 1 |
| Maior pote ganho | 1620 | 1080 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 70% | 45% | 45% |
| Frequência de blefe | 3% | 3% | 0% | 0% |
| Roubo após check | 20% | 20% | 5% | 5% |
| Armadilha (induzir) | 5% | 5% | 75% | 55% |
| Margem para pagar | 0% | 0% | -10% | -6% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Valor contra pagador, Corrigir blefes; B: Induzir o agressor, Valor contra pagador, Pagar o blefador.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 17% (n≈106) | 35% (n≈78) |
| Agressão (bet+raise / ações) | 38% (n≈125) | 66% (n≈124) |
| Entra no pote (VPIP) | 77% (n≈89) | 84% (n≈88) |
| Aumenta no pré-flop (PFR) | 29% (n≈89) | 42% (n≈88) |
| Check-raise | 3% (n≈42) | 2% (n≈22) |
| Aposta após meu check | 29% (n≈63) | 44% (n≈76) |
| Blefe revelado no showdown | 36% (n≈12) | 49% (n≈40) |
| Meus blefes que funcionaram | 25% (n≈21) | 35% (n≈7) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B raise 27 A call **flop:** A bet 34 B call **turn:** A check B check **river:** A bet 78 B fold | fold | A | 200 | 1061/939 |
| 2 | 5/10 | A | **pré:** A call B raise 27 A call **flop:** B check A bet 34 B call **turn:** B check A bet 78 B call **river:** B check A check | showdown — A: Par de 5; B: Par de Damas | B | 278 | 922/1078 |
| 3 | 5/10 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B bet 14 A fold | fold | B | 34 | 912/1088 |
| 4 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 37 B call **turn:** B check A check **river:** B bet 91 A call | showdown — A: Par de 2; B: Par de Damas | B | 314 | 755/1245 |
| 5 | 5/10 | B | **pré:** B call A check **flop:** A check B check **turn:** A bet 13 B call **river:** A bet 29 B fold | fold | A | 75 | 778/1222 |
| 6 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 37 B call **turn:** B check A check **river:** B check A check | showdown — A: Par de 5; B: Par de 5 | A | 132 | 844/1156 |
| 7 | 5/10 | B | **pré:** B raise 27 A call **flop:** A bet 34 B call **turn:** A bet 78 B call **river:** A bet 177 B call | showdown — A: Dois pares (Reis e 2); B: Par de Reis | A | 632 | 1160/840 |
| 8 | 5/10 | A | **pré:** A call B check **flop:** B check A bet 13 B call **turn:** B bet 32 A call **river:** B bet 76 A fold | fold | B | 186 | 1105/895 |
| 9 | 10/20 | B | **pré:** B raise 55 A call **flop:** A check B check **turn:** A check B check **river:** A check B bet 75 A fold | fold | B | 185 | 1050/950 |
| 10 | 10/20 | A | **pré:** A call B raise 55 A call **flop:** B check A check **turn:** B bet 75 A fold | fold | B | 185 | 995/1005 |
| 11 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A bet 75 B call **turn:** A check B bet 185 A call **river:** A check B bet 440 A fold | fold | B | 1080 | 675/1325 |
| 12 | 10/20 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A check **river:** B check A check | showdown — A: Carta alta (Dama); B: Carta alta (Rei) | B | 40 | 655/1345 |
| 13 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A bet 75 B call **turn:** A check B bet 185 A fold | fold | B | 455 | 520/1480 |
| 14 | 10/20 | A | **pré:** A call B raise 55 A call **flop:** B check A bet 70 B call **turn:** B check A bet 160 B call **river:** B check A bet (all-in) 235 B call | showdown — A: Dois pares (Damas e 3); B: Par de 3 | A | 1040 | 1040/960 |
| 15 | 10/20 | B | **pré:** B call A check **flop:** A check B bet 30 A fold | fold | B | 70 | 1020/980 |
| 16 | 10/20 | A | **pré:** A call B raise 55 A raise 165 B call **flop:** B check A check **turn:** B check A check **river:** B check A check | showdown — A: Par de Reis; B: Par de Reis | B | 330 | 855/1145 |
| 17 | 15/30 | B | **pré:** B raise 80 A call **flop:** A bet 100 B call **turn:** A bet 230 B call **river:** A bet (all-in) 445 B fold | fold | A | 1265 | 1265/735 |
| 18 | 15/30 | A | **pré:** A raise 85 B call **flop:** B check A check **turn:** B bet 115 A call **river:** B bet 275 A fold | fold | B | 675 | 1065/935 |
| 19 | 15/30 | B | **pré:** B raise 80 A call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de Ases; B: Par de Ases | empate | 160 | 1065/935 |
| 20 | 15/30 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A check **river:** B check A check | showdown — A: Par de Damas; B: Par de Damas | empate | 60 | 1065/935 |
| 21 | 15/30 | B | **pré:** B raise 80 A call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de 2; B: Carta alta (Rei) | A | 160 | 1145/855 |
| 22 | 15/30 | A | **pré:** A raise 85 B call **flop:** B check A check **turn:** B check A check **river:** B check A check | showdown — A: Carta alta (Rei); B: Carta alta (Ás) | B | 170 | 1060/940 |
| 23 | 15/30 | B | **pré:** B call A check **flop:** A bet 40 B call **turn:** A bet 90 B call **river:** A bet 205 B fold | fold | A | 525 | 1220/780 |
| 24 | 15/30 | A | **pré:** A call B check **flop:** B bet 40 A fold | fold | B | 100 | 1190/810 |
| 25 | 20/40 | B | **pré:** B raise 105 A call **flop:** A check B check **turn:** A bet 135 B call **river:** A bet 305 B fold | fold | A | 785 | 1430/570 |
| 26 | 20/40 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A bet 40 B call **river:** B check A check | showdown — A: Par de Reis; B: Par de Reis | empate | 160 | 1430/570 |
| 27 | 20/40 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A bet 50 B call | showdown — A: Par de Damas; B: Carta alta (Ás) | A | 180 | 1520/480 |
| 28 | 20/40 | A | **pré:** A raise (all-in) 1520 B fold | fold | A | 1560 | 1560/440 |
| 29 | 20/40 | B | **pré:** B fold | fold | A | 60 | 1580/420 |
| 30 | 20/40 | A | **pré:** A raise (all-in) 1580 B fold | fold | A | 1620 | 1620/380 |
| 31 | 20/40 | B | **pré:** B fold | fold | A | 60 | 1640/360 |
| 32 | 20/40 | A | **pré:** A fold | fold | B | 60 | 1620/380 |
| 33 | 30/60 | B | **pré:** B fold | fold | A | 90 | 1650/350 |
| 34 | 30/60 | A | **pré:** A raise (all-in) 1650 B call parcial (all-in) | showdown — A: Par de 4; B: Carta alta (Valete) | A | 700 | 2000/0 |

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

Placar acumulado: A 4 × 4 B.
