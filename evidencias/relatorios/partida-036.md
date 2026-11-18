# Relatório da partida 36

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 19:41:30.

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
| Conhecimento de A sobre B | 91% → 91% |
| Conhecimento de B sobre A | 91% → 91% |
| Acerto das previsões (A / B) | 81% / 44% |
| Evidências (cada evento, decisão e adaptação) | [partida-036.jsonl](partida-036.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 1** — Na mão 1 da partida 36, com blinds de 5/10, o menor stack vale 100,0 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 1** — Na mão 1 da partida 36, com blinds de 5/10, o menor stack vale 100,0 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 7 | 4 |
| VPIP (entra no pote) | 91% | 91% |
| PFR (aumenta no pré-flop) | 55% | 27% |
| Agressão (bet+raise / bet+raise+call) | 71% | 27% |
| Desiste diante de aposta | 50% | 20% |
| Blefes (sucesso) | 0 (—) | 0 (—) |
| Armadilhas | 0 | 5 |
| Showdowns ganhos | 3/3 | 0/3 |
| All-ins | 0 | 1 |
| Maior pote ganho | 1000 | 170 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 70% | 40% | 40% |
| Frequência de blefe | 0% | 0% | 0% | 0% |
| Roubo após check | 35% | 35% | 0% | 0% |
| Armadilha (induzir) | 10% | 10% | 65% | 65% |
| Margem para pagar | -1% | -1% | -6% | -6% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Valor contra pagador, Corrigir blefes, Pagar o blefador, Respeitar o passivo; B: Induzir o agressor, Valor contra pagador, Pagar o blefador, Corrigir blefes.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 17% (n≈141) | 29% (n≈135) |
| Agressão (bet+raise / ações) | 34% (n≈141) | 69% (n≈141) |
| Entra no pote (VPIP) | 84% (n≈139) | 85% (n≈139) |
| Aumenta no pré-flop (PFR) | 26% (n≈139) | 47% (n≈139) |
| Check-raise | 3% (n≈111) | 5% (n≈64) |
| Aposta após meu check | 30% (n≈127) | 57% (n≈133) |
| Blefe revelado no showdown | 36% (n≈55) | 42% (n≈100) |
| Meus blefes que funcionaram | 25% (n≈54) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A bet 37 B call **turn:** A bet 84 B fold | fold | A | 216 | 1066/934 |
| 2 | 5/10 | A | **pré:** A call B check **flop:** B bet 14 A fold | fold | B | 34 | 1056/944 |
| 3 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A bet 37 B call **turn:** A bet 84 B call **river:** A bet 191 B fold | fold | A | 491 | 1206/794 |
| 4 | 5/10 | A | **pré:** A call B raise 26 A call **flop:** B check A check **turn:** B check A bet 33 B call **river:** B check A bet 75 B fold | fold | A | 193 | 1265/735 |
| 5 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de Valetes; B: Par de Valetes | A | 58 | 1294/706 |
| 6 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A check **turn:** B bet 39 A fold | fold | B | 97 | 1265/735 |
| 7 | 5/10 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B bet 14 A fold | fold | B | 34 | 1255/745 |
| 8 | 5/10 | A | **pré:** A call B raise 26 A call **flop:** B check A bet 33 B call **turn:** B check A check **river:** B bet 80 A call | showdown — A: Dois pares (9 e 8); B: Par de 9 | A | 278 | 1394/606 |
| 9 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A bet 75 B call **turn:** A bet 170 B call **river:** A bet 390 B fold | fold | A | 1000 | 1699/301 |
| 10 | 10/20 | A | **pré:** A call B raise 50 A call **flop:** B check A check **turn:** B check A check **river:** B bet 70 A fold | fold | B | 170 | 1649/351 |
| 11 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A bet 75 B call **turn:** A bet 170 B call **river:** A bet 390 B call parcial (all-in) | showdown — A: Sequência até Ás; B: Par de Damas | A | 702 | 2000/0 |

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
| [30](partida-030.md) | A | 17 | 90% | 90% | 76% | 68% | 0 | 0 |
| [31](partida-031.md) | A | 17 | 91% | 90% | 78% | 90% | 0 | 0 |
| [32](partida-032.md) | A | 16 | 91% | 91% | 72% | 52% | 1 | 0 |
| [33](partida-033.md) | A | 21 | 91% | 91% | 71% | 55% | 1 | 0 |
| [34](partida-034.md) | A | 10 | 91% | 91% | 81% | 73% | 0 | 0 |
| [35](partida-035.md) | A | 9 | 91% | 91% | 88% | 88% | 0 | 0 |
| [36](partida-036.md) | A | 11 | 91% | 91% | 81% | 44% | 0 | 0 |

Placar acumulado: A 21 × 15 B.
