# Relatório da partida 28

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 19:12:13.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **A** |
| Mãos jogadas | 31 |
| Nível final de blinds | 4 (20/40) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 90% → 90% |
| Conhecimento de B sobre A | 90% → 90% |
| Acerto das previsões (A / B) | 79% / 66% |
| Evidências (cada evento, decisão e adaptação) | [partida-028.jsonl](partida-028.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 18** — Na mão 18 da partida 28, com blinds de 15/30, o menor stack vale 10,5 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 18** — Na mão 18 da partida 28, com blinds de 15/30, o menor stack vale 10,5 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).
- **A · mão 19** — Na mão 19 da partida 28, com blinds de 15/30, o menor stack vale 21,1 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 19** — Na mão 19 da partida 28, com blinds de 15/30, o menor stack vale 21,1 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 26** — Na mão 26 da partida 28, B percebeu que A começou a jogar de forma mais passiva — agressão (bet+raise / ações) foi de 69% (histórico) para 50% (recente); B passou a confiar na leitura recente em vez do histórico.
- **A · mão 28** — Na mão 28 da partida 28, com blinds de 20/40, o menor stack vale 8,7 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 28** — Na mão 28 da partida 28, com blinds de 20/40, o menor stack vale 8,7 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 15 | 15 |
| VPIP (entra no pote) | 77% | 77% |
| PFR (aumenta no pré-flop) | 35% | 29% |
| Agressão (bet+raise / bet+raise+call) | 65% | 38% |
| Desiste diante de aposta | 32% | 19% |
| Blefes (sucesso) | 3 (0%) | 0 (—) |
| Armadilhas | 1 | 1 |
| Showdowns ganhos | 7/14 | 6/14 |
| All-ins | 2 | 2 |
| Maior pote ganho | 1654 | 1294 |

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
| Desiste diante de aposta | 15% (n≈141) | 25% (n≈130) |
| Agressão (bet+raise / ações) | 35% (n≈141) | 48% (n≈141) |
| Entra no pote (VPIP) | 86% (n≈134) | 84% (n≈134) |
| Aumenta no pré-flop (PFR) | 27% (n≈134) | 49% (n≈134) |
| Check-raise | 3% (n≈97) | 4% (n≈51) |
| Aposta após meu check | 24% (n≈119) | 54% (n≈126) |
| Blefe revelado no showdown | 36% (n≈46) | 43% (n≈89) |
| Meus blefes que funcionaram | 24% (n≈44) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B call A raise 30 B call **flop:** A bet 39 B call **turn:** A bet 89 B fold | fold | A | 227 | 1069/931 |
| 2 | 5/10 | A | **pré:** A raise 30 B call **flop:** B check A bet 39 B call **turn:** B check A bet 89 B fold | fold | A | 227 | 1138/862 |
| 3 | 5/10 | B | **pré:** B raise 26 A call **flop:** A check B bet 35 A fold | fold | B | 87 | 1112/888 |
| 4 | 5/10 | A | **pré:** A raise 30 B call **flop:** B bet 41 A fold | fold | B | 101 | 1082/918 |
| 5 | 5/10 | B | **pré:** B raise 26 A call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Carta alta (Ás); B: Carta alta (Ás) | B | 52 | 1056/944 |
| 6 | 5/10 | A | **pré:** A raise 30 B call **flop:** B check A bet 39 B call **turn:** B check A bet 89 B fold | fold | A | 227 | 1125/875 |
| 7 | 5/10 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Carta alta (Ás); B: Par de 2 | B | 20 | 1115/885 |
| 8 | 5/10 | A | **pré:** A call B check **flop:** B check A bet 13 B call **turn:** B check A bet 30 B fold | fold | A | 76 | 1138/862 |
| 9 | 10/20 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de 10; B: Par de 10 | B | 40 | 1118/882 |
| 10 | 10/20 | A | **pré:** A raise 60 B call **flop:** B bet 80 A call **turn:** B check A bet 110 B call **river:** B bet 340 A fold | fold | B | 840 | 868/1132 |
| 11 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A bet 75 B fold | fold | A | 195 | 928/1072 |
| 12 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 75 B call **turn:** B check A bet 175 B call **river:** B check A bet 400 B fold | fold | A | 1020 | 1238/762 |
| 13 | 10/20 | B | **pré:** B raise 50 A call **flop:** A check B check **turn:** A check B check **river:** A bet 65 B call | showdown — A: Dois pares (7 e 3); B: Par de 3 | A | 230 | 1353/647 |
| 14 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 75 B call **turn:** B check A check **river:** B bet 185 A raise 570 B call parcial (all-in) | showdown — A: Par de Damas; B: Par de Ases | B | 1294 | 706/1294 |
| 15 | 10/20 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de Damas; B: Par de Damas | empate | 40 | 706/1294 |
| 16 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 50 B call **turn:** B check A bet 90 B call **river:** B check A check | showdown — A: Carta alta (Rei); B: Par de Valetes | B | 400 | 506/1494 |
| 17 | 15/30 | B | **pré:** B raise 80 A call **flop:** A check B bet 110 A call **turn:** A check B bet 260 A fold | fold | B | 640 | 316/1684 |
| 18 | 15/30 | A | **pré:** A raise (all-in) 316 B call | showdown — A: Carta alta (Ás); B: Carta alta (Ás) | A | 632 | 632/1368 |
| 19 | 15/30 | B | **pré:** B call A raise 90 B call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Carta alta (Ás); B: Carta alta (Dama) | A | 180 | 722/1278 |
| 20 | 15/30 | A | **pré:** A call B check **flop:** B bet 40 A fold | fold | B | 100 | 692/1308 |
| 21 | 15/30 | B | **pré:** B call A check **flop:** A bet 40 B call **turn:** A check B check **river:** A bet 90 B call | showdown — A: Dois pares (8 e 3); B: Par de 8 | A | 320 | 852/1148 |
| 22 | 15/30 | A | **pré:** A call B raise 80 A call **flop:** B check A bet 105 B call **turn:** B check A bet 240 B fold | fold | A | 610 | 1037/963 |
| 23 | 15/30 | B | **pré:** B raise 80 A call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de 4; B: Par de 4 | B | 160 | 957/1043 |
| 24 | 15/30 | A | **pré:** A call B check **flop:** B bet 40 A call **turn:** B check A check **river:** B check A bet 90 B call | showdown — A: Par de 10; B: Par de 4 | A | 320 | 1117/883 |
| 25 | 20/40 | B | **pré:** B raise 105 A call **flop:** A check B bet 145 A call **turn:** A check B bet 340 A fold | fold | B | 840 | 867/1133 |
| 26 | 20/40 | A | **pré:** A call B check **flop:** B bet 55 A fold | fold | B | 135 | 827/1173 |
| 27 | 20/40 | B | **pré:** B raise 105 A call **flop:** A check B bet 145 A call **turn:** A bet 320 B call **river:** A bet (all-in) 257 B call | showdown — A: Par de Damas; B: Par de 6 | A | 1654 | 1654/346 |
| 28 | 20/40 | A | **pré:** A fold | fold | B | 60 | 1634/366 |
| 29 | 20/40 | B | **pré:** B fold | fold | A | 60 | 1654/346 |
| 30 | 20/40 | A | **pré:** A fold | fold | B | 60 | 1634/366 |
| 31 | 20/40 | B | **pré:** B raise (all-in) 366 A call | showdown — A: Trinca de 8; B: Dois pares (8 e 6) | A | 732 | 2000/0 |

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

Placar acumulado: A 13 × 15 B.
