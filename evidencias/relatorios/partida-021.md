# Relatório da partida 21

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 18:35:58.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **B** |
| Mãos jogadas | 7 |
| Nível final de blinds | 1 (5/10) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 89% → 89% |
| Conhecimento de B sobre A | 89% → 89% |
| Acerto das previsões (A / B) | 86% / 73% |
| Evidências (cada evento, decisão e adaptação) | [partida-021.jsonl](partida-021.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

_Nenhuma adaptação nesta partida._

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 2 | 5 |
| VPIP (entra no pote) | 86% | 100% |
| PFR (aumenta no pré-flop) | 43% | 43% |
| Agressão (bet+raise / bet+raise+call) | 56% | 50% |
| Desiste diante de aposta | 20% | 10% |
| Blefes (sucesso) | 1 (0%) | 0 (—) |
| Armadilhas | 0 | 4 |
| Showdowns ganhos | 1/4 | 3/4 |
| All-ins | 1 | 0 |
| Maior pote ganho | 122 | 1320 |

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
| Desiste diante de aposta | 13% (n≈135) | 27% (n≈119) |
| Agressão (bet+raise / ações) | 41% (n≈141) | 65% (n≈141) |
| Entra no pote (VPIP) | 85% (n≈123) | 82% (n≈122) |
| Aumenta no pré-flop (PFR) | 31% (n≈123) | 45% (n≈122) |
| Check-raise | 4% (n≈76) | 6% (n≈38) |
| Aposta após meu check | 25% (n≈99) | 56% (n≈107) |
| Blefe revelado no showdown | 32% (n≈34) | 41% (n≈69) |
| Meus blefes que funcionaram | 25% (n≈34) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | A | **pré:** A call B raise 27 A call **flop:** B check A check **turn:** B check A bet 34 B call **river:** B bet 84 A call | showdown — A: Par de 7; B: Dois pares (Reis e 10) | B | 290 | 855/1145 |
| 2 | 5/10 | B | **pré:** B raise 27 A call **flop:** A bet 34 B call **turn:** A check B check **river:** A check B bet 84 A call | showdown — A: Carta alta (Ás); B: Par de Valetes | B | 290 | 710/1290 |
| 3 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A check **turn:** B check A bet 23 B call **river:** B bet 72 A fold | fold | B | 176 | 658/1342 |
| 4 | 5/10 | B | **pré:** B raise 27 A call **flop:** A check B check **turn:** A check B check **river:** A bet 34 B call | showdown — A: Dois pares (9 e 3); B: Par de 9 | A | 122 | 719/1281 |
| 5 | 5/10 | A | **pré:** A raise 29 B call **flop:** B bet 40 A call **turn:** B bet 95 A fold | fold | B | 233 | 650/1350 |
| 6 | 5/10 | B | **pré:** B call A check **flop:** A bet 13 B fold | fold | A | 33 | 660/1340 |
| 7 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 37 B call **turn:** B bet 91 A raise 279 B call **river:** B bet 476 A call parcial (all-in) | showdown — A: Dois pares (8 e 6); B: Dois pares (Damas e 8) | B | 1320 | 0/2000 |

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

Placar acumulado: A 8 × 13 B.
