# Relatório da partida 3

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 17:49:34.

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
| Conhecimento de A sobre B | 67% → 68% |
| Conhecimento de B sobre A | 64% → 67% |
| Acerto das previsões (A / B) | 88% / 40% |
| Evidências (cada evento, decisão e adaptação) | [partida-003.jsonl](partida-003.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 1** — Na mão 1 da partida 3, com blinds de 5/10, o menor stack vale 100.0 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 1** — Na mão 1 da partida 3, com blinds de 5/10, o menor stack vale 100.0 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.
- **A · mão 3** — A partir da mão 1, quando B saiu do modo push/fold e voltou a jogar todas as etapas, B começou a jogar de forma mais passiva. A observou que B aposta ou aumenta em 30% das suas ações (4/20 recentes). Na mão 3 da partida 3, A passou a desistir quando ele aposta e a roubar potes quando ele não aposta (roubo após check 30% → 40%; margem para pagar +0 p.p. → +7 p.p.).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 3 | 2 |
| VPIP (entra no pote) | 80% | 80% |
| PFR (aumenta no pré-flop) | 60% | 20% |
| Agressão (bet+raise / bet+raise+call) | 80% | 27% |
| Desiste diante de aposta | 33% | 13% |
| Blefes (sucesso) | 1 (0%) | 0 (—) |
| Armadilhas | 0 | 3 |
| Showdowns ganhos | 2/3 | 1/3 |
| All-ins | 1 | 1 |
| Maior pote ganho | 1870 | 40 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 70% | 45% | 45% |
| Frequência de blefe | 15% | 15% | 0% | 0% |
| Roubo após check | 30% | 40% | 5% | 5% |
| Armadilha (induzir) | 5% | 5% | 75% | 75% |
| Margem para pagar | 0% | 7% | -10% | -10% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Valor contra pagador, Respeitar o passivo; B: Armadilha contra roubo, Induzir o agressor, Valor contra pagador, Pagar o blefador.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 23% (n≈46) | 34% (n≈23) |
| Agressão (bet+raise / ações) | 32% (n≈61) | 69% (n≈61) |
| Entra no pote (VPIP) | 75% (n≈36) | 77% (n≈35) |
| Aumenta no pré-flop (PFR) | 23% (n≈36) | 43% (n≈35) |
| Check-raise | 2% (n≈18) | 6% (n≈5) |
| Aposta após meu check | 28% (n≈18) | 54% (n≈30) |
| Blefe revelado no showdown | 34% (n≈5) | 51% (n≈13) |
| Meus blefes que funcionaram | 39% (n≈11) | 36% (n≈4) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | A | **pré:** A call B check **flop:** B check A bet 10 B call **turn:** B check A check **river:** B check A check | showdown — A: Par de Valetes; B: Trinca de Valetes | B | 40 | 980/1020 |
| 2 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A bet 37 B call **turn:** A bet 84 B fold | fold | A | 216 | 1046/954 |
| 3 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A check **turn:** B check A check **river:** B check A check | showdown — A: Par de 6; B: Par de 6 | A | 58 | 1075/925 |
| 4 | 5/10 | B | **pré:** B raise 27 A fold | fold | B | 37 | 1065/935 |
| 5 | 5/10 | A | **pré:** A raise 29 B call **flop:** B bet 40 A call **turn:** B check A bet 88 B call **river:** B bet 217 A raise (all-in) 908 B call parcial (all-in) | showdown — A: Sequência até Rei; B: Par de 9 | A | 1870 | 2000/0 |

## Aprendizado entre partidas

| Partida | Vencedor | Mãos | Conhecimento A→B | Conhecimento B→A | Acerto A | Acerto B | Adaptações | Maior cadeia |
|---:|---|---:|---:|---:|---:|---:|---:|---:|
| [1](partida-001.md) | B | 11 | 42% | 40% | 45% | 68% | 4 | 2 |
| [2](partida-002.md) | A | 26 | 67% | 64% | 80% | 57% | 3 | 2 |
| [3](partida-003.md) | A | 5 | 68% | 67% | 88% | 40% | 1 | 1 |

Placar acumulado: A 2 × 1 B.
