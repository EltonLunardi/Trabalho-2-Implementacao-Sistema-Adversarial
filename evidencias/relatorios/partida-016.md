# Relatório da partida 16

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 18:17:58.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **B** |
| Mãos jogadas | 9 |
| Nível final de blinds | 2 (10/20) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 88% → 88% |
| Conhecimento de B sobre A | 88% → 88% |
| Acerto das previsões (A / B) | 89% / 82% |
| Evidências (cada evento, decisão e adaptação) | [partida-016.jsonl](partida-016.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 5** — Na mão 5 da partida 16, com blinds de 5/10, o menor stack vale 8,8 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 5** — Na mão 5 da partida 16, com blinds de 5/10, o menor stack vale 8,8 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 1 | 8 |
| VPIP (entra no pote) | 56% | 56% |
| PFR (aumenta no pré-flop) | 11% | 56% |
| Agressão (bet+raise / bet+raise+call) | 43% | 63% |
| Desiste diante de aposta | 20% | 0% |
| Blefes (sucesso) | 0 (—) | 1 (100%) |
| Armadilhas | 0 | 3 |
| Showdowns ganhos | 0/4 | 4/4 |
| All-ins | 1 | 2 |
| Maior pote ganho | 15 | 1922 |

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
| Desiste diante de aposta | 16% (n≈126) | 29% (n≈107) |
| Agressão (bet+raise / ações) | 44% (n≈139) | 61% (n≈138) |
| Entra no pote (VPIP) | 81% (n≈112) | 83% (n≈112) |
| Aumenta no pré-flop (PFR) | 31% (n≈112) | 42% (n≈112) |
| Check-raise | 6% (n≈62) | 4% (n≈33) |
| Aposta após meu check | 28% (n≈88) | 54% (n≈94) |
| Blefe revelado no showdown | 40% (n≈24) | 46% (n≈56) |
| Meus blefes que funcionaram | 26% (n≈33) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B raise 27 A raise 81 B call **flop:** A bet 103 B call **turn:** A bet 234 B call **river:** A check B check | showdown — A: Par de Reis; B: Dois pares (Reis e 8) | B | 836 | 582/1418 |
| 2 | 5/10 | A | **pré:** A call B check **flop:** B bet 14 A raise 43 B call **turn:** B check A bet 67 B call **river:** B bet 165 A call | showdown — A: Par de 8; B: Dois pares (6 e 3) | B | 570 | 297/1703 |
| 3 | 5/10 | B | **pré:** B raise 27 A call **flop:** A bet 34 B call **turn:** A check B check **river:** A check B bet 84 A call | showdown — A: Par de 10; B: Full house (Damas com 10) | B | 290 | 152/1848 |
| 4 | 5/10 | A | **pré:** A call B raise 27 A call **flop:** B bet 37 A call **turn:** B bet 88 A fold | fold | B | 216 | 88/1912 |
| 5 | 5/10 | B | **pré:** B fold | fold | A | 15 | 93/1907 |
| 6 | 5/10 | A | **pré:** A fold | fold | B | 15 | 88/1912 |
| 7 | 5/10 | B | **pré:** B raise (all-in) 1912 A fold | fold | B | 1922 | 78/1922 |
| 8 | 5/10 | A | **pré:** A fold | fold | B | 15 | 73/1927 |
| 9 | 10/20 | B | **pré:** B raise (all-in) 1927 A call parcial (all-in) | showdown — A: Par de 4; B: Par de 4 | B | 146 | 0/2000 |

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

Placar acumulado: A 6 × 10 B.
