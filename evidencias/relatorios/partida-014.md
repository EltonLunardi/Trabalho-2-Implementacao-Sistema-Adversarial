# Relatório da partida 14

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 18:13:50.

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
| Conhecimento de A sobre B | 87% → 87% |
| Conhecimento de B sobre A | 87% → 88% |
| Acerto das previsões (A / B) | 74% / 72% |
| Evidências (cada evento, decisão e adaptação) | [partida-014.jsonl](partida-014.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 1** — Na mão 1 da partida 14, com blinds de 5/10, o menor stack vale 100,0 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 1** — Na mão 1 da partida 14, com blinds de 5/10, o menor stack vale 100,0 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 6 | 5 |
| VPIP (entra no pote) | 82% | 91% |
| PFR (aumenta no pré-flop) | 36% | 36% |
| Agressão (bet+raise / bet+raise+call) | 57% | 52% |
| Desiste diante de aposta | 25% | 31% |
| Blefes (sucesso) | 1 (100%) | 0 (—) |
| Armadilhas | 0 | 1 |
| Showdowns ganhos | 2/4 | 2/4 |
| All-ins | 1 | 0 |
| Maior pote ganho | 216 | 1618 |

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
| Desiste diante de aposta | 17% (n≈124) | 31% (n≈101) |
| Agressão (bet+raise / ações) | 39% (n≈137) | 65% (n≈136) |
| Entra no pote (VPIP) | 80% (n≈109) | 84% (n≈108) |
| Aumenta no pré-flop (PFR) | 26% (n≈109) | 45% (n≈108) |
| Check-raise | 3% (n≈60) | 4% (n≈32) |
| Aposta após meu check | 28% (n≈85) | 53% (n≈92) |
| Blefe revelado no showdown | 41% (n≈20) | 47% (n≈54) |
| Meus blefes que funcionaram | 27% (n≈32) | 32% (n≈8) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B call A check **flop:** A check B check **turn:** A bet 11 B fold | fold | A | 31 | 1010/990 |
| 2 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A check **turn:** B bet 40 A call **river:** B bet 95 A call | showdown — A: Par de 8; B: Par de Damas | B | 328 | 846/1154 |
| 3 | 5/10 | B | **pré:** B raise 27 A call **flop:** A check B check **turn:** A check B check **river:** A bet 34 B call | showdown — A: Dois pares (Valetes e 6); B: Par de 6 | A | 122 | 907/1093 |
| 4 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 37 B call **turn:** B check A bet 84 B fold | fold | A | 216 | 973/1027 |
| 5 | 5/10 | B | **pré:** B raise 27 A call **flop:** A check B bet 37 A call **turn:** A check B bet 88 A fold | fold | B | 216 | 909/1091 |
| 6 | 5/10 | A | **pré:** A call B raise 27 A call **flop:** B bet 37 A fold | fold | B | 91 | 882/1118 |
| 7 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A bet 37 B fold | fold | A | 95 | 911/1089 |
| 8 | 5/10 | A | **pré:** A call B check **flop:** B check A bet 13 B call **turn:** B check A bet 29 B fold | fold | A | 75 | 934/1066 |
| 9 | 10/20 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de Damas; B: Par de Damas | A | 40 | 954/1046 |
| 10 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A check **turn:** B bet 85 A call **river:** B bet 200 A fold | fold | B | 490 | 809/1191 |
| 11 | 10/20 | B | **pré:** B raise 55 A call **flop:** A check B check **turn:** A check B check **river:** A bet 70 B raise 245 A raise (all-in) 754 B call | showdown — A: Par de Damas; B: Sequência até Dama | B | 1618 | 0/2000 |

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

Placar acumulado: A 5 × 9 B.
