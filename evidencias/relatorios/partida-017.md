# Relatório da partida 17

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 18:20:40.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **A** |
| Mãos jogadas | 8 |
| Nível final de blinds | 1 (5/10) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 88% → 88% |
| Conhecimento de B sobre A | 88% → 88% |
| Acerto das previsões (A / B) | 100% / 59% |
| Evidências (cada evento, decisão e adaptação) | [partida-017.jsonl](partida-017.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 1** — Na mão 1 da partida 17, com blinds de 5/10, o menor stack vale 100,0 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 1** — Na mão 1 da partida 17, com blinds de 5/10, o menor stack vale 100,0 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 5 | 3 |
| VPIP (entra no pote) | 100% | 100% |
| PFR (aumenta no pré-flop) | 88% | 38% |
| Agressão (bet+raise / bet+raise+call) | 78% | 29% |
| Desiste diante de aposta | 0% | 0% |
| Blefes (sucesso) | 1 (0%) | 0 (—) |
| Armadilhas | 0 | 3 |
| Showdowns ganhos | 5/8 | 3/8 |
| All-ins | 1 | 2 |
| Maior pote ganho | 1700 | 738 |

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
| Desiste diante de aposta | 14% (n≈128) | 27% (n≈109) |
| Agressão (bet+raise / ações) | 41% (n≈139) | 64% (n≈139) |
| Entra no pote (VPIP) | 82% (n≈114) | 84% (n≈113) |
| Aumenta no pré-flop (PFR) | 31% (n≈114) | 45% (n≈113) |
| Check-raise | 6% (n≈64) | 4% (n≈33) |
| Aposta após meu check | 28% (n≈88) | 51% (n≈98) |
| Blefe revelado no showdown | 38% (n≈26) | 45% (n≈60) |
| Meus blefes que funcionaram | 26% (n≈33) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 37 B call **turn:** B check A bet 84 B call **river:** B check A check | showdown — A: Par de Ases; B: Dois pares (Ases e 10) | B | 300 | 850/1150 |
| 2 | 5/10 | B | **pré:** B raise 27 A raise 81 B call **flop:** A bet 103 B raise 361 A call **turn:** A bet (all-in) 408 B call | showdown — A: Par de Reis; B: Par de Damas | A | 1700 | 1700/300 |
| 3 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A check **turn:** B check A check **river:** B bet 40 A call | showdown — A: Par de 2; B: Dois pares (Damas e Valetes) | B | 138 | 1631/369 |
| 4 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A bet 37 B call **turn:** A bet 84 B raise (all-in) 303 A call | showdown — A: Par de Reis; B: Sequência até 6 | B | 738 | 1262/738 |
| 5 | 5/10 | A | **pré:** A raise 29 B call **flop:** B bet 40 A call **turn:** B check A check **river:** B check A bet 88 B call | showdown — A: Par de Reis; B: Par de 6 | A | 314 | 1419/581 |
| 6 | 5/10 | B | **pré:** B raise 27 A call **flop:** A bet 34 B call **turn:** A check B check **river:** A bet 78 B call | showdown — A: Dois pares (8 e 2); B: Par de 8 | A | 278 | 1558/442 |
| 7 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A check **turn:** B check A check **river:** B check A check | showdown — A: Dois pares (Ases e 6); B: Dois pares (Ases e 6) | A | 58 | 1587/413 |
| 8 | 5/10 | B | **pré:** B raise 27 A raise 81 B call **flop:** A bet 103 B call **turn:** A bet 234 B call parcial (all-in) | showdown — A: Sequência até Ás; B: Dois pares (Damas e 9) | A | 826 | 2000/0 |

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

Placar acumulado: A 7 × 10 B.
