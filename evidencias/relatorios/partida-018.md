# Relatório da partida 18

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 18:21:46.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **B** |
| Mãos jogadas | 4 |
| Nível final de blinds | 1 (5/10) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 88% → 88% |
| Conhecimento de B sobre A | 88% → 88% |
| Acerto das previsões (A / B) | 100% / 100% |
| Evidências (cada evento, decisão e adaptação) | [partida-018.jsonl](partida-018.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 3** — Na mão 3 da partida 18, com blinds de 5/10, o menor stack vale 4,6 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 3** — Na mão 3 da partida 18, com blinds de 5/10, o menor stack vale 4,6 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 2 | 2 |
| VPIP (entra no pote) | 50% | 75% |
| PFR (aumenta no pré-flop) | 50% | 0% |
| Agressão (bet+raise / bet+raise+call) | 100% | 13% |
| Desiste diante de aposta | 0% | 0% |
| Blefes (sucesso) | 0 (—) | 0 (—) |
| Armadilhas | 0 | 0 |
| Showdowns ganhos | 1/3 | 2/3 |
| All-ins | 2 | 1 |
| Maior pote ganho | 46 | 1954 |

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
| Desiste diante de aposta | 13% (n≈129) | 27% (n≈109) |
| Agressão (bet+raise / ações) | 40% (n≈139) | 65% (n≈139) |
| Entra no pote (VPIP) | 82% (n≈115) | 83% (n≈114) |
| Aumenta no pré-flop (PFR) | 30% (n≈115) | 45% (n≈114) |
| Check-raise | 6% (n≈65) | 4% (n≈33) |
| Aposta após meu check | 27% (n≈89) | 52% (n≈98) |
| Blefe revelado no showdown | 38% (n≈26) | 44% (n≈61) |
| Meus blefes que funcionaram | 26% (n≈33) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A bet 13 B call | showdown — A: Dois pares (Reis e 10); B: Par de Reis | A | 46 | 1023/977 |
| 2 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 37 B call **turn:** B check A bet 84 B call **river:** B bet 207 A raise (all-in) 873 B call parcial (all-in) | showdown — A: Trinca de Damas; B: Flush (Dama alto) | B | 1954 | 46/1954 |
| 3 | 5/10 | B | **pré:** B fold | fold | A | 15 | 51/1949 |
| 4 | 5/10 | A | **pré:** A raise (all-in) 51 B call | showdown — A: Par de 6; B: Dois pares (9 e 6) | B | 102 | 0/2000 |

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

Placar acumulado: A 7 × 11 B.
