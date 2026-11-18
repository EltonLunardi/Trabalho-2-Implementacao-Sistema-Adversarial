# Relatório da partida 32

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 19:27:27.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **A** |
| Mãos jogadas | 16 |
| Nível final de blinds | 2 (10/20) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 91% → 91% |
| Conhecimento de B sobre A | 90% → 91% |
| Acerto das previsões (A / B) | 72% / 52% |
| Evidências (cada evento, decisão e adaptação) | [partida-032.jsonl](partida-032.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 1** — Na mão 1 da partida 32, com blinds de 5/10, o menor stack vale 100,0 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 1** — Na mão 1 da partida 32, com blinds de 5/10, o menor stack vale 100,0 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.
- **A · mão 2** — Antes da mão 2 da partida 32, o treinador Llama de A revisou a partida anterior e ajustou a política base (llama3.1:8b, 9.8 s) (agressividade 75% → 70%; roubo após check 30% → 35%). Justificativa: “A partir da análise da partida, percebe-se que o agente A foi muito agressivo, o que pode ter contribuído para a perda de algumas mãos. Além disso, a frequência de blefe foi baixa, o que pode ter permitido que o oponente blefe com mais frequência. Por fim, a frequência de roubo foi baixa, o que pode ter permitido que o oponente roube com mais frequência. Portanto, os ajustes propostos visam reduzir a agressividade e aumentar a frequência de blefe e roubo.”

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 6 | 10 |
| VPIP (entra no pote) | 81% | 75% |
| PFR (aumenta no pré-flop) | 31% | 25% |
| Agressão (bet+raise / bet+raise+call) | 59% | 47% |
| Desiste diante de aposta | 47% | 21% |
| Blefes (sucesso) | 4 (25%) | 0 (—) |
| Armadilhas | 0 | 5 |
| Showdowns ganhos | 2/4 | 2/4 |
| All-ins | 0 | 1 |
| Maior pote ganho | 1924 | 228 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 75% | 70% | 40% | 40% |
| Frequência de blefe | 0% | 0% | 0% | 0% |
| Roubo após check | 30% | 35% | 0% | 0% |
| Armadilha (induzir) | 10% | 10% | 65% | 65% |
| Margem para pagar | -1% | -1% | -6% | -6% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Valor contra pagador, Corrigir blefes, Pagar o blefador, Respeitar o passivo; B: Induzir o agressor, Valor contra pagador, Pagar o blefador, Corrigir blefes.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 17% (n≈141) | 27% (n≈133) |
| Agressão (bet+raise / ações) | 35% (n≈141) | 68% (n≈141) |
| Entra no pote (VPIP) | 84% (n≈137) | 85% (n≈137) |
| Aumenta no pré-flop (PFR) | 26% (n≈137) | 49% (n≈137) |
| Check-raise | 3% (n≈106) | 6% (n≈59) |
| Aposta após meu check | 28% (n≈124) | 58% (n≈131) |
| Blefe revelado no showdown | 33% (n≈50) | 42% (n≈95) |
| Meus blefes que funcionaram | 25% (n≈48) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B call A check **flop:** A bet 13 B fold | fold | A | 33 | 1010/990 |
| 2 | 5/10 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A check **river:** B check A bet 10 B call | showdown — A: Par de 4; B: Par de 4 | B | 40 | 990/1010 |
| 3 | 5/10 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B bet 14 A fold | fold | B | 34 | 980/1020 |
| 4 | 5/10 | A | **pré:** A call B check **flop:** B bet 14 A fold | fold | B | 34 | 970/1030 |
| 5 | 5/10 | B | **pré:** B call A check **flop:** A bet 13 B call **turn:** A bet 29 B call **river:** A bet 66 B fold | fold | A | 170 | 1022/978 |
| 6 | 5/10 | A | **pré:** A call B raise 26 A call **flop:** B bet 35 A call **turn:** B bet 83 A fold | fold | B | 205 | 961/1039 |
| 7 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A bet 37 B call **turn:** A bet 84 B call **river:** A check B check | showdown — A: Par de Damas; B: Par de Damas | A | 300 | 1111/889 |
| 8 | 5/10 | A | **pré:** A raise 29 B call **flop:** B bet 39 A call **turn:** B bet 92 A fold | fold | B | 228 | 1043/957 |
| 9 | 10/20 | B | **pré:** B raise 50 A call **flop:** A check B check **turn:** A check B check **river:** A check B bet 70 A fold | fold | B | 170 | 993/1007 |
| 10 | 10/20 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A bet 20 B call **river:** B check A check | showdown — A: Carta alta (Ás); B: Carta alta (Ás) | B | 80 | 953/1047 |
| 11 | 10/20 | B | **pré:** B raise 50 A call **flop:** A check B bet 70 A fold | fold | B | 170 | 903/1097 |
| 12 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 50 B call **turn:** B check A check **river:** B check A bet 90 B fold | fold | A | 310 | 1013/987 |
| 13 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A bet 75 B call **turn:** A bet 170 B fold | fold | A | 440 | 1148/852 |
| 14 | 10/20 | A | **pré:** A raise 60 B call **flop:** B bet 80 A fold | fold | B | 200 | 1088/912 |
| 15 | 10/20 | B | **pré:** B raise 50 A call **flop:** A check B check **turn:** A check B check **river:** A check B bet 70 A fold | fold | B | 170 | 1038/962 |
| 16 | 10/20 | A | **pré:** A call B check **flop:** B check A bet 25 B call **turn:** B bet 60 A call **river:** B bet 145 A raise 445 B raise (all-in) 857 A call | showdown — A: Flush (Ás alto); B: Sequência até 5 | A | 1924 | 2000/0 |

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

Placar acumulado: A 17 × 15 B.
