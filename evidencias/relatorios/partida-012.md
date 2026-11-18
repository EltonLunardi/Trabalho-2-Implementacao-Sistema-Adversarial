# Relatório da partida 12

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 18:05:20.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **B** |
| Mãos jogadas | 15 |
| Nível final de blinds | 2 (10/20) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 85% → 86% |
| Conhecimento de B sobre A | 86% → 87% |
| Acerto das previsões (A / B) | 90% / 67% |
| Evidências (cada evento, decisão e adaptação) | [partida-012.jsonl](partida-012.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 13** — Na mão 13 da partida 12, com blinds de 10/20, o menor stack vale 5,7 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 13** — Na mão 13 da partida 12, com blinds de 10/20, o menor stack vale 5,7 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 5 | 10 |
| VPIP (entra no pote) | 73% | 73% |
| PFR (aumenta no pré-flop) | 40% | 13% |
| Agressão (bet+raise / bet+raise+call) | 61% | 34% |
| Desiste diante de aposta | 17% | 5% |
| Blefes (sucesso) | 4 (0%) | 0 (—) |
| Armadilhas | 0 | 3 |
| Showdowns ganhos | 3/11 | 8/11 |
| All-ins | 3 | 0 |
| Maior pote ganho | 374 | 780 |

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
| Desiste diante de aposta | 16% (n≈117) | 29% (n≈91) |
| Agressão (bet+raise / ações) | 38% (n≈133) | 64% (n≈132) |
| Entra no pote (VPIP) | 77% (n≈101) | 83% (n≈100) |
| Aumenta no pré-flop (PFR) | 28% (n≈101) | 41% (n≈100) |
| Check-raise | 2% (n≈52) | 5% (n≈28) |
| Aposta após meu check | 29% (n≈76) | 48% (n≈87) |
| Blefe revelado no showdown | 45% (n≈18) | 49% (n≈49) |
| Meus blefes que funcionaram | 27% (n≈29) | 32% (n≈8) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Carta alta (Ás); B: Carta alta (Ás) | B | 20 | 990/1010 |
| 2 | 5/10 | A | **pré:** A raise 29 B call **flop:** B bet 40 A call **turn:** B bet 95 A call **river:** B bet 226 A call | showdown — A: Par de Valetes; B: Full house (Valetes com 3) | B | 780 | 600/1400 |
| 3 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A check B bet 40 A call **turn:** A check B check **river:** A check B check | showdown — A: Carta alta (Dama); B: Par de 2 | B | 138 | 531/1469 |
| 4 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A check **turn:** B check A bet 37 B call **river:** B bet 91 A raise 279 B call | showdown — A: Dois pares (Ases e 2); B: Sequência até 5 | B | 690 | 186/1814 |
| 5 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Carta alta (Ás); B: Carta alta (Rei) | A | 58 | 215/1785 |
| 6 | 5/10 | A | **pré:** A call B check **flop:** B check A bet 10 B call **turn:** B check A check **river:** B check A bet 16 B call | showdown — A: Par de Damas; B: Par de Damas | B | 72 | 179/1821 |
| 7 | 5/10 | B | **pré:** B call A check **flop:** A bet 13 B call **turn:** A bet 29 B call **river:** A bet 66 B call | showdown — A: Dois pares (10 e 7); B: Par de 10 | A | 236 | 297/1703 |
| 8 | 5/10 | A | **pré:** A call B check **flop:** B check A bet 10 B call **turn:** B check A check **river:** B bet 28 A call | showdown — A: Carta alta (Rei); B: Par de 2 | B | 96 | 249/1751 |
| 9 | 10/20 | B | **pré:** B raise 55 A call **flop:** A bet 70 B call **turn:** A bet (all-in) 124 B fold | fold | A | 374 | 374/1626 |
| 10 | 10/20 | A | **pré:** A call B check **flop:** B check A bet 20 B call **turn:** B check A check **river:** B bet 55 A call | showdown — A: Dois pares (9 e 7); B: Sequência até 10 | B | 190 | 279/1721 |
| 11 | 10/20 | B | **pré:** B call A check **flop:** A check B bet 30 A fold | fold | B | 70 | 259/1741 |
| 12 | 10/20 | A | **pré:** A raise 60 B call **flop:** B bet 85 A call **turn:** B bet 200 A fold | fold | B | 490 | 114/1886 |
| 13 | 10/20 | B | **pré:** B fold | fold | A | 30 | 124/1876 |
| 14 | 10/20 | A | **pré:** A raise (all-in) 124 B call | showdown — A: Par de 10; B: Carta alta (Rei) | A | 248 | 248/1752 |
| 15 | 10/20 | B | **pré:** B raise 55 A call **flop:** A bet 70 B call **turn:** A bet (all-in) 123 B call | showdown — A: Par de 9; B: Par de 10 | B | 496 | 0/2000 |

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

Placar acumulado: A 5 × 7 B.
