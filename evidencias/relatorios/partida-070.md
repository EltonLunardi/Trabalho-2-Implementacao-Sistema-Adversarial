# Relatório da partida 70

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 22:52:12.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **A** |
| Mãos jogadas | 17 |
| Nível final de blinds | 3 (15/30) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 91% → 91% |
| Conhecimento de B sobre A | 91% → 91% |
| Acerto das previsões (A / B) | 91% / 74% |
| Evidências (cada evento, decisão e adaptação) | [partida-070.jsonl](partida-070.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 1** — Na mão 1 da partida 70, com blinds de 5/10, o menor stack vale 100,0 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 1** — Na mão 1 da partida 70, com blinds de 5/10, o menor stack vale 100,0 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.
- **A · mão 3** — Antes da mão 3 da partida 70, o treinador Llama de A revisou a partida anterior e ajustou a política base (llama3.1:8b, 29.8 s) (agressividade 70% → 65%; roubo após check 25% → 30%). Justificativa: “A partir da análise da partida, percebe-se que o agente A foi muito agressivo, o que pode ter contribuído para a derrota. Além disso, a frequência de blefe foi alta, o que pode ter sido detectado pelo oponente. Por outro lado, a frequência de roubo foi baixa, o que pode ter permitido ao oponente escapar de algumas situações favoráveis. Portanto, os ajustes propostos visam reduzir a agressividade e a frequência de blefe, enquanto aumentar a frequência de roubo.”
- **A · mão 8** — A partir da mão 1, quando B saiu do modo push/fold e voltou a jogar todas as etapas, B começou a jogar de forma mais passiva. A observou que B aposta ou aumenta em 29% das suas ações (1/20 recentes). Na mão 8 da partida 70, A passou a desistir quando ele aposta e a roubar potes quando ele não aposta (roubo após check 30% → 40%; margem para pagar -8 p.p. → -1 p.p.).
- **A · mão 9** — Na mão 9 da partida 70, com blinds de 10/20, o menor stack vale 3,6 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 9** — Na mão 9 da partida 70, com blinds de 10/20, o menor stack vale 3,6 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).
- **A · mão 15** — Na mão 15 da partida 70, com blinds de 10/20, o menor stack vale 20,4 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 15** — Na mão 15 da partida 70, com blinds de 10/20, o menor stack vale 20,4 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 8 | 8 |
| VPIP (entra no pote) | 47% | 82% |
| PFR (aumenta no pré-flop) | 41% | 12% |
| Agressão (bet+raise / bet+raise+call) | 94% | 14% |
| Desiste diante de aposta | 40% | 7% |
| Blefes (sucesso) | 3 (0%) | 0 (—) |
| Armadilhas | 2 | 2 |
| Showdowns ganhos | 5/10 | 4/10 |
| All-ins | 1 | 4 |
| Maior pote ganho | 856 | 408 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 65% | 40% | 40% |
| Frequência de blefe | 0% | 0% | 0% | 0% |
| Roubo após check | 25% | 40% | 0% | 0% |
| Armadilha (induzir) | 20% | 20% | 80% | 80% |
| Margem para pagar | -8% | -1% | -10% | -10% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Corrigir blefes, Pagar o blefador, Valor contra pagador, Respeitar o passivo; B: Valor contra pagador, Corrigir blefes, Induzir o agressor, Armadilha contra roubo, Pagar o blefador.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 15% (n≈141) | 26% (n≈141) |
| Agressão (bet+raise / ações) | 30% (n≈141) | 72% (n≈141) |
| Entra no pote (VPIP) | 81% (n≈141) | 75% (n≈141) |
| Aumenta no pré-flop (PFR) | 23% (n≈141) | 44% (n≈141) |
| Check-raise | 3% (n≈138) | 4% (n≈109) |
| Aposta após meu check | 34% (n≈141) | 58% (n≈141) |
| Blefe revelado no showdown | 34% (n≈97) | 41% (n≈131) |
| Meus blefes que funcionaram | 26% (n≈91) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B call A check **flop:** A check B check **turn:** A bet 13 B call **river:** A bet 29 B call | showdown — A: Dois pares (5 e 4); B: Dois pares (8 e 5) | B | 104 | 948/1052 |
| 2 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 37 B call **turn:** B check A check **river:** B bet 90 A raise 277 B call | showdown — A: Flush (Ás alto); B: Carta alta (Ás) | A | 686 | 1291/709 |
| 3 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A bet 36 B fold | fold | A | 94 | 1320/680 |
| 4 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 36 B call **turn:** B check A check **river:** B check A bet 82 B fold | fold | A | 212 | 1385/615 |
| 5 | 5/10 | B | **pré:** B call A check **flop:** A bet 13 B call **turn:** A bet 29 B call **river:** A bet 65 B call | showdown — A: Par de 10; B: Par de 10 | A | 234 | 1502/498 |
| 6 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 36 B call **turn:** B check A bet 82 B call **river:** B check A check | showdown — A: Par de Valetes; B: Carta alta (Ás) | A | 294 | 1649/351 |
| 7 | 5/10 | B | **pré:** B call A check **flop:** A bet 13 B call **turn:** A bet 29 B call **river:** A check B check | showdown — A: Par de 7; B: Par de Reis | B | 104 | 1597/403 |
| 8 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 36 B call **turn:** B check A bet 82 B call **river:** B check A bet 184 B call | showdown — A: Dois pares (Reis e 6); B: Par de 7 | A | 662 | 1928/72 |
| 9 | 10/20 | B | **pré:** B raise (all-in) 72 A fold | fold | B | 92 | 1908/92 |
| 10 | 10/20 | A | **pré:** A fold | fold | B | 30 | 1898/102 |
| 11 | 10/20 | B | **pré:** B raise (all-in) 102 A call | showdown — A: Par de 4; B: Dois pares (Ases e 4) | B | 204 | 1796/204 |
| 12 | 10/20 | A | **pré:** A fold | fold | B | 30 | 1786/214 |
| 13 | 10/20 | B | **pré:** B fold | fold | A | 30 | 1796/204 |
| 14 | 10/20 | A | **pré:** A raise (all-in) 1796 B call parcial (all-in) | showdown — A: Dois pares (Reis e 8); B: Trinca de Valetes | B | 408 | 1592/408 |
| 15 | 10/20 | B | **pré:** B call A check **flop:** A check B bet 25 A fold | fold | B | 65 | 1572/428 |
| 16 | 10/20 | A | **pré:** A raise 55 B call **flop:** B check A bet 45 B call **turn:** B check A bet 80 B call **river:** B check A bet 145 B call | showdown — A: Sequência até 6; B: Sequência até 6 | empate | 650 | 1572/428 |
| 17 | 15/30 | B | **pré:** B call A check **flop:** A bet 40 B call **turn:** A bet 90 B raise (all-in) 358 A call | showdown — A: Full house (5 com 9); B: Trinca de 5 | A | 856 | 2000/0 |

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
| [70](partida-070.md) | A | 17 | 91% | 91% | 91% | 74% | 2 | 1 |

Placar acumulado: A 40 × 30 B.
