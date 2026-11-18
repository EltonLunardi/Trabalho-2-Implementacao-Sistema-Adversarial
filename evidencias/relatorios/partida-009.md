# Relatório da partida 9

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 17:55:27.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **A** |
| Mãos jogadas | 1 |
| Nível final de blinds | 1 (5/10) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 84% → 84% |
| Conhecimento de B sobre A | 85% → 85% |
| Acerto das previsões (A / B) | 100% / 100% |
| Evidências (cada evento, decisão e adaptação) | [partida-009.jsonl](partida-009.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

_Nenhuma adaptação nesta partida._

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 1 | 0 |
| VPIP (entra no pote) | 100% | 100% |
| PFR (aumenta no pré-flop) | 100% | 0% |
| Agressão (bet+raise / bet+raise+call) | 100% | 40% |
| Desiste diante de aposta | 0% | 0% |
| Blefes (sucesso) | 0 (—) | 0 (—) |
| Armadilhas | 1 | 0 |
| Showdowns ganhos | 1/1 | 0/1 |
| All-ins | 1 | 1 |
| Maior pote ganho | 2000 | 0 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 70% | 45% | 45% |
| Frequência de blefe | 3% | 3% | 0% | 0% |
| Roubo após check | 20% | 20% | 5% | 5% |
| Armadilha (induzir) | 5% | 5% | 55% | 55% |
| Margem para pagar | 0% | 0% | -6% | -6% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Valor contra pagador, Corrigir blefes; B: Induzir o agressor, Valor contra pagador, Pagar o blefador.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 16% (n≈106) | 34% (n≈79) |
| Agressão (bet+raise / ações) | 38% (n≈126) | 66% (n≈124) |
| Entra no pote (VPIP) | 77% (n≈90) | 84% (n≈89) |
| Aumenta no pré-flop (PFR) | 28% (n≈90) | 43% (n≈89) |
| Check-raise | 3% (n≈42) | 2% (n≈22) |
| Aposta após meu check | 29% (n≈63) | 43% (n≈77) |
| Blefe revelado no showdown | 36% (n≈12) | 48% (n≈41) |
| Meus blefes que funcionaram | 25% (n≈21) | 35% (n≈7) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A check **turn:** B bet 40 A raise 123 B call **river:** B bet 210 A raise (all-in) 848 B call (all-in) | showdown — A: Dois pares (Damas e 2); B: Par de 9 | A | 2000 | 2000/0 |

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

Placar acumulado: A 5 × 4 B.
