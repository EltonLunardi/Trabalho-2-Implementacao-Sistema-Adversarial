# Relatório da partida 31

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 19:23:12.

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
| Conhecimento de A sobre B | 90% → 91% |
| Conhecimento de B sobre A | 90% → 90% |
| Acerto das previsões (A / B) | 78% / 90% |
| Evidências (cada evento, decisão e adaptação) | [partida-031.jsonl](partida-031.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 14** — Na mão 14 da partida 31, com blinds de 10/20, o menor stack vale 10,1 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 14** — Na mão 14 da partida 31, com blinds de 10/20, o menor stack vale 10,1 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 11 | 5 |
| VPIP (entra no pote) | 82% | 76% |
| PFR (aumenta no pré-flop) | 59% | 18% |
| Agressão (bet+raise / bet+raise+call) | 72% | 29% |
| Desiste diante de aposta | 18% | 18% |
| Blefes (sucesso) | 0 (—) | 0 (—) |
| Armadilhas | 0 | 6 |
| Showdowns ganhos | 4/7 | 2/7 |
| All-ins | 1 | 3 |
| Maior pote ganho | 724 | 634 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 75% | 75% | 40% | 40% |
| Frequência de blefe | 0% | 0% | 0% | 0% |
| Roubo após check | 30% | 30% | 0% | 0% |
| Armadilha (induzir) | 10% | 10% | 65% | 65% |
| Margem para pagar | -1% | -1% | -6% | -6% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Valor contra pagador, Corrigir blefes, Pagar o blefador, Respeitar o passivo; B: Induzir o agressor, Valor contra pagador, Pagar o blefador, Corrigir blefes.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 17% (n≈141) | 24% (n≈132) |
| Agressão (bet+raise / ações) | 31% (n≈141) | 71% (n≈141) |
| Entra no pote (VPIP) | 85% (n≈136) | 85% (n≈136) |
| Aumenta no pré-flop (PFR) | 26% (n≈136) | 51% (n≈136) |
| Check-raise | 4% (n≈105) | 7% (n≈56) |
| Aposta após meu check | 27% (n≈122) | 59% (n≈130) |
| Blefe revelado no showdown | 34% (n≈49) | 40% (n≈94) |
| Meus blefes que funcionaram | 25% (n≈46) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | A | **pré:** A raise 30 B call **flop:** B check A bet 39 B fold | fold | A | 99 | 1030/970 |
| 2 | 5/10 | B | **pré:** B call A raise 30 B call **flop:** A bet 39 B call **turn:** A bet 89 B call **river:** A bet 204 B call | showdown — A: Dois pares (Damas e 7); B: Par de 7 | A | 724 | 1392/608 |
| 3 | 5/10 | A | **pré:** A raise 30 B call **flop:** B check A bet 39 B call **turn:** B check A bet 89 B call **river:** B check A bet 204 B call | showdown — A: Dois pares (Ases e 9); B: Dois pares (Ases e 9) | A | 724 | 1754/246 |
| 4 | 5/10 | B | **pré:** B call A raise 30 B call **flop:** A check B check **turn:** A check B check **river:** A check B bet 41 A call | showdown — A: Par de 4; B: Trinca de 4 | B | 142 | 1683/317 |
| 5 | 5/10 | A | **pré:** A call B raise 26 A call **flop:** B check A bet 34 B call **turn:** B check A bet 77 B raise (all-in) 257 A call | showdown — A: Par de Damas; B: Trinca de 6 | B | 634 | 1366/634 |
| 6 | 5/10 | B | **pré:** B raise 26 A call **flop:** A check B bet 35 A call **turn:** A check B bet 83 A fold | fold | B | 205 | 1305/695 |
| 7 | 5/10 | A | **pré:** A raise 30 B call **flop:** B bet 41 A call **turn:** B bet 96 A call **river:** B bet 227 A raise 700 B call parcial (all-in) | showdown — A: Dois pares (Reis e 7); B: Dois pares (Reis e 7) | empate | 1390 | 1305/695 |
| 8 | 5/10 | B | **pré:** B call A raise 30 B call **flop:** A bet 39 B call **turn:** A bet 89 B fold | fold | A | 227 | 1374/626 |
| 9 | 10/20 | A | **pré:** A call B raise 50 A call **flop:** B check A bet 65 B call **turn:** B check A bet 150 B fold | fold | A | 380 | 1489/511 |
| 10 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A bet 75 B call **turn:** A check B check **river:** A check B check | showdown — A: Carta alta (Ás); B: Carta alta (Ás) | A | 270 | 1624/376 |
| 11 | 10/20 | A | **pré:** A call B check **flop:** B bet 25 A fold | fold | B | 65 | 1604/396 |
| 12 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A check B check **turn:** A bet 75 B fold | fold | A | 195 | 1664/336 |
| 13 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 75 B call **turn:** B check A bet 175 B fold | fold | A | 445 | 1799/201 |
| 14 | 10/20 | B | **pré:** B fold | fold | A | 30 | 1809/191 |
| 15 | 10/20 | A | **pré:** A fold | fold | B | 30 | 1799/201 |
| 16 | 10/20 | B | **pré:** B fold | fold | A | 30 | 1809/191 |
| 17 | 15/30 | A | **pré:** A raise (all-in) 1809 B call parcial (all-in) | showdown — A: Sequência até Rei; B: Carta alta (Ás) | A | 382 | 2000/0 |

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

Placar acumulado: A 16 × 15 B.
