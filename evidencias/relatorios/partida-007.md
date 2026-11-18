# Relatório da partida 7

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 17:49:47.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **B** |
| Mãos jogadas | 22 |
| Nível final de blinds | 3 (15/30) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 79% → 82% |
| Conhecimento de B sobre A | 80% → 83% |
| Acerto das previsões (A / B) | 82% / 53% |
| Evidências (cada evento, decisão e adaptação) | [partida-007.jsonl](partida-007.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 1** — Na mão 1 da partida 7, com blinds de 5/10, o menor stack vale 100.0 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 1** — Na mão 1 da partida 7, com blinds de 5/10, o menor stack vale 100.0 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 8 | 14 |
| VPIP (entra no pote) | 86% | 86% |
| PFR (aumenta no pré-flop) | 50% | 23% |
| Agressão (bet+raise / bet+raise+call) | 71% | 36% |
| Desiste diante de aposta | 35% | 14% |
| Blefes (sucesso) | 2 (0%) | 1 (0%) |
| Armadilhas | 0 | 8 |
| Showdowns ganhos | 3/10 | 7/10 |
| All-ins | 1 | 3 |
| Maior pote ganho | 1000 | 1780 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 70% | 45% | 45% |
| Frequência de blefe | 3% | 3% | 0% | 0% |
| Roubo após check | 20% | 20% | 5% | 5% |
| Armadilha (induzir) | 5% | 5% | 75% | 75% |
| Margem para pagar | 0% | 0% | -10% | -10% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Valor contra pagador, Corrigir blefes; B: Armadilha contra roubo, Induzir o agressor, Valor contra pagador, Pagar o blefador.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 15% (n≈94) | 34% (n≈66) |
| Agressão (bet+raise / ações) | 37% (n≈116) | 68% (n≈114) |
| Entra no pote (VPIP) | 82% (n≈75) | 85% (n≈75) |
| Aumenta no pré-flop (PFR) | 27% (n≈75) | 47% (n≈75) |
| Check-raise | 4% (n≈36) | 2% (n≈17) |
| Aposta após meu check | 30% (n≈50) | 50% (n≈61) |
| Blefe revelado no showdown | 29% (n≈10) | 45% (n≈33) |
| Meus blefes que funcionaram | 23% (n≈19) | 35% (n≈7) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | A | **pré:** A call B check **flop:** B bet 14 A call **turn:** B bet 33 A call **river:** B bet 79 A raise 242 B fold | fold | A | 435 | 1136/864 |
| 2 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A check B check **turn:** A check B check **river:** A bet 37 B fold | fold | A | 95 | 1165/835 |
| 3 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 37 B call **turn:** B check A bet 84 B call **river:** B check A bet 191 B call | showdown — A: Trinca de 4; B: Par de 4 | A | 682 | 1506/494 |
| 4 | 5/10 | B | **pré:** B raise 27 A call **flop:** A check B check **turn:** A check B check **river:** A bet 34 B call | showdown — A: Par de 10; B: Carta alta (Dama) | A | 122 | 1567/433 |
| 5 | 5/10 | A | **pré:** A raise 29 B call **flop:** B bet 40 A fold | fold | B | 98 | 1538/462 |
| 6 | 5/10 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de 9; B: Dois pares (9 e 3) | B | 20 | 1528/472 |
| 7 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 37 B call **turn:** B bet 91 A fold | fold | B | 223 | 1462/538 |
| 8 | 5/10 | B | **pré:** B raise 27 A call **flop:** A check B check **turn:** A check B check **river:** A check B bet 37 A fold | fold | B | 91 | 1435/565 |
| 9 | 10/20 | A | **pré:** A call B check **flop:** B bet 30 A raise 90 B call **turn:** B bet 150 A call **river:** B bet (all-in) 305 A fold | fold | B | 825 | 1175/825 |
| 10 | 10/20 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Carta alta (Dama); B: Carta alta (Ás) | B | 40 | 1155/845 |
| 11 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 75 B call **turn:** B check A bet 170 B call **river:** B check A bet 390 B fold | fold | A | 1000 | 1460/540 |
| 12 | 10/20 | B | **pré:** B raise 55 A call **flop:** A bet 70 B call **turn:** A check B bet 100 A call **river:** A bet 285 B fold | fold | A | 735 | 1685/315 |
| 13 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 75 B call **turn:** B check A check **river:** B bet (all-in) 180 A fold | fold | B | 450 | 1550/450 |
| 14 | 10/20 | B | **pré:** B raise 55 A call **flop:** A check B check **turn:** A check B check **river:** A check B bet 75 A fold | fold | B | 185 | 1495/505 |
| 15 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A check **turn:** B check A bet 50 B call **river:** B check A check | showdown — A: Par de 5; B: Dois pares (5 e 3) | B | 220 | 1385/615 |
| 16 | 10/20 | B | **pré:** B call A check **flop:** A check B bet 30 A call **turn:** A check B bet 70 A fold | fold | B | 170 | 1335/665 |
| 17 | 15/30 | A | **pré:** A raise 85 B call **flop:** B check A bet 110 B call **turn:** B check A bet 250 B fold | fold | A | 640 | 1530/470 |
| 18 | 15/30 | B | **pré:** B call A raise 85 B call **flop:** A bet 110 B call **turn:** A bet 250 B call **river:** A bet 565 B call parcial (all-in) | showdown — A: Par de Ases; B: Dois pares (6 e 2) | B | 940 | 1060/940 |
| 19 | 15/30 | A | **pré:** A raise 85 B call **flop:** B check A check **turn:** B check A check **river:** B check A check | showdown — A: Carta alta (Rei); B: Carta alta (Rei) | A | 170 | 1145/855 |
| 20 | 15/30 | B | **pré:** B call A raise 85 B call **flop:** A bet 110 B call **turn:** A check B check **river:** A check B check | showdown — A: Par de Damas; B: Flush (Dama alto) | B | 390 | 950/1050 |
| 21 | 15/30 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A bet 30 B call **river:** B check A check | showdown — A: Par de 6; B: Par de 6 | B | 120 | 890/1110 |
| 22 | 15/30 | B | **pré:** B raise 80 A call **flop:** A bet 100 B raise 350 A call **turn:** A bet (all-in) 460 B call | showdown — A: Par de Reis; B: Dois pares (10 e 7) | B | 1780 | 0/2000 |

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

Placar acumulado: A 3 × 4 B.
