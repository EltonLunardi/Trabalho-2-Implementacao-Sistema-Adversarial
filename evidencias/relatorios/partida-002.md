# Relatório da partida 2

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 17:49:33.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **A** |
| Mãos jogadas | 26 |
| Nível final de blinds | 4 (20/40) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 42% → 67% |
| Conhecimento de B sobre A | 40% → 64% |
| Acerto das previsões (A / B) | 80% / 57% |
| Evidências (cada evento, decisão e adaptação) | [partida-002.jsonl](partida-002.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 1** — A partir da mão 7 da partida 1, quando B passou a dar check com mãos fortes esperando a aposta dele, B começou a pagar mais as apostas. A observou que B desiste diante de 30% das apostas (5/18 recentes). Na mão 1 da partida 2, A cortou blefes e passou a apostar por valor com mãos médias (frequência de blefe 30% → 15%; roubo após check 60% → 40%; limiar de valor 56% → 50%).
- **A · mão 4** — Na mão 4 da partida 2, A observou que B aposta ou aumenta em 39% das suas ações (9/20 recentes); a leitura que motivou essa postura deixou de valer. Em resposta, A abandonou a postura "Respeitar o passivo" (roubo após check 40% → 30%; margem para pagar +7 p.p. → +0 p.p.).
- **B · mão 6** — A partir da mão 8 da partida 1, quando A passou a desistir quando ele aposta e a roubar potes quando ele não aposta, A começou a mostrar mãos fracas depois de apostar (blefes). B observou que A mostrou mão fraca em 47% dos showdowns em que apostou (3/5 recentes). Na mão 6 da partida 2, B passou a pagar apostas com mãos mais fracas (margem para pagar -2 p.p. → -10 p.p.). **[cadeia 2]**
- **A · mão 16** — Na mão 16 da partida 2, com blinds de 10/20, o menor stack vale 7.5 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 16** — Na mão 16 da partida 2, com blinds de 10/20, o menor stack vale 7.5 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).
- **A · mão 22** — Na mão 22 da partida 2, com blinds de 15/30, o menor stack vale 19.5 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 22** — Na mão 22 da partida 2, com blinds de 15/30, o menor stack vale 19.5 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.
- **A · mão 25** — Na mão 25 da partida 2, com blinds de 20/40, o menor stack vale 10.1 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 25** — Na mão 25 da partida 2, com blinds de 20/40, o menor stack vale 10.1 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 15 | 11 |
| VPIP (entra no pote) | 77% | 73% |
| PFR (aumenta no pré-flop) | 42% | 27% |
| Agressão (bet+raise / bet+raise+call) | 73% | 31% |
| Desiste diante de aposta | 43% | 19% |
| Blefes (sucesso) | 5 (20%) | 3 (33%) |
| Armadilhas | 0 | 3 |
| Showdowns ganhos | 7/11 | 4/11 |
| All-ins | 4 | 6 |
| Maior pote ganho | 1708 | 848 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 70% | 45% | 45% |
| Frequência de blefe | 30% | 15% | 0% | 0% |
| Roubo após check | 60% | 30% | 5% | 5% |
| Armadilha (induzir) | 5% | 5% | 75% | 75% |
| Margem para pagar | 7% | 0% | -2% | -10% |
| Limiar de valor | 56% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Valor contra pagador; B: Armadilha contra roubo, Induzir o agressor, Valor contra pagador, Pagar o blefador.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 24% (n≈40) | 34% (n≈20) |
| Agressão (bet+raise / ações) | 33% (n≈54) | 67% (n≈55) |
| Entra no pote (VPIP) | 74% (n≈32) | 77% (n≈31) |
| Aumenta no pré-flop (PFR) | 24% (n≈32) | 40% (n≈31) |
| Check-raise | 2% (n≈16) | 6% (n≈5) |
| Aposta após meu check | 28% (n≈18) | 61% (n≈25) |
| Blefe revelado no showdown | 34% (n≈5) | 48% (n≈11) |
| Meus blefes que funcionaram | 42% (n≈10) | 36% (n≈4) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B raise 27 A call **flop:** A bet 34 B call **turn:** A bet 78 B call **river:** A bet 177 B call | showdown — A: Dois pares (Ases e Reis); B: Dois pares (Ases e 5) | A | 632 | 1316/684 |
| 2 | 5/10 | A | **pré:** A call B raise 27 A fold | fold | B | 37 | 1306/694 |
| 3 | 5/10 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B bet 10 A fold | fold | B | 30 | 1296/704 |
| 4 | 5/10 | A | **pré:** A call B check **flop:** B check A bet 10 B call **turn:** B bet 28 A fold | fold | B | 68 | 1276/724 |
| 5 | 5/10 | B | **pré:** B raise 27 A call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de Reis; B: Par de Reis | A | 54 | 1303/697 |
| 6 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 23 B call **turn:** B check A check **river:** B check A check | showdown — A: Dois pares (10 e 5); B: Full house (5 com 10) | B | 104 | 1251/749 |
| 7 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A check B check **turn:** A bet 32 B fold | fold | A | 90 | 1280/720 |
| 8 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A check **turn:** B check A check **river:** B check A check | showdown — A: Carta alta (Rei); B: Carta alta (10) | A | 58 | 1309/691 |
| 9 | 10/20 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A bet 20 B call | showdown — A: Par de 4; B: Par de 4 | A | 80 | 1349/651 |
| 10 | 10/20 | A | **pré:** A call B check **flop:** B bet 30 A fold | fold | B | 70 | 1329/671 |
| 11 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A check B check **turn:** A check B check **river:** A bet 75 B fold | fold | A | 195 | 1389/611 |
| 12 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A check **turn:** B check A bet 75 B call **river:** B check A bet 170 B fold | fold | A | 440 | 1524/476 |
| 13 | 10/20 | B | **pré:** B raise 55 A call **flop:** A check B bet 45 A call **turn:** A check B check **river:** A bet 125 B call | showdown — A: Dois pares (7 e 2); B: Par de 2 | A | 450 | 1749/251 |
| 14 | 10/20 | A | **pré:** A raise 60 B call **flop:** B bet 85 A call **turn:** B bet (all-in) 106 A fold | fold | B | 396 | 1604/396 |
| 15 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A bet 75 B call **turn:** A check B bet 110 A call **river:** A check B check | showdown — A: Par de 7; B: Par de 7 | A | 490 | 1849/151 |
| 16 | 10/20 | A | **pré:** A fold | fold | B | 30 | 1839/161 |
| 17 | 15/30 | B | **pré:** B fold | fold | A | 45 | 1854/146 |
| 18 | 15/30 | A | **pré:** A raise (all-in) 1854 B call parcial (all-in) | showdown — A: Carta alta (Ás); B: Par de Damas | B | 292 | 1708/292 |
| 19 | 15/30 | B | **pré:** B raise (all-in) 292 A fold | fold | B | 322 | 1678/322 |
| 20 | 15/30 | A | **pré:** A raise (all-in) 1678 B fold | fold | A | 1708 | 1708/292 |
| 21 | 15/30 | B | **pré:** B raise (all-in) 292 A call | showdown — A: Par de 3; B: Dois pares (7 e 3) | B | 584 | 1416/584 |
| 22 | 15/30 | A | **pré:** A call B check **flop:** B check A bet 40 B call **turn:** B check A bet 90 B call **river:** B check A bet 205 B fold | fold | A | 525 | 1576/424 |
| 23 | 15/30 | B | **pré:** B raise 80 A call **flop:** A bet 100 B call **turn:** A bet 230 B call **river:** A bet 520 B call parcial (all-in) | showdown — A: Par de 5; B: Par de Ases | B | 848 | 1152/848 |
| 24 | 15/30 | A | **pré:** A raise 85 B call **flop:** B check A bet 110 B call **turn:** B check A bet 250 B call **river:** B check A bet (all-in) 707 B fold | fold | A | 1597 | 1597/403 |
| 25 | 20/40 | B | **pré:** B fold | fold | A | 60 | 1617/383 |
| 26 | 20/40 | A | **pré:** A raise (all-in) 1617 B call parcial (all-in) | showdown — A: Dois pares (Valetes e 7); B: Par de Valetes | A | 766 | 2000/0 |

## Aprendizado entre partidas

| Partida | Vencedor | Mãos | Conhecimento A→B | Conhecimento B→A | Acerto A | Acerto B | Adaptações | Maior cadeia |
|---:|---|---:|---:|---:|---:|---:|---:|---:|
| [1](partida-001.md) | B | 11 | 42% | 40% | 45% | 68% | 4 | 2 |
| [2](partida-002.md) | A | 26 | 67% | 64% | 80% | 57% | 3 | 2 |

Placar acumulado: A 1 × 1 B.
