# Relatório da partida 1

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 17:49:29.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **B** |
| Mãos jogadas | 11 |
| Nível final de blinds | 2 (10/20) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 0% → 42% |
| Conhecimento de B sobre A | 0% → 40% |
| Acerto das previsões (A / B) | 45% / 68% |
| Evidências (cada evento, decisão e adaptação) | [partida-001.jsonl](partida-001.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **B · mão 7** — Na mão 7 da partida 1, B observou que A aposta em 60% das vezes depois do check de B (6/9 recentes). Em resposta, B passou a dar check com mãos fortes esperando a aposta dele (armadilha (induzir) 30% → 50%; margem para pagar +2 p.p. → -2 p.p.).
- **A · mão 8** — A partir da mão 7, quando B passou a dar check com mãos fortes esperando a aposta dele, B começou a jogar de forma mais passiva. A observou que B aposta ou aumenta em 25% das suas ações (3/14 recentes). Na mão 8 da partida 1, A passou a desistir quando ele aposta e a roubar potes quando ele não aposta (roubo após check 50% → 60%; margem para pagar +0 p.p. → +7 p.p.).
- **B · mão 8** — A partir da mão 8, quando A passou a desistir quando ele aposta e a roubar potes quando ele não aposta, A começou a apostar e aumentar com mais frequência. B observou que A aposta ou aumenta em 61% das suas ações (12/19 recentes). Na mão 8 da partida 1, B passou a dar check e pagar com mãos fortes para induzir apostas (agressividade 55% → 45%; armadilha (induzir) 50% → 75%). **[cadeia 2]**
- **B · mão 11** — Na mão 11 da partida 1, B observou que A desiste diante de 22% das apostas (1/8 recentes). Em resposta, B cortou blefes e passou a apostar por valor com mãos médias (frequência de blefe 8% → 0%; roubo após check 25% → 5%; limiar de valor 60% → 54%).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 6 | 5 |
| VPIP (entra no pote) | 64% | 73% |
| PFR (aumenta no pré-flop) | 27% | 9% |
| Agressão (bet+raise / bet+raise+call) | 58% | 35% |
| Desiste diante de aposta | 13% | 33% |
| Blefes (sucesso) | 5 (60%) | 1 (0%) |
| Armadilhas | 1 | 3 |
| Showdowns ganhos | 1/5 | 4/5 |
| All-ins | 1 | 0 |
| Maior pote ganho | 236 | 1420 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 70% | 55% | 45% |
| Frequência de blefe | 30% | 30% | 8% | 0% |
| Roubo após check | 50% | 60% | 25% | 5% |
| Armadilha (induzir) | 5% | 5% | 30% | 75% |
| Margem para pagar | 0% | 7% | 2% | -2% |
| Limiar de valor | 56% | 56% | 60% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Respeitar o passivo; B: Armadilha contra roubo, Induzir o agressor, Valor contra pagador.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 35% (n≈14) | 22% (n≈8) |
| Agressão (bet+raise / ações) | 36% (n≈21) | 56% (n≈24) |
| Entra no pote (VPIP) | 72% (n≈11) | 65% (n≈11) |
| Aumenta no pré-flop (PFR) | 15% (n≈11) | 29% (n≈11) |
| Check-raise | 5% (n≈7) | 9% (n≈2) |
| Aposta após meu check | 40% (n≈5) | 59% (n≈11) |
| Blefe revelado no showdown | 15% (n≈2) | 46% (n≈3) |
| Meus blefes que funcionaram | 56% (n≈5) | 38% (n≈1) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A check **river:** B check A bet 10 B fold | fold | A | 30 | 1010/990 |
| 2 | 5/10 | B | **pré:** B call A check **flop:** A check B bet 10 A call **turn:** A bet 22 B fold | fold | A | 62 | 1030/970 |
| 3 | 5/10 | A | **pré:** A call B raise 28 A call **flop:** B bet 40 A call **turn:** B check A bet 54 B call **river:** B check A check | showdown — A: Carta alta (Ás); B: Par de Reis | B | 244 | 908/1092 |
| 4 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de 10; B: Dois pares (10 e 2) | B | 58 | 879/1121 |
| 5 | 5/10 | A | **pré:** A call B check **flop:** B check A bet 10 B call **turn:** B check A bet 16 B fold | fold | A | 56 | 899/1101 |
| 6 | 5/10 | B | **pré:** B call A check **flop:** A bet 13 B fold | fold | A | 33 | 909/1091 |
| 7 | 5/10 | A | **pré:** A call B check **flop:** B check A bet 13 B call **turn:** B check A bet 29 B fold | fold | A | 75 | 932/1068 |
| 8 | 5/10 | B | **pré:** B call A check **flop:** A bet 13 B call **turn:** A bet 29 B call **river:** A bet 66 B call | showdown — A: Par de Reis; B: Par de Valetes | A | 236 | 1050/950 |
| 9 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A check **turn:** B check A bet 75 B call **river:** B bet 185 A call | showdown — A: Par de Damas; B: Par de Ases | B | 640 | 730/1270 |
| 10 | 10/20 | B | **pré:** B call A check **flop:** A check B bet 30 A fold | fold | B | 70 | 710/1290 |
| 11 | 10/20 | A | **pré:** A raise 60 B call **flop:** B bet 85 A call **turn:** B bet 200 A call **river:** B bet 475 A call parcial (all-in) | showdown — A: Dois pares (Ases e 10); B: Full house (10 com 3) | B | 1420 | 0/2000 |

## Aprendizado entre partidas

| Partida | Vencedor | Mãos | Conhecimento A→B | Conhecimento B→A | Acerto A | Acerto B | Adaptações | Maior cadeia |
|---:|---|---:|---:|---:|---:|---:|---:|---:|
| [1](partida-001.md) | B | 11 | 42% | 40% | 45% | 68% | 4 | 2 |

Placar acumulado: A 0 × 1 B.
