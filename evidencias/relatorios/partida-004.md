# Relatório da partida 4

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 17:49:37.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **B** |
| Mãos jogadas | 14 |
| Nível final de blinds | 2 (10/20) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 68% → 73% |
| Conhecimento de B sobre A | 67% → 72% |
| Acerto das previsões (A / B) | 89% / 58% |
| Evidências (cada evento, decisão e adaptação) | [partida-004.jsonl](partida-004.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 4** — A partir da mão 6 da partida 2, quando B passou a pagar apostas com mãos mais fracas, B começou a pagar os blefes. A observou que os blefes de A funcionam em 34% das vezes (4/13 recentes). Na mão 4 da partida 4, A reduziu os próprios blefes (frequência de blefe 15% → 3%; roubo após check 40% → 30%). **[cadeia 3]**
- **A · mão 13** — Na mão 13 da partida 4, com blinds de 10/20, o menor stack vale 7.5 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 13** — Na mão 13 da partida 4, com blinds de 10/20, o menor stack vale 7.5 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).
- **A · mão 13** — A partir da mão 13, quando B entrou em modo push/fold (all-in ou desistência no pré-flop), B começou a apostar e aumentar com mais frequência. A observou que B aposta ou aumenta em 38% das suas ações (11/20 recentes); a leitura que motivou essa postura deixou de valer. Na mão 13 da partida 4, A abandonou a postura "Respeitar o passivo" (roubo após check 30% → 20%; margem para pagar +7 p.p. → +0 p.p.).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 6 | 8 |
| VPIP (entra no pote) | 86% | 93% |
| PFR (aumenta no pré-flop) | 50% | 36% |
| Agressão (bet+raise / bet+raise+call) | 61% | 45% |
| Desiste diante de aposta | 24% | 9% |
| Blefes (sucesso) | 2 (0%) | 2 (50%) |
| Armadilhas | 1 | 2 |
| Showdowns ganhos | 4/8 | 4/8 |
| All-ins | 2 | 2 |
| Maior pote ganho | 668 | 1871 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 70% | 45% | 45% |
| Frequência de blefe | 15% | 3% | 0% | 0% |
| Roubo após check | 40% | 20% | 5% | 5% |
| Armadilha (induzir) | 5% | 5% | 75% | 75% |
| Margem para pagar | 7% | 0% | -10% | -10% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Valor contra pagador, Corrigir blefes; B: Armadilha contra roubo, Induzir o agressor, Valor contra pagador, Pagar o blefador.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 18% (n≈60) | 30% (n≈36) |
| Agressão (bet+raise / ações) | 38% (n≈80) | 66% (n≈80) |
| Entra no pote (VPIP) | 80% (n≈46) | 80% (n≈45) |
| Aumenta no pré-flop (PFR) | 27% (n≈46) | 45% (n≈45) |
| Check-raise | 2% (n≈20) | 5% (n≈6) |
| Aposta após meu check | 27% (n≈22) | 50% (n≈36) |
| Blefe revelado no showdown | 27% (n≈7) | 48% (n≈18) |
| Meus blefes que funcionaram | 34% (n≈12) | 39% (n≈6) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A check B bet 23 A call **turn:** A bet 66 B call **river:** A bet 150 B fold | fold | A | 386 | 1118/882 |
| 2 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A check **turn:** B check A check **river:** B check A check | showdown — A: Par de Ases; B: Par de Ases | A | 58 | 1147/853 |
| 3 | 5/10 | B | **pré:** B raise 27 A call **flop:** A bet 34 B call **turn:** A bet 78 B call **river:** A bet 177 B call | showdown — A: Par de Ases; B: Par de Ases | A | 632 | 1463/537 |
| 4 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 23 B call **turn:** B check A bet 42 B call **river:** B bet 130 A call | showdown — A: Par de 7; B: Dois pares (Ases e 7) | B | 448 | 1239/761 |
| 5 | 5/10 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de 6; B: Par de 6 | A | 20 | 1249/751 |
| 6 | 5/10 | A | **pré:** A call B raise 27 A call **flop:** B check A check **turn:** B bet 37 A call **river:** B bet 88 A raise 270 B call | showdown — A: Sequência até Ás; B: Par de 9 | A | 668 | 1583/417 |
| 7 | 5/10 | B | **pré:** B raise 27 A call **flop:** A bet 34 B call **turn:** A bet 78 B call **river:** A bet 177 B call | showdown — A: Flush (Dama alto); B: Flush (Dama alto) | B | 632 | 1267/733 |
| 8 | 5/10 | A | **pré:** A call B check **flop:** B check A check **turn:** B bet 14 A fold | fold | B | 34 | 1257/743 |
| 9 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A bet 75 B raise 265 A call **turn:** A bet 415 B raise incompleto (all-in) 418 A call | showdown — A: Par de 10; B: Flush (Ás alto) | B | 1486 | 514/1486 |
| 10 | 10/20 | A | **pré:** A raise 60 B call **flop:** B bet 85 A call **turn:** B bet 200 A fold | fold | B | 490 | 369/1631 |
| 11 | 10/20 | B | **pré:** B raise 55 A call **flop:** A bet 70 B call **turn:** A check B check **river:** A bet (all-in) 244 B fold | fold | A | 494 | 494/1506 |
| 12 | 10/20 | A | **pré:** A raise 60 B call **flop:** B bet 85 A call **turn:** B bet 200 A call **river:** B bet 475 A fold | fold | B | 1165 | 149/1851 |
| 13 | 10/20 | B | **pré:** B raise (all-in) 1851 A fold | fold | B | 1871 | 129/1871 |
| 14 | 10/20 | A | **pré:** A raise (all-in) 129 B call | showdown — A: Trinca de 7; B: Quadra de 7 | B | 258 | 0/2000 |

## Aprendizado entre partidas

| Partida | Vencedor | Mãos | Conhecimento A→B | Conhecimento B→A | Acerto A | Acerto B | Adaptações | Maior cadeia |
|---:|---|---:|---:|---:|---:|---:|---:|---:|
| [1](partida-001.md) | B | 11 | 42% | 40% | 45% | 68% | 4 | 2 |
| [2](partida-002.md) | A | 26 | 67% | 64% | 80% | 57% | 3 | 2 |
| [3](partida-003.md) | A | 5 | 68% | 67% | 88% | 40% | 1 | 1 |
| [4](partida-004.md) | B | 14 | 73% | 72% | 89% | 58% | 2 | 3 |

Placar acumulado: A 2 × 2 B.
