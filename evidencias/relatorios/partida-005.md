# Relatório da partida 5

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 17:49:39.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **A** |
| Mãos jogadas | 13 |
| Nível final de blinds | 2 (10/20) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 73% → 76% |
| Conhecimento de B sobre A | 72% → 76% |
| Acerto das previsões (A / B) | 77% / 47% |
| Evidências (cada evento, decisão e adaptação) | [partida-005.jsonl](partida-005.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 1** — Na mão 1 da partida 5, com blinds de 5/10, o menor stack vale 100.0 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 1** — Na mão 1 da partida 5, com blinds de 5/10, o menor stack vale 100.0 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.
- **A · mão 11** — Na mão 11 da partida 5, com blinds de 10/20, o menor stack vale 5.8 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 11** — Na mão 11 da partida 5, com blinds de 10/20, o menor stack vale 5.8 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 7 | 6 |
| VPIP (entra no pote) | 85% | 69% |
| PFR (aumenta no pré-flop) | 31% | 38% |
| Agressão (bet+raise / bet+raise+call) | 64% | 43% |
| Desiste diante de aposta | 38% | 11% |
| Blefes (sucesso) | 2 (0%) | 0 (—) |
| Armadilhas | 0 | 2 |
| Showdowns ganhos | 4/4 | 0/4 |
| All-ins | 1 | 1 |
| Maior pote ganho | 1390 | 419 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 70% | 45% | 45% |
| Frequência de blefe | 3% | 3% | 0% | 0% |
| Roubo após check | 20% | 20% | 5% | 5% |
| Armadilha (induzir) | 5% | 5% | 75% | 75% |
| Margem para pagar | 0% | 0% | -10% | -10% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Valor contra pagador, Corrigir blefes; B: Armadilha contra roubo, Induzir o agressor, Valor contra pagador, Pagar o blefador.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 17% (n≈70) | 32% (n≈46) |
| Agressão (bet+raise / ações) | 39% (n≈92) | 65% (n≈91) |
| Entra no pote (VPIP) | 79% (n≈54) | 82% (n≈53) |
| Aumenta no pré-flop (PFR) | 30% (n≈54) | 42% (n≈53) |
| Check-raise | 2% (n≈23) | 4% (n≈9) |
| Aposta após meu check | 33% (n≈26) | 52% (n≈40) |
| Blefe revelado no showdown | 27% (n≈7) | 44% (n≈21) |
| Meus blefes que funcionaram | 30% (n≈14) | 39% (n≈6) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | A | **pré:** A raise 29 B call **flop:** B bet 40 A call **turn:** B check A bet 55 B call **river:** B bet 171 A fold | fold | B | 419 | 876/1124 |
| 2 | 5/10 | B | **pré:** B raise 27 A call **flop:** A bet 34 B call **turn:** A bet 78 B call **river:** A bet 177 B fold | fold | A | 455 | 1015/985 |
| 3 | 5/10 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A bet 10 B call **river:** B check A check | showdown — A: Dois pares (8 e 7); B: Dois pares (8 e 7) | A | 40 | 1035/965 |
| 4 | 5/10 | B | **pré:** B raise 27 A call **flop:** A check B check **turn:** A check B bet 37 A call **river:** A check B bet 88 A fold | fold | B | 216 | 971/1029 |
| 5 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 37 B call **turn:** B check A bet 84 B fold | fold | A | 216 | 1037/963 |
| 6 | 5/10 | B | **pré:** B raise 27 A call **flop:** A bet 34 B call **turn:** A bet 78 B call **river:** A bet 177 B call | showdown — A: Dois pares (Reis e 3); B: Par de Ases | A | 632 | 1353/647 |
| 7 | 5/10 | A | **pré:** A call B raise 27 A call **flop:** B bet 37 A fold | fold | B | 91 | 1326/674 |
| 8 | 5/10 | B | **pré:** B raise 27 A call **flop:** A check B bet 37 A fold | fold | B | 91 | 1299/701 |
| 9 | 10/20 | A | **pré:** A call B check **flop:** B bet 30 A raise 90 B call **turn:** B bet 150 A fold | fold | B | 370 | 1189/811 |
| 10 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A bet 75 B call **turn:** A bet 170 B call **river:** A bet 390 B call | showdown — A: Par de Damas; B: Par de 8 | A | 1390 | 1884/116 |
| 11 | 10/20 | A | **pré:** A fold | fold | B | 30 | 1874/126 |
| 12 | 10/20 | B | **pré:** B fold | fold | A | 30 | 1884/116 |
| 13 | 10/20 | A | **pré:** A raise (all-in) 1884 B call parcial (all-in) | showdown — A: Dois pares (Damas e Valetes); B: Par de Damas | A | 232 | 2000/0 |

## Aprendizado entre partidas

| Partida | Vencedor | Mãos | Conhecimento A→B | Conhecimento B→A | Acerto A | Acerto B | Adaptações | Maior cadeia |
|---:|---|---:|---:|---:|---:|---:|---:|---:|
| [1](partida-001.md) | B | 11 | 42% | 40% | 45% | 68% | 4 | 2 |
| [2](partida-002.md) | A | 26 | 67% | 64% | 80% | 57% | 3 | 2 |
| [3](partida-003.md) | A | 5 | 68% | 67% | 88% | 40% | 1 | 1 |
| [4](partida-004.md) | B | 14 | 73% | 72% | 89% | 58% | 2 | 3 |
| [5](partida-005.md) | A | 13 | 76% | 76% | 77% | 47% | 0 | 0 |

Placar acumulado: A 3 × 2 B.
