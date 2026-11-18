# Relatório da partida 69

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 22:47:54.

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
| Acerto das previsões (A / B) | 84% / 59% |
| Evidências (cada evento, decisão e adaptação) | [partida-069.jsonl](partida-069.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 16** — Na mão 16 da partida 69, com blinds de 10/20, o menor stack vale 8,1 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 16** — Na mão 16 da partida 69, com blinds de 10/20, o menor stack vale 8,1 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 6 | 8 |
| VPIP (entra no pote) | 59% | 65% |
| PFR (aumenta no pré-flop) | 24% | 6% |
| Agressão (bet+raise / bet+raise+call) | 62% | 32% |
| Desiste diante de aposta | 25% | 10% |
| Blefes (sucesso) | 1 (0%) | 0 (—) |
| Armadilhas | 1 | 7 |
| Showdowns ganhos | 3/11 | 5/11 |
| All-ins | 1 | 1 |
| Maior pote ganho | 450 | 1558 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 70% | 40% | 40% |
| Frequência de blefe | 0% | 0% | 0% | 0% |
| Roubo após check | 25% | 25% | 0% | 0% |
| Armadilha (induzir) | 20% | 20% | 80% | 80% |
| Margem para pagar | -8% | -8% | -10% | -10% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Corrigir blefes, Pagar o blefador, Valor contra pagador; B: Valor contra pagador, Corrigir blefes, Induzir o agressor, Armadilha contra roubo, Pagar o blefador.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 16% (n≈141) | 25% (n≈141) |
| Agressão (bet+raise / ações) | 34% (n≈141) | 67% (n≈141) |
| Entra no pote (VPIP) | 79% (n≈141) | 79% (n≈141) |
| Aumenta no pré-flop (PFR) | 24% (n≈141) | 44% (n≈141) |
| Check-raise | 3% (n≈138) | 4% (n≈109) |
| Aposta após meu check | 34% (n≈141) | 56% (n≈141) |
| Blefe revelado no showdown | 35% (n≈97) | 41% (n≈130) |
| Meus blefes que funcionaram | 27% (n≈90) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A bet 13 B call **river:** B bet 31 A raise 96 B call | showdown — A: Flush (Rei alto); B: Par de 3 | A | 238 | 1119/881 |
| 2 | 5/10 | B | **pré:** B call A check **flop:** A check B bet 14 A call **turn:** A check B check **river:** A check B check | showdown — A: Par de 7; B: Dois pares (7 e 5) | B | 48 | 1095/905 |
| 3 | 5/10 | A | **pré:** A call B check **flop:** B check A bet 10 B call **turn:** B check A check **river:** B check A bet 25 B fold | fold | A | 65 | 1115/885 |
| 4 | 5/10 | B | **pré:** B call A check **flop:** A bet 13 B call **turn:** A bet 29 B call **river:** A bet 66 B call | showdown — A: Trinca de 8; B: Full house (8 com 9) | B | 236 | 997/1003 |
| 5 | 5/10 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A check **river:** B check A check | showdown — A: Par de 5; B: Par de 5 | A | 20 | 1007/993 |
| 6 | 5/10 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B bet 14 A fold | fold | B | 34 | 997/1003 |
| 7 | 5/10 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A check **river:** B bet 14 A call | showdown — A: Par de 10; B: Sequência até Rei | B | 48 | 973/1027 |
| 8 | 5/10 | B | **pré:** B call A check **flop:** A bet 13 B call **turn:** A bet 29 B fold | fold | A | 75 | 996/1004 |
| 9 | 10/20 | A | **pré:** A call B check **flop:** B check A bet 25 B call **turn:** B check A bet 55 B call **river:** B bet 135 A call | showdown — A: Sequência até 8; B: Sequência até 8 | empate | 470 | 996/1004 |
| 10 | 10/20 | B | **pré:** B call A check **flop:** A check B bet 25 A call **turn:** A bet 55 B call **river:** A bet 125 B call | showdown — A: Sequência até 10; B: Dois pares (6 e 5) | A | 450 | 1221/779 |
| 11 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 75 B call **turn:** B check A bet 170 B call **river:** B bet (all-in) 474 A call | showdown — A: Par de 5; B: Par de 10 | B | 1558 | 442/1558 |
| 12 | 10/20 | B | **pré:** B call A check **flop:** A bet 25 B call **turn:** A bet 55 B call **river:** A check B check | showdown — A: Par de 6; B: Par de 6 | empate | 200 | 442/1558 |
| 13 | 10/20 | A | **pré:** A raise 60 B call **flop:** B bet 80 A call **turn:** B bet 190 A fold | fold | B | 470 | 302/1698 |
| 14 | 10/20 | B | **pré:** B raise 50 A call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Dois pares (Reis e 3); B: Dois pares (Reis e 3) | empate | 100 | 302/1698 |
| 15 | 10/20 | A | **pré:** A raise 60 B call **flop:** B bet 80 A call **turn:** B check A check **river:** B bet 190 A fold | fold | B | 470 | 162/1838 |
| 16 | 10/20 | B | **pré:** B fold | fold | A | 30 | 172/1828 |
| 17 | 15/30 | A | **pré:** A raise (all-in) 172 B call | showdown — A: Par de 10; B: Dois pares (10 e 9) | B | 344 | 0/2000 |

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
| [61](partida-061.md) | B | 2 | 91% | 91% | 100% | 80% | 0 | 0 |
| [62](partida-062.md) | A | 17 | 91% | 91% | 65% | 63% | 1 | 1 |
| [63](partida-063.md) | B | 17 | 91% | 91% | 79% | 77% | 0 | 0 |
| [64](partida-064.md) | A | 39 | 91% | 91% | 69% | 67% | 0 | 0 |
| [65](partida-065.md) | A | 24 | 91% | 91% | 77% | 64% | 0 | 0 |
| [66](partida-066.md) | A | 36 | 91% | 91% | 83% | 53% | 1 | 0 |
| [67](partida-067.md) | A | 27 | 91% | 91% | 78% | 68% | 0 | 0 |
| [68](partida-068.md) | A | 11 | 91% | 91% | 85% | 88% | 0 | 0 |
| [69](partida-069.md) | B | 17 | 91% | 91% | 84% | 59% | 0 | 0 |

Placar acumulado: A 39 × 30 B.
