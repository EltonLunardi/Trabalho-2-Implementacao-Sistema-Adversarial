# Relatório da partida 38

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 19:53:50.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **B** |
| Mãos jogadas | 17 |
| Nível final de blinds | 3 (15/30) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 91% → 91% |
| Conhecimento de B sobre A | 91% → 91% |
| Acerto das previsões (A / B) | 72% / 63% |
| Evidências (cada evento, decisão e adaptação) | [partida-038.jsonl](partida-038.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **B · mão 12** — Na mão 12 da partida 38, B percebeu que A começou a aceitar o check e não roubar o pote — aposta após meu check foi de 53% (histórico) para 33% (recente); B passou a confiar na leitura recente em vez do histórico.
- **B · mão 14** — Na mão 14 da partida 38, B percebeu que A começou a jogar de forma mais passiva — agressão (bet+raise / ações) foi de 67% (histórico) para 49% (recente); B passou a confiar na leitura recente em vez do histórico.
- **A · mão 16** — Na mão 16 da partida 38, A percebeu que B começou a apostar e aumentar com mais frequência — agressão (bet+raise / ações) foi de 38% (histórico) para 60% (recente); A passou a confiar na leitura recente em vez do histórico.
- **A · mão 16** — A partir do momento em que B começou a apostar e aumentar com mais frequência (percebido na mão 16), A abandonou a postura "Respeitar o passivo" na mão 16 da partida 38 (roubo após check 35% → 25%; margem para pagar -1 p.p. → -8 p.p.). Leitura: B aposta ou aumenta em 60% das suas ações (12/20 recentes); a leitura que motivou essa postura deixou de valer.
- **A · mão 16** — A partir do momento em que B começou a apostar e aumentar com mais frequência (percebido na mão 16), A passou a dar check e pagar com mãos fortes para induzir apostas na mão 16 da partida 38 (agressividade 70% → 60%; armadilha (induzir) 10% → 35%). Leitura: B aposta ou aumenta em 60% das suas ações (12/20 recentes).
- **B · mão 16** — A partir da mão 16, quando A passou a dar check e pagar com mãos fortes para induzir apostas, A começou a jogar de forma mais passiva. B observou que A aposta ou aumenta em 40% das suas ações (6/20 recentes); a leitura que motivou essa postura deixou de valer. Na mão 16 da partida 38, B abandonou a postura "Induzir o agressor" (agressividade 40% → 50%; armadilha (induzir) 65% → 40%). **[cadeia 2]**

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 8 | 9 |
| VPIP (entra no pote) | 94% | 82% |
| PFR (aumenta no pré-flop) | 29% | 47% |
| Agressão (bet+raise / bet+raise+call) | 50% | 51% |
| Desiste diante de aposta | 24% | 19% |
| Blefes (sucesso) | 2 (50%) | 0 (—) |
| Armadilhas | 0 | 4 |
| Showdowns ganhos | 4/8 | 4/8 |
| All-ins | 1 | 0 |
| Maior pote ganho | 375 | 1180 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 60% | 40% | 50% |
| Frequência de blefe | 0% | 0% | 0% | 0% |
| Roubo após check | 35% | 25% | 0% | 0% |
| Armadilha (induzir) | 10% | 35% | 65% | 40% |
| Margem para pagar | -1% | -8% | -6% | -6% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Corrigir blefes, Pagar o blefador, Valor contra pagador, Induzir o agressor; B: Valor contra pagador, Pagar o blefador, Corrigir blefes.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 20% (n≈141) | 27% (n≈137) |
| Agressão (bet+raise / ações) | 38% (n≈141) | 44% (n≈141) |
| Entra no pote (VPIP) | 82% (n≈140) | 86% (n≈140) |
| Aumenta no pré-flop (PFR) | 28% (n≈140) | 47% (n≈140) |
| Check-raise | 3% (n≈114) | 5% (n≈68) |
| Aposta após meu check | 30% (n≈129) | 32% (n≈135) |
| Blefe revelado no showdown | 36% (n≈57) | 41% (n≈104) |
| Meus blefes que funcionaram | 28% (n≈60) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B raise 26 A call **flop:** A check B check **turn:** A bet 33 B call **river:** A bet 75 B call | showdown — A: Dois pares (8 e 4); B: Par de 4 | A | 268 | 1134/866 |
| 2 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 23 B fold | fold | A | 81 | 1163/837 |
| 3 | 5/10 | B | **pré:** B raise 26 A call **flop:** A bet 33 B call **turn:** A bet 75 B fold | fold | A | 193 | 1222/778 |
| 4 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 23 B call **turn:** B check A check **river:** B bet 71 A fold | fold | B | 175 | 1170/830 |
| 5 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A check B bet 39 A call **turn:** A check B bet 92 A call **river:** A check B bet 217 A fold | fold | B | 537 | 1010/990 |
| 6 | 5/10 | A | **pré:** A raise 29 B call **flop:** B bet 39 A call **turn:** B check A check **river:** B bet 92 A call | showdown — A: Sequência até 8; B: Trinca de 4 | A | 320 | 1170/830 |
| 7 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A bet 37 B call **turn:** A bet 84 B call **river:** A check B check | showdown — A: Par de 3; B: Carta alta (Rei) | A | 300 | 1320/680 |
| 8 | 5/10 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A check **river:** B check A check | showdown — A: Par de Damas; B: Par de Damas | A | 20 | 1330/670 |
| 9 | 10/20 | B | **pré:** B call A check **flop:** A check B bet 25 A fold | fold | B | 65 | 1310/690 |
| 10 | 10/20 | A | **pré:** A call B raise 50 A call **flop:** B bet 70 A fold | fold | B | 170 | 1260/740 |
| 11 | 10/20 | B | **pré:** B raise 50 A call **flop:** A bet 65 B call **turn:** A bet 145 B call **river:** A bet 330 B call | showdown — A: Par de 9; B: Dois pares (Ases e 2) | B | 1180 | 670/1330 |
| 12 | 10/20 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A check **river:** B check A check | showdown — A: Par de 10; B: Par de 10 | B | 40 | 650/1350 |
| 13 | 10/20 | B | **pré:** B raise 50 A call **flop:** A bet 65 B call **turn:** A bet 145 B fold | fold | A | 375 | 765/1235 |
| 14 | 10/20 | A | **pré:** A call B check **flop:** B bet 25 A call **turn:** B bet 60 A call **river:** B bet 145 A fold | fold | B | 355 | 660/1340 |
| 15 | 10/20 | B | **pré:** B raise 50 A call **flop:** A check B check **turn:** A check B check **river:** A bet 65 B fold | fold | A | 165 | 710/1290 |
| 16 | 10/20 | A | **pré:** A call B raise 50 A call **flop:** B check A check **turn:** B bet 70 A call **river:** B bet 165 A call | showdown — A: Dois pares (Ases e 2); B: Full house (Ases com 7) | B | 570 | 425/1575 |
| 17 | 15/30 | B | **pré:** B raise 80 A call **flop:** A bet 100 B call **turn:** A bet (all-in) 245 B call | showdown — A: Par de 3; B: Par de 3 | B | 850 | 0/2000 |

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

Placar acumulado: A 21 × 17 B.
