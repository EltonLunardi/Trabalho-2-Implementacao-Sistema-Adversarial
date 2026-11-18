# Relatório da partida 23

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 18:49:59.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **B** |
| Mãos jogadas | 28 |
| Nível final de blinds | 4 (20/40) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 90% → 90% |
| Conhecimento de B sobre A | 89% → 90% |
| Acerto das previsões (A / B) | 83% / 62% |
| Evidências (cada evento, decisão e adaptação) | [partida-023.jsonl](partida-023.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 1** — Na mão 1 da partida 23, com blinds de 5/10, o menor stack vale 100,0 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 1** — Na mão 1 da partida 23, com blinds de 5/10, o menor stack vale 100,0 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.
- **A · mão 25** — Na mão 25 da partida 23, com blinds de 20/40, o menor stack vale 5,3 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 25** — Na mão 25 da partida 23, com blinds de 20/40, o menor stack vale 5,3 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 12 | 15 |
| VPIP (entra no pote) | 82% | 86% |
| PFR (aumenta no pré-flop) | 46% | 29% |
| Agressão (bet+raise / bet+raise+call) | 70% | 35% |
| Desiste diante de aposta | 23% | 10% |
| Blefes (sucesso) | 2 (50%) | 0 (—) |
| Armadilhas | 0 | 8 |
| Showdowns ganhos | 7/17 | 9/17 |
| All-ins | 4 | 4 |
| Maior pote ganho | 1368 | 1424 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 75% | 75% | 40% | 40% |
| Frequência de blefe | 0% | 0% | 0% | 0% |
| Roubo após check | 20% | 20% | 0% | 0% |
| Armadilha (induzir) | 10% | 10% | 65% | 65% |
| Margem para pagar | -8% | -8% | -6% | -6% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Valor contra pagador, Corrigir blefes, Pagar o blefador; B: Induzir o agressor, Valor contra pagador, Pagar o blefador, Corrigir blefes.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 12% (n≈138) | 25% (n≈123) |
| Agressão (bet+raise / ações) | 35% (n≈141) | 68% (n≈141) |
| Entra no pote (VPIP) | 84% (n≈128) | 82% (n≈128) |
| Aumenta no pré-flop (PFR) | 29% (n≈128) | 45% (n≈128) |
| Check-raise | 3% (n≈85) | 5% (n≈43) |
| Aposta após meu check | 24% (n≈109) | 53% (n≈117) |
| Blefe revelado no showdown | 33% (n≈40) | 42% (n≈78) |
| Meus blefes que funcionaram | 24% (n≈38) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | A | **pré:** A call B check **flop:** B bet 14 A call **turn:** B bet 33 A fold | fold | B | 81 | 976/1024 |
| 2 | 5/10 | B | **pré:** B call A raise 30 B call **flop:** A check B check **turn:** A bet 39 B call **river:** A bet 89 B call | showdown — A: Par de Damas; B: Par de 8 | A | 316 | 1134/866 |
| 3 | 5/10 | A | **pré:** A call B check **flop:** B bet 14 A raise 43 B call **turn:** B bet 72 A call **river:** B check A bet 161 B call | showdown — A: Trinca de Ases; B: Dois pares (Ases e Reis) | A | 572 | 1420/580 |
| 4 | 5/10 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de Reis; B: Par de Reis | B | 20 | 1410/590 |
| 5 | 5/10 | A | **pré:** A call B raise 26 A call **flop:** B check A bet 34 B call **turn:** B check A bet 77 B fold | fold | A | 197 | 1470/530 |
| 6 | 5/10 | B | **pré:** B raise 26 A call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de 8; B: Par de 8 | B | 52 | 1444/556 |
| 7 | 5/10 | A | **pré:** A raise 30 B call **flop:** B check A check **turn:** B check A check **river:** B bet 41 A call | showdown — A: Par de 2; B: Flush (Rei alto) | B | 142 | 1373/627 |
| 8 | 5/10 | B | **pré:** B raise 26 A call **flop:** A check B bet 35 A fold | fold | B | 87 | 1347/653 |
| 9 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A check **turn:** B check A check **river:** B check A bet 75 B call | showdown — A: Sequência até 10; B: Par de 3 | A | 270 | 1482/518 |
| 10 | 10/20 | B | **pré:** B raise 50 A call **flop:** A bet 65 B call **turn:** A check B bet 155 A call **river:** A check B bet (all-in) 248 A fold | fold | B | 788 | 1212/788 |
| 11 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A check **turn:** B check A check **river:** B check A check | showdown — A: Par de 5; B: Carta alta (Rei) | A | 120 | 1272/728 |
| 12 | 10/20 | B | **pré:** B call A check **flop:** A bet 25 B call **turn:** A bet 60 B call **river:** A bet 135 B call | showdown — A: Dois pares (6 e 2); B: Dois pares (6 e 2) | empate | 480 | 1272/728 |
| 13 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A check **turn:** B check A bet 75 B call **river:** B check A bet 175 B fold | fold | A | 445 | 1407/593 |
| 14 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de 6; B: Par de 6 | A | 120 | 1467/533 |
| 15 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A check **turn:** B check A check **river:** B bet 80 A fold | fold | B | 200 | 1407/593 |
| 16 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A check B check **turn:** A check B check **river:** A check B bet 80 A call | showdown — A: Carta alta (Ás); B: Par de 6 | B | 280 | 1267/733 |
| 17 | 15/30 | A | **pré:** A raise 90 B call **flop:** B check A check **turn:** B check A bet 115 B fold | fold | A | 295 | 1357/643 |
| 18 | 15/30 | B | **pré:** B raise 80 A call **flop:** A bet 105 B call **turn:** A bet 240 B call **river:** A bet 550 B call parcial (all-in) | showdown — A: Par de 5; B: Par de Ases | B | 1286 | 714/1286 |
| 19 | 15/30 | A | **pré:** A raise 90 B call **flop:** B check A bet 70 B call **turn:** B check A check **river:** B check A bet 130 B fold | fold | A | 450 | 874/1126 |
| 20 | 15/30 | B | **pré:** B raise 80 A call **flop:** A check B bet 110 A call **turn:** A check B bet 260 A fold | fold | B | 640 | 684/1316 |
| 21 | 15/30 | A | **pré:** A raise 90 B call **flop:** B bet 120 A raise 370 B call **turn:** B check A bet (all-in) 224 B call | showdown — A: Trinca de Valetes; B: Dois pares (Valetes e 2) | A | 1368 | 1368/632 |
| 22 | 15/30 | B | **pré:** B raise 80 A call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de Ases; B: Par de Ases | B | 160 | 1288/712 |
| 23 | 15/30 | A | **pré:** A raise 90 B call **flop:** B bet 120 A raise 370 B call **turn:** B check A bet (all-in) 828 B call parcial (all-in) | showdown — A: Par de 10; B: Trinca de Ases | B | 1424 | 576/1424 |
| 24 | 15/30 | B | **pré:** B call A check **flop:** A bet 40 B call **turn:** A bet 90 B call **river:** A bet 205 B call | showdown — A: Dois pares (Reis e 2); B: Dois pares (Reis e 3) | B | 730 | 211/1789 |
| 25 | 20/40 | A | **pré:** A fold | fold | B | 60 | 191/1809 |
| 26 | 20/40 | B | **pré:** B fold | fold | A | 60 | 211/1789 |
| 27 | 20/40 | A | **pré:** A raise (all-in) 211 B call | showdown — A: Dois pares (7 e 4); B: Par de 4 | A | 422 | 422/1578 |
| 28 | 20/40 | B | **pré:** B raise (all-in) 1578 A call parcial (all-in) | showdown — A: Par de 3; B: Dois pares (Ases e 3) | B | 844 | 0/2000 |

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

Placar acumulado: A 9 × 14 B.
