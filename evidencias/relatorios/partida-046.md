# Relatório da partida 46

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 20:26:11.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **A** |
| Mãos jogadas | 26 |
| Nível final de blinds | 4 (20/40) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 91% → 91% |
| Conhecimento de B sobre A | 91% → 91% |
| Acerto das previsões (A / B) | 77% / 77% |
| Evidências (cada evento, decisão e adaptação) | [partida-046.jsonl](partida-046.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 23** — Na mão 23 da partida 46, com blinds de 15/30, o menor stack vale 6,7 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 23** — Na mão 23 da partida 46, com blinds de 15/30, o menor stack vale 6,7 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).
- **A · mão 26** — Na mão 26 da partida 46, com blinds de 20/40, o menor stack vale 18,7 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 26** — Na mão 26 da partida 46, com blinds de 20/40, o menor stack vale 18,7 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 14 | 12 |
| VPIP (entra no pote) | 77% | 92% |
| PFR (aumenta no pré-flop) | 50% | 23% |
| Agressão (bet+raise / bet+raise+call) | 63% | 38% |
| Desiste diante de aposta | 17% | 18% |
| Blefes (sucesso) | 3 (33%) | 0 (—) |
| Armadilhas | 1 | 9 |
| Showdowns ganhos | 6/14 | 8/14 |
| All-ins | 2 | 5 |
| Maior pote ganho | 1798 | 1288 |

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
| Agressão (bet+raise / ações) | 38% (n≈141) | 65% (n≈141) |
| Entra no pote (VPIP) | 82% (n≈141) | 83% (n≈141) |
| Aumenta no pré-flop (PFR) | 27% (n≈141) | 47% (n≈141) |
| Check-raise | 2% (n≈123) | 6% (n≈81) |
| Aposta após meu check | 34% (n≈134) | 57% (n≈139) |
| Blefe revelado no showdown | 34% (n≈70) | 44% (n≈111) |
| Meus blefes que funcionaram | 27% (n≈69) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B call A check **flop:** A check B bet 14 A fold | fold | B | 34 | 990/1010 |
| 2 | 5/10 | A | **pré:** A raise 29 B call **flop:** B bet 39 A call **turn:** B bet 92 A call **river:** B check A bet 128 B call | showdown — A: Par de Damas; B: Par de 5 | A | 576 | 1278/722 |
| 3 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A check B bet 39 A call **turn:** A check B check **river:** A check B check | showdown — A: Par de 3; B: Par de 6 | B | 136 | 1210/790 |
| 4 | 5/10 | A | **pré:** A raise 29 B call **flop:** B bet 39 A fold | fold | B | 97 | 1181/819 |
| 5 | 5/10 | B | **pré:** B raise 26 A call **flop:** A bet 33 B call **turn:** A bet 75 B call **river:** A bet 170 B fold | fold | A | 438 | 1315/685 |
| 6 | 5/10 | A | **pré:** A call B raise 26 A call **flop:** B check A bet 33 B call **turn:** B check A check **river:** B bet 80 A call | showdown — A: Carta alta (Rei); B: Trinca de Reis | B | 278 | 1176/824 |
| 7 | 5/10 | B | **pré:** B call A check **flop:** A bet 13 B fold | fold | A | 33 | 1186/814 |
| 8 | 5/10 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A check **river:** B check A bet 10 B fold | fold | A | 30 | 1196/804 |
| 9 | 10/20 | B | **pré:** B call A check **flop:** A bet 25 B call **turn:** A bet 55 B fold | fold | A | 145 | 1241/759 |
| 10 | 10/20 | A | **pré:** A raise 60 B call **flop:** B bet 80 A call **turn:** B bet 190 A call **river:** B check A check | showdown — A: Par de 7; B: Carta alta (Ás) | A | 660 | 1571/429 |
| 11 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A bet 75 B call **turn:** A check B check **river:** A check B bet 185 A call | showdown — A: Par de 10; B: Dois pares (10 e 2) | B | 640 | 1251/749 |
| 12 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 75 B call **turn:** B check A bet 170 B fold | fold | A | 440 | 1386/614 |
| 13 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A check B check **turn:** A check B check **river:** A check B bet 80 A call | showdown — A: Carta alta (Rei); B: Dois pares (9 e 3) | B | 280 | 1246/754 |
| 14 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A check **turn:** B check A bet 50 B call **river:** B check A check | showdown — A: Par de Valetes; B: Par de Valetes | A | 220 | 1356/644 |
| 15 | 10/20 | B | **pré:** B raise 50 A call **flop:** A bet 65 B call **turn:** A bet 145 B call **river:** A bet 330 B raise incompleto (all-in) 384 A call | showdown — A: Par de Reis; B: Sequência até Ás | B | 1288 | 712/1288 |
| 16 | 10/20 | A | **pré:** A call B raise 50 A call **flop:** B check A bet 65 B call **turn:** B bet 155 A call **river:** B bet 365 A call | showdown — A: Par de Ases; B: Par de 10 | A | 1270 | 1347/653 |
| 17 | 15/30 | B | **pré:** B call A check **flop:** A bet 40 B call **turn:** A bet 90 B fold | fold | A | 230 | 1417/583 |
| 18 | 15/30 | A | **pré:** A raise 85 B call **flop:** B bet 115 A call **turn:** B check A bet 255 B call **river:** B check A bet 580 B call parcial (all-in) | showdown — A: Par de 4; B: Par de 4 | B | 1166 | 834/1166 |
| 19 | 15/30 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B bet 40 A fold | fold | B | 100 | 804/1196 |
| 20 | 15/30 | A | **pré:** A raise 85 B call **flop:** B bet 115 A fold | fold | B | 285 | 719/1281 |
| 21 | 15/30 | B | **pré:** B raise 80 A call **flop:** A bet 100 B call **turn:** A bet 230 B fold | fold | A | 590 | 899/1101 |
| 22 | 15/30 | A | **pré:** A raise 85 B call **flop:** B check A bet 110 B call **turn:** B bet 265 A call **river:** B check A bet (all-in) 439 B call | showdown — A: Par de 10; B: Par de 10 | A | 1798 | 1798/202 |
| 23 | 15/30 | B | **pré:** B fold | fold | A | 45 | 1813/187 |
| 24 | 15/30 | A | **pré:** A raise (all-in) 1813 B call parcial (all-in) | showdown — A: Carta alta (Dama); B: Carta alta (Ás) | B | 374 | 1626/374 |
| 25 | 20/40 | B | **pré:** B raise (all-in) 374 A call | showdown — A: Par de Ases; B: Par de Ases | B | 748 | 1252/748 |
| 26 | 20/40 | A | **pré:** A raise 115 B call **flop:** B check A bet 145 B call **turn:** B check A bet 330 B call **river:** B bet (all-in) 158 A call | showdown — A: Dois pares (Ases e Damas); B: Par de Ases | A | 1496 | 2000/0 |

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

Placar acumulado: A 26 × 20 B.
