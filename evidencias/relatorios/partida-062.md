# Relatório da partida 62

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 21:42:04.

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
| Acerto das previsões (A / B) | 65% / 63% |
| Evidências (cada evento, decisão e adaptação) | [partida-062.jsonl](partida-062.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 1** — A partir do momento em que B começou a desistir mais diante de apostas (percebido na mão 36 da partida 60), A cortou blefes e passou a apostar por valor com mãos médias na mão 1 da partida 62 (frequência de blefe 3% → 0%; roubo após check 45% → 25%; limiar de valor 56% → 50%). Leitura: B desiste diante de 21% das apostas (8/20 recentes).
- **A · mão 11** — Na mão 11 da partida 62, com blinds de 10/20, o menor stack vale 11,1 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 11** — Na mão 11 da partida 62, com blinds de 10/20, o menor stack vale 11,1 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 11 | 6 |
| VPIP (entra no pote) | 65% | 53% |
| PFR (aumenta no pré-flop) | 35% | 18% |
| Agressão (bet+raise / bet+raise+call) | 52% | 50% |
| Desiste diante de aposta | 27% | 36% |
| Blefes (sucesso) | 2 (50%) | 0 (—) |
| Armadilhas | 0 | 2 |
| Showdowns ganhos | 4/6 | 2/6 |
| All-ins | 3 | 1 |
| Maior pote ganho | 1838 | 240 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 70% | 40% | 40% |
| Frequência de blefe | 3% | 0% | 0% | 0% |
| Roubo após check | 45% | 25% | 0% | 0% |
| Armadilha (induzir) | 20% | 20% | 80% | 80% |
| Margem para pagar | -8% | -8% | -2% | -2% |
| Limiar de valor | 56% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Corrigir blefes, Pagar o blefador, Valor contra pagador; B: Valor contra pagador, Corrigir blefes, Induzir o agressor, Armadilha contra roubo.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 22% (n≈141) | 23% (n≈141) |
| Agressão (bet+raise / ações) | 41% (n≈141) | 63% (n≈141) |
| Entra no pote (VPIP) | 54% (n≈141) | 83% (n≈141) |
| Aumenta no pré-flop (PFR) | 30% (n≈141) | 43% (n≈141) |
| Check-raise | 2% (n≈134) | 5% (n≈100) |
| Aposta após meu check | 33% (n≈140) | 56% (n≈141) |
| Blefe revelado no showdown | 35% (n≈89) | 37% (n≈124) |
| Meus blefes que funcionaram | 30% (n≈83) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B call A check **flop:** A check B bet 14 A call **turn:** A check B bet 33 A fold | fold | B | 81 | 976/1024 |
| 2 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 37 B fold | fold | A | 95 | 1005/995 |
| 3 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Carta alta (Ás); B: Par de 5 | B | 58 | 976/1024 |
| 4 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A check **turn:** B check A check **river:** B bet 39 A fold | fold | B | 97 | 947/1053 |
| 5 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de 5; B: Par de 5 | A | 58 | 976/1024 |
| 6 | 5/10 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A check **river:** B check A bet 13 B call | showdown — A: Dois pares (Valetes e 6); B: Par de Valetes | A | 46 | 999/1001 |
| 7 | 5/10 | B | **pré:** B call A check **flop:** A check B bet 14 A fold | fold | B | 34 | 989/1011 |
| 8 | 5/10 | A | **pré:** A call B check **flop:** B check A bet 10 B call **turn:** B check A bet 16 B fold | fold | A | 56 | 1009/991 |
| 9 | 10/20 | B | **pré:** B raise 50 A call **flop:** A check B check **turn:** A check B check **river:** A check B bet 70 A call | showdown — A: Par de Valetes; B: Flush (Rei alto) | B | 240 | 889/1111 |
| 10 | 10/20 | A | **pré:** A call B raise 50 A call **flop:** B bet 70 A call **turn:** B bet 165 A call **river:** B bet 385 A raise incompleto (all-in) 604 B call | showdown — A: Sequência até 9; B: Par de 8 | A | 1778 | 1778/222 |
| 11 | 10/20 | B | **pré:** B fold | fold | A | 30 | 1788/212 |
| 12 | 10/20 | A | **pré:** A raise (all-in) 1788 B fold | fold | A | 1808 | 1808/192 |
| 13 | 10/20 | B | **pré:** B fold | fold | A | 30 | 1818/182 |
| 14 | 10/20 | A | **pré:** A fold | fold | B | 30 | 1808/192 |
| 15 | 10/20 | B | **pré:** B fold | fold | A | 30 | 1818/182 |
| 16 | 10/20 | A | **pré:** A raise (all-in) 1818 B fold | fold | A | 1838 | 1838/162 |
| 17 | 15/30 | B | **pré:** B raise (all-in) 162 A call | showdown — A: Sequência até Rei; B: Par de Reis | A | 324 | 2000/0 |

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

Placar acumulado: A 34 × 28 B.
