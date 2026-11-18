# Relatório da partida 29

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 19:13:49.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **A** |
| Mãos jogadas | 5 |
| Nível final de blinds | 1 (5/10) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 90% → 90% |
| Conhecimento de B sobre A | 90% → 90% |
| Acerto das previsões (A / B) | 80% / 89% |
| Evidências (cada evento, decisão e adaptação) | [partida-029.jsonl](partida-029.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 1** — Na mão 1 da partida 29, com blinds de 5/10, o menor stack vale 100,0 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 1** — Na mão 1 da partida 29, com blinds de 5/10, o menor stack vale 100,0 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 5 | 0 |
| VPIP (entra no pote) | 100% | 100% |
| PFR (aumenta no pré-flop) | 80% | 20% |
| Agressão (bet+raise / bet+raise+call) | 83% | 19% |
| Desiste diante de aposta | 0% | 20% |
| Blefes (sucesso) | 0 (—) | 0 (—) |
| Armadilhas | 0 | 0 |
| Showdowns ganhos | 2/2 | 0/2 |
| All-ins | 0 | 1 |
| Maior pote ganho | 780 | 0 |

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
| Desiste diante de aposta | 16% (n≈141) | 25% (n≈130) |
| Agressão (bet+raise / ações) | 33% (n≈141) | 70% (n≈141) |
| Entra no pote (VPIP) | 87% (n≈135) | 85% (n≈134) |
| Aumenta no pré-flop (PFR) | 27% (n≈135) | 50% (n≈134) |
| Check-raise | 3% (n≈99) | 4% (n≈51) |
| Aposta após meu check | 24% (n≈119) | 55% (n≈127) |
| Blefe revelado no showdown | 35% (n≈46) | 42% (n≈90) |
| Meus blefes que funcionaram | 24% (n≈44) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | A | **pré:** A raise 30 B call **flop:** B check A bet 39 B call **turn:** B check A bet 89 B fold | fold | A | 227 | 1069/931 |
| 2 | 5/10 | B | **pré:** B call A raise 30 B call **flop:** A bet 39 B call **turn:** A bet 89 B call **river:** A bet 204 B fold | fold | A | 520 | 1227/773 |
| 3 | 5/10 | A | **pré:** A raise 30 B call **flop:** B check A check **turn:** B check A bet 39 B call **river:** B check A bet 89 B fold | fold | A | 227 | 1296/704 |
| 4 | 5/10 | B | **pré:** B raise 26 A call **flop:** A bet 34 B call **turn:** A bet 77 B call **river:** A bet 177 B call | showdown — A: Par de Reis; B: Par de 10 | A | 628 | 1610/390 |
| 5 | 5/10 | A | **pré:** A raise 30 B call **flop:** B bet 41 A call **turn:** B check A bet 92 B call **river:** B bet (all-in) 227 A call | showdown — A: Trinca de 7; B: Dois pares (7 e 4) | A | 780 | 2000/0 |

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
| [29](partida-029.md) | A | 5 | 90% | 90% | 80% | 89% | 0 | 0 |

Placar acumulado: A 14 × 15 B.
