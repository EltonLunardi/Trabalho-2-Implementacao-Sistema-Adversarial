# Relatório da partida 6

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 17:49:42.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **B** |
| Mãos jogadas | 18 |
| Nível final de blinds | 3 (15/30) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 76% → 79% |
| Conhecimento de B sobre A | 76% → 80% |
| Acerto das previsões (A / B) | 81% / 58% |
| Evidências (cada evento, decisão e adaptação) | [partida-006.jsonl](partida-006.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 1** — Na mão 1 da partida 6, com blinds de 5/10, o menor stack vale 100.0 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 1** — Na mão 1 da partida 6, com blinds de 5/10, o menor stack vale 100.0 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.
- **A · mão 16** — Na mão 16 da partida 6, com blinds de 10/20, o menor stack vale 9.3 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 16** — Na mão 16 da partida 6, com blinds de 10/20, o menor stack vale 9.3 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 7 | 10 |
| VPIP (entra no pote) | 94% | 83% |
| PFR (aumenta no pré-flop) | 56% | 22% |
| Agressão (bet+raise / bet+raise+call) | 71% | 35% |
| Desiste diante de aposta | 38% | 13% |
| Blefes (sucesso) | 3 (0%) | 0 (—) |
| Armadilhas | 0 | 6 |
| Showdowns ganhos | 4/10 | 5/10 |
| All-ins | 3 | 1 |
| Maior pote ganho | 682 | 1620 |

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
| Desiste diante de aposta | 16% (n≈81) | 34% (n≈54) |
| Agressão (bet+raise / ações) | 38% (n≈104) | 66% (n≈102) |
| Entra no pote (VPIP) | 80% (n≈64) | 85% (n≈64) |
| Aumenta no pré-flop (PFR) | 28% (n≈64) | 46% (n≈64) |
| Check-raise | 5% (n≈26) | 3% (n≈12) |
| Aposta após meu check | 33% (n≈36) | 47% (n≈49) |
| Blefe revelado no showdown | 29% (n≈10) | 44% (n≈27) |
| Meus blefes que funcionaram | 26% (n≈17) | 39% (n≈6) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A bet 37 B call **turn:** A bet 84 B call **river:** A bet 191 B call | showdown — A: Trinca de Ases; B: Dois pares (Ases e Reis) | A | 682 | 1341/659 |
| 2 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A check **turn:** B check A bet 37 B call **river:** B bet 91 A call | showdown — A: Dois pares (Valetes e 5); B: Trinca de 5 | B | 314 | 1184/816 |
| 3 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Carta alta (Ás); B: Carta alta (Rei) | A | 58 | 1213/787 |
| 4 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A check **turn:** B check A bet 23 B call **river:** B check A check | showdown — A: Par de 8; B: Par de 8 | A | 104 | 1265/735 |
| 5 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A bet 37 B fold | fold | A | 95 | 1294/706 |
| 6 | 5/10 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A check **river:** B check A bet 10 B raise 38 A call | showdown — A: Par de 10; B: Dois pares (10 e 5) | B | 96 | 1246/754 |
| 7 | 5/10 | B | **pré:** B raise 27 A call **flop:** A check B check **turn:** A check B check **river:** A check B bet 37 A fold | fold | B | 91 | 1219/781 |
| 8 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A check **turn:** B check A check **river:** B check A check | showdown — A: Carta alta (Ás); B: Par de 5 | B | 58 | 1190/810 |
| 9 | 10/20 | B | **pré:** B call A check **flop:** A bet 25 B call **turn:** A bet 55 B call **river:** A bet 125 B raise 440 A raise (all-in) 1090 B call parcial (all-in) | showdown — A: Trinca de 8; B: Sequência até Rei | B | 1620 | 380/1620 |
| 10 | 10/20 | A | **pré:** A call B check **flop:** B check A check **turn:** B bet 30 A fold | fold | B | 70 | 360/1640 |
| 11 | 10/20 | B | **pré:** B raise 55 A call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Dois pares (5 e 2); B: Dois pares (5 e 2) | empate | 110 | 360/1640 |
| 12 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 75 B fold | fold | A | 195 | 420/1580 |
| 13 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A check B check **turn:** A bet 75 B fold | fold | A | 195 | 480/1520 |
| 14 | 10/20 | A | **pré:** A call B check **flop:** B bet 30 A fold | fold | B | 70 | 460/1540 |
| 15 | 10/20 | B | **pré:** B raise 55 A call **flop:** A check B bet 75 A call **turn:** A bet 145 B call **river:** A check B bet 380 A fold | fold | B | 930 | 185/1815 |
| 16 | 10/20 | A | **pré:** A raise (all-in) 185 B call | showdown — A: Dois pares (8 e 4); B: Par de 8 | A | 370 | 370/1630 |
| 17 | 15/30 | B | **pré:** B raise 80 A call **flop:** A check B bet 110 A fold | fold | B | 270 | 290/1710 |
| 18 | 15/30 | A | **pré:** A raise (all-in) 290 B call | showdown — A: Dois pares (Valetes e 8); B: Full house (8 com Valetes) | B | 580 | 0/2000 |

## Aprendizado entre partidas

| Partida | Vencedor | Mãos | Conhecimento A→B | Conhecimento B→A | Acerto A | Acerto B | Adaptações | Maior cadeia |
|---:|---|---:|---:|---:|---:|---:|---:|---:|
| [1](partida-001.md) | B | 11 | 42% | 40% | 45% | 68% | 4 | 2 |
| [2](partida-002.md) | A | 26 | 67% | 64% | 80% | 57% | 3 | 2 |
| [3](partida-003.md) | A | 5 | 68% | 67% | 88% | 40% | 1 | 1 |
| [4](partida-004.md) | B | 14 | 73% | 72% | 89% | 58% | 2 | 3 |
| [5](partida-005.md) | A | 13 | 76% | 76% | 77% | 47% | 0 | 0 |
| [6](partida-006.md) | B | 18 | 79% | 80% | 81% | 58% | 0 | 0 |

Placar acumulado: A 3 × 3 B.
