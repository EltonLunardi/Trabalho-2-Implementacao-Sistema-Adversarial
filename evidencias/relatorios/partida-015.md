# Relatório da partida 15

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 18:16:00.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **A** |
| Mãos jogadas | 7 |
| Nível final de blinds | 1 (5/10) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 87% → 88% |
| Conhecimento de B sobre A | 88% → 88% |
| Acerto das previsões (A / B) | 86% / 75% |
| Evidências (cada evento, decisão e adaptação) | [partida-015.jsonl](partida-015.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

_Nenhuma adaptação nesta partida._

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 4 | 3 |
| VPIP (entra no pote) | 86% | 100% |
| PFR (aumenta no pré-flop) | 29% | 57% |
| Agressão (bet+raise / bet+raise+call) | 50% | 58% |
| Desiste diante de aposta | 18% | 10% |
| Blefes (sucesso) | 1 (0%) | 0 (—) |
| Armadilhas | 0 | 4 |
| Showdowns ganhos | 3/4 | 1/4 |
| All-ins | 0 | 1 |
| Maior pote ganho | 1520 | 290 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 70% | 45% | 45% |
| Frequência de blefe | 3% | 3% | 0% | 0% |
| Roubo após check | 20% | 20% | 0% | 0% |
| Armadilha (induzir) | 5% | 5% | 55% | 55% |
| Margem para pagar | -8% | -8% | -6% | -6% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Valor contra pagador, Corrigir blefes, Pagar o blefador; B: Induzir o agressor, Valor contra pagador, Pagar o blefador, Corrigir blefes.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 16% (n≈126) | 30% (n≈104) |
| Agressão (bet+raise / ações) | 41% (n≈138) | 63% (n≈137) |
| Entra no pote (VPIP) | 81% (n≈111) | 84% (n≈110) |
| Aumenta no pré-flop (PFR) | 28% (n≈111) | 44% (n≈110) |
| Check-raise | 6% (n≈61) | 4% (n≈33) |
| Aposta após meu check | 28% (n≈86) | 53% (n≈94) |
| Blefe revelado no showdown | 41% (n≈21) | 47% (n≈55) |
| Meus blefes que funcionaram | 26% (n≈33) | 32% (n≈8) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | A | **pré:** A call B raise 27 A call **flop:** B check A bet 22 B call **turn:** B check A check **river:** B bet 68 A fold | fold | B | 166 | 951/1049 |
| 2 | 5/10 | B | **pré:** B call A check **flop:** A bet 13 B call **turn:** A bet 29 B fold | fold | A | 75 | 974/1026 |
| 3 | 5/10 | A | **pré:** A raise 29 B call **flop:** B bet 40 A call **turn:** B check A check **river:** B check A bet 88 B raise 308 A call | showdown — A: Par de Ases; B: Par de 10 | A | 754 | 1351/649 |
| 4 | 5/10 | B | **pré:** B raise 27 A call **flop:** A bet 34 B call **turn:** A check B check **river:** A check B bet 84 A call | showdown — A: Par de 2; B: Sequência até Rei | B | 290 | 1206/794 |
| 5 | 5/10 | A | **pré:** A call B raise 27 A call **flop:** B bet 37 A fold | fold | B | 91 | 1179/821 |
| 6 | 5/10 | B | **pré:** B raise 27 A call **flop:** A bet 34 B call **turn:** A check B check **river:** A check B check | showdown — A: Par de 6; B: Carta alta (Dama) | A | 122 | 1240/760 |
| 7 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 37 B raise 129 A call **turn:** B bet 218 A raise 669 B call parcial (all-in) | showdown — A: Trinca de Ases; B: Par de Ases | A | 1520 | 2000/0 |

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

Placar acumulado: A 6 × 9 B.
