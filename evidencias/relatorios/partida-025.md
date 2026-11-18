# Relatório da partida 25

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 18:58:31.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **A** |
| Mãos jogadas | 11 |
| Nível final de blinds | 2 (10/20) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 90% → 90% |
| Conhecimento de B sobre A | 90% → 90% |
| Acerto das previsões (A / B) | 85% / 62% |
| Evidências (cada evento, decisão e adaptação) | [partida-025.jsonl](partida-025.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **B · mão 3** — Na mão 3 da partida 25, B percebeu que A começou a aumentar mais no pré-flop — aumenta no pré-flop (pfr) foi de 50% (histórico) para 68% (recente); B passou a confiar na leitura recente em vez do histórico.
- **B · mão 8** — Na mão 8 da partida 25, B percebeu que A começou a aumentar mais no pré-flop — aumenta no pré-flop (pfr) foi de 51% (histórico) para 70% (recente); B passou a confiar na leitura recente em vez do histórico.

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 6 | 4 |
| VPIP (entra no pote) | 100% | 100% |
| PFR (aumenta no pré-flop) | 73% | 27% |
| Agressão (bet+raise / bet+raise+call) | 71% | 29% |
| Desiste diante de aposta | 0% | 14% |
| Blefes (sucesso) | 2 (0%) | 0 (—) |
| Armadilhas | 0 | 0 |
| Showdowns ganhos | 3/8 | 4/8 |
| All-ins | 0 | 1 |
| Maior pote ganho | 1210 | 334 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 75% | 75% | 40% | 40% |
| Frequência de blefe | 0% | 0% | 0% | 0% |
| Roubo após check | 20% | 20% | 0% | 0% |
| Armadilha (induzir) | 10% | 10% | 65% | 65% |
| Margem para pagar | -8% | -8% | -6% | -6% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Valor contra pagador, Corrigir blefes, Pagar o blefador; B: Induzir o agressor, Valor contra pagador, Pagar o blefador, Corrigir blefes.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 14% (n≈139) | 23% (n≈126) |
| Agressão (bet+raise / ações) | 32% (n≈141) | 72% (n≈141) |
| Entra no pote (VPIP) | 87% (n≈131) | 84% (n≈131) |
| Aumenta no pré-flop (PFR) | 28% (n≈131) | 51% (n≈131) |
| Check-raise | 4% (n≈90) | 5% (n≈44) |
| Aposta após meu check | 23% (n≈112) | 50% (n≈122) |
| Blefe revelado no showdown | 36% (n≈42) | 45% (n≈83) |
| Meus blefes que funcionaram | 23% (n≈39) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | A | **pré:** A raise 30 B call **flop:** B check A check **turn:** B check A check **river:** B check A bet 24 B call | showdown — A: Carta alta (Rei); B: Carta alta (Rei) | B | 108 | 946/1054 |
| 2 | 5/10 | B | **pré:** B call A raise 30 B call **flop:** A check B bet 41 A call **turn:** A bet 92 B call **river:** A check B check | showdown — A: Par de Reis; B: Dois pares (Reis e Damas) | B | 326 | 783/1217 |
| 3 | 5/10 | A | **pré:** A raise 30 B call **flop:** B bet 41 A call **turn:** B bet 96 A call **river:** B check A check | showdown — A: Par de 3; B: Par de 5 | B | 334 | 616/1384 |
| 4 | 5/10 | B | **pré:** B call A raise 30 B call **flop:** A bet 39 B call **turn:** A bet 89 B call **river:** A bet 204 B fold | fold | A | 520 | 774/1226 |
| 5 | 5/10 | A | **pré:** A raise 30 B call **flop:** B bet 41 A call **turn:** B check A bet 92 B call **river:** B check A bet 210 B fold | fold | A | 536 | 937/1063 |
| 6 | 5/10 | B | **pré:** B raise 26 A call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de 3; B: Par de 3 | empate | 52 | 937/1063 |
| 7 | 5/10 | A | **pré:** A raise 30 B call **flop:** B check A check **turn:** B check A bet 24 B call **river:** B check A check | showdown — A: Carta alta (Ás); B: Carta alta (Ás) | A | 108 | 991/1009 |
| 8 | 5/10 | B | **pré:** B call A raise 30 B call **flop:** A bet 39 B call **turn:** A bet 89 B fold | fold | A | 227 | 1060/940 |
| 9 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A check **turn:** B check A check **river:** B check A check | showdown — A: Par de Damas; B: Par de Damas | B | 120 | 1000/1000 |
| 10 | 10/20 | B | **pré:** B raise 50 A call **flop:** A bet 65 B call **turn:** A bet 150 B call **river:** A bet 340 B call | showdown — A: Full house (6 com Damas); B: Par de Damas | A | 1210 | 1605/395 |
| 11 | 10/20 | A | **pré:** A call B raise 50 A call **flop:** B bet 70 A call **turn:** B bet 165 A raise 505 B call parcial (all-in) | showdown — A: Sequência até 5; B: Dois pares (Valetes e 3) | A | 790 | 2000/0 |

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

Placar acumulado: A 11 × 14 B.
