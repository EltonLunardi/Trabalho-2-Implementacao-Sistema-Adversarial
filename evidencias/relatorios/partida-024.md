# Relatório da partida 24

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 18:54:58.

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
| Conhecimento de A sobre B | 90% → 90% |
| Conhecimento de B sobre A | 90% → 90% |
| Acerto das previsões (A / B) | 83% / 56% |
| Evidências (cada evento, decisão e adaptação) | [partida-024.jsonl](partida-024.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 1** — Na mão 1 da partida 24, com blinds de 5/10, o menor stack vale 100,0 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 1** — Na mão 1 da partida 24, com blinds de 5/10, o menor stack vale 100,0 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 8 | 5 |
| VPIP (entra no pote) | 94% | 94% |
| PFR (aumenta no pré-flop) | 76% | 24% |
| Agressão (bet+raise / bet+raise+call) | 85% | 24% |
| Desiste diante de aposta | 20% | 18% |
| Blefes (sucesso) | 0 (—) | 0 (—) |
| Armadilhas | 0 | 2 |
| Showdowns ganhos | 2/9 | 3/9 |
| All-ins | 3 | 3 |
| Maior pote ganho | 1544 | 1228 |

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
| Desiste diante de aposta | 14% (n≈139) | 25% (n≈124) |
| Agressão (bet+raise / ações) | 32% (n≈141) | 72% (n≈141) |
| Entra no pote (VPIP) | 86% (n≈130) | 83% (n≈130) |
| Aumenta no pré-flop (PFR) | 28% (n≈130) | 49% (n≈130) |
| Check-raise | 4% (n≈88) | 5% (n≈44) |
| Aposta após meu check | 24% (n≈110) | 52% (n≈120) |
| Blefe revelado no showdown | 33% (n≈40) | 43% (n≈81) |
| Meus blefes que funcionaram | 24% (n≈38) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B call A raise 30 B call **flop:** A bet 39 B fold | fold | A | 99 | 1030/970 |
| 2 | 5/10 | A | **pré:** A raise 30 B call **flop:** B bet 41 A call **turn:** B check A bet 92 B raise 320 A raise (all-in) 959 B call parcial (all-in) | showdown — A: Sequência até Ás; B: Sequência até Ás | empate | 1940 | 1030/970 |
| 3 | 5/10 | B | **pré:** B raise 26 A call **flop:** A bet 34 B fold | fold | A | 86 | 1056/944 |
| 4 | 5/10 | A | **pré:** A raise 30 B call **flop:** B check A check **turn:** B check A check **river:** B check A check | showdown — A: Par de Ases; B: Par de Ases | B | 60 | 1026/974 |
| 5 | 5/10 | B | **pré:** B raise 26 A call **flop:** A bet 34 B call **turn:** A check B check **river:** A bet 77 B fold | fold | A | 197 | 1086/914 |
| 6 | 5/10 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A check **river:** B check A check | showdown — A: Carta alta (Ás); B: Par de 3 | B | 20 | 1076/924 |
| 7 | 5/10 | B | **pré:** B call A raise 30 B call **flop:** A check B check **turn:** A check B check **river:** A check B bet 41 A fold | fold | B | 101 | 1046/954 |
| 8 | 5/10 | A | **pré:** A raise 30 B call **flop:** B check A check **turn:** B check A check **river:** B bet 41 A fold | fold | B | 101 | 1016/984 |
| 9 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A check B check **turn:** A bet 75 B fold | fold | A | 195 | 1076/924 |
| 10 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 75 B call **turn:** B check A bet 175 B call **river:** B check A bet 400 B fold | fold | A | 1020 | 1386/614 |
| 11 | 10/20 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de Ases; B: Par de Ases | empate | 40 | 1386/614 |
| 12 | 10/20 | A | **pré:** A raise 60 B call **flop:** B bet 80 A call **turn:** B check A bet 180 B call **river:** B check A bet 415 B call parcial (all-in) | showdown — A: Par de 2; B: Dois pares (Valetes e 2) | B | 1228 | 772/1228 |
| 13 | 10/20 | B | **pré:** B raise 50 A raise 150 B call **flop:** A bet 195 B call **turn:** A bet (all-in) 427 B call | showdown — A: Full house (4 com 6); B: Full house (4 com 6) | empate | 1544 | 772/1228 |
| 14 | 10/20 | A | **pré:** A raise 60 B call **flop:** B bet 80 A call **turn:** B check A check **river:** B check A bet 180 B call | showdown — A: Flush (Ás alto); B: Flush (Ás alto) | empate | 640 | 772/1228 |
| 15 | 10/20 | B | **pré:** B raise 50 A raise 150 B call **flop:** A bet 195 B call **turn:** A bet (all-in) 427 B call | showdown — A: Dois pares (Reis e 9); B: Dois pares (Reis e 9) | A | 1544 | 1544/456 |
| 16 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 75 B fold | fold | A | 195 | 1604/396 |
| 17 | 15/30 | B | **pré:** B call A raise 90 B call **flop:** A bet 115 B call **turn:** A bet 265 B call parcial (all-in) | showdown — A: Par de 8; B: Carta alta (Dama) | A | 792 | 2000/0 |

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

Placar acumulado: A 10 × 14 B.
