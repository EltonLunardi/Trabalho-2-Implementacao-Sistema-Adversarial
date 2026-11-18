# Relatório da partida 26

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 19:03:18.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **B** |
| Mãos jogadas | 17 |
| Nível final de blinds | 3 (15/30) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 90% → 90% |
| Conhecimento de B sobre A | 90% → 90% |
| Acerto das previsões (A / B) | 78% / 59% |
| Evidências (cada evento, decisão e adaptação) | [partida-026.jsonl](partida-026.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 5** — Na mão 5 da partida 26, A observou que B aposta ou aumenta em 30% das suas ações (4/20 recentes). Em resposta, A passou a desistir quando ele aposta e a roubar potes quando ele não aposta (roubo após check 20% → 30%; margem para pagar -8 p.p. → -1 p.p.).
- **A · mão 11** — Na mão 11 da partida 26, com blinds de 10/20, o menor stack vale 9,4 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 11** — Na mão 11 da partida 26, com blinds de 10/20, o menor stack vale 9,4 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).
- **A · mão 13** — Na mão 13 da partida 26, com blinds de 10/20, o menor stack vale 19,9 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 13** — Na mão 13 da partida 26, com blinds de 10/20, o menor stack vale 19,9 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 9 | 8 |
| VPIP (entra no pote) | 82% | 88% |
| PFR (aumenta no pré-flop) | 65% | 12% |
| Agressão (bet+raise / bet+raise+call) | 75% | 28% |
| Desiste diante de aposta | 36% | 15% |
| Blefes (sucesso) | 4 (50%) | 0 (—) |
| Armadilhas | 1 | 1 |
| Showdowns ganhos | 4/8 | 4/8 |
| All-ins | 3 | 1 |
| Maior pote ganho | 724 | 1560 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 75% | 75% | 40% | 40% |
| Frequência de blefe | 0% | 0% | 0% | 0% |
| Roubo após check | 20% | 30% | 0% | 0% |
| Armadilha (induzir) | 10% | 10% | 65% | 65% |
| Margem para pagar | -8% | -1% | -6% | -6% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Valor contra pagador, Corrigir blefes, Pagar o blefador, Respeitar o passivo; B: Induzir o agressor, Valor contra pagador, Pagar o blefador, Corrigir blefes.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 14% (n≈140) | 24% (n≈127) |
| Agressão (bet+raise / ações) | 31% (n≈141) | 72% (n≈141) |
| Entra no pote (VPIP) | 87% (n≈132) | 85% (n≈132) |
| Aumenta no pré-flop (PFR) | 26% (n≈132) | 53% (n≈132) |
| Check-raise | 4% (n≈92) | 4% (n≈47) |
| Aposta após meu check | 25% (n≈113) | 49% (n≈124) |
| Blefe revelado no showdown | 34% (n≈43) | 44% (n≈86) |
| Meus blefes que funcionaram | 26% (n≈42) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B call A raise 30 B call **flop:** A bet 39 B call **turn:** A bet 89 B call **river:** A bet 204 B call | showdown — A: Dois pares (6 e 4); B: Par de 6 | A | 724 | 1362/638 |
| 2 | 5/10 | A | **pré:** A call B check **flop:** B check A bet 13 B call **turn:** B check A bet 18 B call **river:** B check A bet 53 B fold | fold | A | 135 | 1403/597 |
| 3 | 5/10 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B bet 14 A fold | fold | B | 34 | 1393/607 |
| 4 | 5/10 | A | **pré:** A raise 30 B call **flop:** B check A check **turn:** B check A bet 24 B fold | fold | A | 84 | 1423/577 |
| 5 | 5/10 | B | **pré:** B call A raise 30 B call **flop:** A check B check **turn:** A check B check **river:** A bet 39 B call | showdown — A: Par de 10; B: Carta alta (Rei) | A | 138 | 1492/508 |
| 6 | 5/10 | A | **pré:** A raise 30 B call **flop:** B check A check **turn:** B check A check **river:** B check A check | showdown — A: Par de Damas; B: Par de Damas | A | 60 | 1522/478 |
| 7 | 5/10 | B | **pré:** B call A raise 30 B call **flop:** A bet 39 B call **turn:** A check B check **river:** A bet 89 B raise (all-in) 409 A call | showdown — A: Par de Ases; B: Sequência até 10 | B | 956 | 1044/956 |
| 8 | 5/10 | A | **pré:** A raise 30 B call **flop:** B check A check **turn:** B check A check **river:** B check A check | showdown — A: Carta alta (Ás); B: Par de 2 | B | 60 | 1014/986 |
| 9 | 10/20 | B | **pré:** B call A check **flop:** A check B bet 25 A call **turn:** A check B bet 60 A fold | fold | B | 150 | 969/1031 |
| 10 | 10/20 | A | **pré:** A raise 60 B call **flop:** B bet 80 A call **turn:** B bet 190 A call **river:** B bet 450 A call | showdown — A: Dois pares (Valetes e 7); B: Dois pares (Valetes e 7) | B | 1560 | 189/1811 |
| 11 | 10/20 | B | **pré:** B fold | fold | A | 30 | 199/1801 |
| 12 | 10/20 | A | **pré:** A raise (all-in) 199 B call | showdown — A: Dois pares (Ases e 6); B: Dois pares (6 e 3) | A | 398 | 398/1602 |
| 13 | 10/20 | B | **pré:** B raise 50 A call **flop:** A check B bet 70 A fold | fold | B | 170 | 348/1652 |
| 14 | 10/20 | A | **pré:** A call B raise 50 A call **flop:** B check A check **turn:** B check A check **river:** B bet 70 A fold | fold | B | 170 | 298/1702 |
| 15 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A bet 75 B call **turn:** A bet (all-in) 163 B fold | fold | A | 433 | 433/1567 |
| 16 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 50 B call **turn:** B check A check **river:** B check A bet 90 B fold | fold | A | 310 | 543/1457 |
| 17 | 15/30 | B | **pré:** B call A raise 90 B call **flop:** A bet 115 B call **turn:** A bet (all-in) 338 B call | showdown — A: Dois pares (Ases e 10); B: Full house (Ases com 4) | B | 1086 | 0/2000 |

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

Placar acumulado: A 11 × 15 B.
