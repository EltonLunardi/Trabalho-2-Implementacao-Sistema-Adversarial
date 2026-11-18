# Relatório da partida 10

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 17:58:45.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **B** |
| Mãos jogadas | 11 |
| Nível final de blinds | 2 (10/20) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 84% → 85% |
| Conhecimento de B sobre A | 85% → 86% |
| Acerto das previsões (A / B) | 79% / 50% |
| Evidências (cada evento, decisão e adaptação) | [partida-010.jsonl](partida-010.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 3** — Na mão 3 da partida 10, A observou que B mostrou mão fraca em 40% dos showdowns em que apostou (6/14 recentes). Em resposta, A passou a pagar apostas com mãos mais fracas (margem para pagar +0 p.p. → -8 p.p.).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 5 | 5 |
| VPIP (entra no pote) | 82% | 82% |
| PFR (aumenta no pré-flop) | 27% | 36% |
| Agressão (bet+raise / bet+raise+call) | 67% | 32% |
| Desiste diante de aposta | 13% | 25% |
| Blefes (sucesso) | 4 (50%) | 0 (—) |
| Armadilhas | 0 | 3 |
| Showdowns ganhos | 0/5 | 4/5 |
| All-ins | 1 | 0 |
| Maior pote ganho | 420 | 960 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 70% | 45% | 45% |
| Frequência de blefe | 3% | 3% | 0% | 0% |
| Roubo após check | 20% | 20% | 5% | 5% |
| Armadilha (induzir) | 5% | 5% | 55% | 55% |
| Margem para pagar | 0% | -8% | -6% | -6% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Valor contra pagador, Corrigir blefes, Pagar o blefador; B: Induzir o agressor, Valor contra pagador, Pagar o blefador.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 18% (n≈111) | 32% (n≈82) |
| Agressão (bet+raise / ações) | 37% (n≈129) | 66% (n≈128) |
| Entra no pote (VPIP) | 78% (n≈94) | 84% (n≈93) |
| Aumenta no pré-flop (PFR) | 29% (n≈94) | 41% (n≈93) |
| Check-raise | 2% (n≈48) | 2% (n≈23) |
| Aposta após meu check | 28% (n≈67) | 47% (n≈81) |
| Blefe revelado no showdown | 43% (n≈14) | 46% (n≈42) |
| Meus blefes que funcionaram | 28% (n≈25) | 35% (n≈7) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B raise 27 A call **flop:** A bet 34 B raise 119 A call **turn:** A check B check **river:** A check B bet 201 A fold | fold | B | 493 | 854/1146 |
| 2 | 5/10 | A | **pré:** A call B check **flop:** B check A bet 13 B fold | fold | A | 33 | 864/1136 |
| 3 | 5/10 | B | **pré:** B raise 27 A call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de 2; B: Par de 2 | B | 54 | 837/1163 |
| 4 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 37 B call **turn:** B check A bet 84 B call **river:** B check A bet 120 B fold | fold | A | 420 | 987/1013 |
| 5 | 5/10 | B | **pré:** B raise 27 A call **flop:** A bet 30 B call **turn:** A bet 73 B call **river:** A bet 165 B call | showdown — A: Par de 5; B: Trinca de 5 | B | 590 | 692/1308 |
| 6 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 23 B call **turn:** B check A check **river:** B check A bet 42 B fold | fold | A | 146 | 744/1256 |
| 7 | 5/10 | B | **pré:** B call A check **flop:** A bet 13 B call **turn:** A bet 29 B fold | fold | A | 75 | 767/1233 |
| 8 | 5/10 | A | **pré:** A call B check **flop:** B check A bet 13 B call **turn:** B check A bet 29 B fold | fold | A | 75 | 790/1210 |
| 9 | 10/20 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Carta alta (Rei); B: Carta alta (Rei) | empate | 40 | 790/1210 |
| 10 | 10/20 | A | **pré:** A call B raise 55 A call **flop:** B bet 75 A call **turn:** B bet 180 A call **river:** B check A check | showdown — A: Carta alta (Ás); B: Par de 2 | B | 620 | 480/1520 |
| 11 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A bet 75 B call **turn:** A bet 170 B call **river:** A bet (all-in) 175 B call | showdown — A: Par de Ases; B: Trinca de 8 | B | 960 | 0/2000 |

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

Placar acumulado: A 5 × 5 B.
