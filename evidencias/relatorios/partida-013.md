# Relatório da partida 13

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 18:10:49.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **B** |
| Mãos jogadas | 19 |
| Nível final de blinds | 3 (15/30) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 86% → 87% |
| Conhecimento de B sobre A | 87% → 87% |
| Acerto das previsões (A / B) | 84% / 50% |
| Evidências (cada evento, decisão e adaptação) | [partida-013.jsonl](partida-013.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 1** — Na mão 1 da partida 13, com blinds de 5/10, o menor stack vale 100,0 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 1** — Na mão 1 da partida 13, com blinds de 5/10, o menor stack vale 100,0 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.
- **A · mão 14** — Na mão 14 da partida 13, com blinds de 10/20, o menor stack vale 8,1 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 14** — Na mão 14 da partida 13, com blinds de 10/20, o menor stack vale 8,1 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).
- **A · mão 15** — Na mão 15 da partida 13, com blinds de 10/20, o menor stack vale 16,1 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 15** — Na mão 15 da partida 13, com blinds de 10/20, o menor stack vale 16,1 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.
- **A · mão 19** — Na mão 19 da partida 13, com blinds de 15/30, o menor stack vale 8,3 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 19** — Na mão 19 da partida 13, com blinds de 15/30, o menor stack vale 8,3 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 9 | 10 |
| VPIP (entra no pote) | 89% | 89% |
| PFR (aumenta no pré-flop) | 68% | 11% |
| Agressão (bet+raise / bet+raise+call) | 73% | 34% |
| Desiste diante de aposta | 42% | 11% |
| Blefes (sucesso) | 3 (0%) | 0 (—) |
| Armadilhas | 0 | 3 |
| Showdowns ganhos | 5/7 | 2/7 |
| All-ins | 5 | 2 |
| Maior pote ganho | 929 | 1752 |

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
| Desiste diante de aposta | 15% (n≈123) | 32% (n≈97) |
| Agressão (bet+raise / ações) | 36% (n≈136) | 67% (n≈135) |
| Entra no pote (VPIP) | 79% (n≈106) | 84% (n≈105) |
| Aumenta no pré-flop (PFR) | 25% (n≈106) | 46% (n≈105) |
| Check-raise | 4% (n≈57) | 4% (n≈30) |
| Aposta após meu check | 29% (n≈80) | 52% (n≈90) |
| Blefe revelado no showdown | 43% (n≈19) | 49% (n≈53) |
| Meus blefes que funcionaram | 25% (n≈31) | 32% (n≈8) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | A | **pré:** A raise 29 B call **flop:** B bet 40 A call **turn:** B bet 95 A call **river:** B bet 226 A fold | fold | B | 554 | 836/1164 |
| 2 | 5/10 | B | **pré:** B call A check **flop:** A bet 13 B call **turn:** A bet 29 B call **river:** A bet 66 B fold | fold | A | 170 | 888/1112 |
| 3 | 5/10 | A | **pré:** A call B check **flop:** B check A bet 13 B call **turn:** B check A bet 29 B fold | fold | A | 75 | 911/1089 |
| 4 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Carta alta (Ás); B: Carta alta (Rei) | A | 58 | 940/1060 |
| 5 | 5/10 | A | **pré:** A raise 29 B call **flop:** B bet 40 A call **turn:** B bet 95 A fold | fold | B | 233 | 871/1129 |
| 6 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A check B check **turn:** A bet 32 B call **river:** A check B check | showdown — A: Carta alta (Dama); B: Carta alta (Valete) | A | 122 | 932/1068 |
| 7 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 23 B call **turn:** B bet 72 A fold | fold | B | 176 | 880/1120 |
| 8 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A check B check **turn:** A check B bet 40 A call **river:** A check B bet 95 A fold | fold | B | 233 | 811/1189 |
| 9 | 10/20 | A | **pré:** A call B check **flop:** B bet 30 A call **turn:** B check A bet 65 B raise 225 A call **river:** B bet 380 A fold | fold | B | 930 | 536/1464 |
| 10 | 10/20 | B | **pré:** B call A check **flop:** A bet 25 B call **turn:** A bet 55 B call **river:** A bet 125 B call | showdown — A: Dois pares (7 e 4); B: Par de Reis | A | 450 | 761/1239 |
| 11 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A check **turn:** B bet 85 A call **river:** B bet 200 A fold | fold | B | 490 | 616/1384 |
| 12 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A bet 75 B call **turn:** A check B check **river:** A check B bet 185 A fold | fold | B | 455 | 481/1519 |
| 13 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 75 B call **turn:** B bet 185 A call **river:** B bet 440 A fold | fold | B | 1080 | 161/1839 |
| 14 | 10/20 | B | **pré:** B raise (all-in) 1839 A call parcial (all-in) | showdown — A: Dois pares (Reis e Damas); B: Par de Valetes | A | 322 | 322/1678 |
| 15 | 10/20 | A | **pré:** A raise 60 B call **flop:** B bet 85 A call **turn:** B check A bet (all-in) 177 B call | showdown — A: Sequência até Rei; B: Par de 10 | A | 644 | 644/1356 |
| 16 | 10/20 | B | **pré:** B raise 55 A call **flop:** A bet 70 B call **turn:** A bet 160 B call **river:** A bet (all-in) 359 B fold | fold | A | 929 | 929/1071 |
| 17 | 15/30 | A | **pré:** A raise 85 B call **flop:** B check A bet 110 B call **turn:** B check A bet 250 B fold | fold | A | 640 | 1124/876 |
| 18 | 15/30 | B | **pré:** B call A raise 85 B call **flop:** A bet 110 B call **turn:** A bet 250 B call **river:** A bet (all-in) 679 B call parcial (all-in) | showdown — A: Dois pares (Valetes e 10); B: Sequência até Rei | B | 1752 | 248/1752 |
| 19 | 15/30 | A | **pré:** A raise (all-in) 248 B call | showdown — A: Par de 7; B: Flush (Dama alto) | B | 496 | 0/2000 |

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

Placar acumulado: A 5 × 8 B.
