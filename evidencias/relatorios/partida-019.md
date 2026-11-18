# Relatório da partida 19

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 18:28:53.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **B** |
| Mãos jogadas | 26 |
| Nível final de blinds | 4 (20/40) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 88% → 89% |
| Conhecimento de B sobre A | 88% → 89% |
| Acerto das previsões (A / B) | 89% / 70% |
| Evidências (cada evento, decisão e adaptação) | [partida-019.jsonl](partida-019.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 1** — Na mão 1 da partida 19, com blinds de 5/10, o menor stack vale 100,0 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 1** — Na mão 1 da partida 19, com blinds de 5/10, o menor stack vale 100,0 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.
- **A · mão 7** — Na mão 7 da partida 19, A percebeu que B começou a jogar de forma mais passiva — agressão (bet+raise / ações) foi de 36% (histórico) para 17% (recente); A passou a confiar na leitura recente em vez do histórico.
- **A · mão 7** — A partir da mão 1, quando B saiu do modo push/fold e voltou a jogar todas as etapas, B começou a jogar de forma mais passiva. A observou que B aposta ou aumenta em 17% das suas ações (2/20 recentes). Na mão 7 da partida 19, A passou a desistir quando ele aposta e a roubar potes quando ele não aposta (roubo após check 20% → 30%; margem para pagar -8 p.p. → -1 p.p.).
- **A · mão 24** — Na mão 24 da partida 19, com blinds de 15/30, o menor stack vale 11,5 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 24** — Na mão 24 da partida 19, com blinds de 15/30, o menor stack vale 11,5 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 8 | 17 |
| VPIP (entra no pote) | 69% | 92% |
| PFR (aumenta no pré-flop) | 46% | 23% |
| Agressão (bet+raise / bet+raise+call) | 74% | 31% |
| Desiste diante de aposta | 40% | 8% |
| Blefes (sucesso) | 0 (—) | 0 (—) |
| Armadilhas | 1 | 6 |
| Showdowns ganhos | 5/14 | 8/14 |
| All-ins | 3 | 5 |
| Maior pote ganho | 1612 | 1686 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 70% | 45% | 45% |
| Frequência de blefe | 3% | 3% | 0% | 0% |
| Roubo após check | 20% | 30% | 0% | 0% |
| Armadilha (induzir) | 5% | 5% | 55% | 55% |
| Margem para pagar | -8% | -1% | -6% | -6% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Valor contra pagador, Corrigir blefes, Pagar o blefador, Respeitar o passivo; B: Induzir o agressor, Valor contra pagador, Pagar o blefador, Corrigir blefes.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 12% (n≈132) | 29% (n≈113) |
| Agressão (bet+raise / ações) | 37% (n≈141) | 68% (n≈140) |
| Entra no pote (VPIP) | 84% (n≈119) | 80% (n≈119) |
| Aumenta no pré-flop (PFR) | 29% (n≈119) | 45% (n≈119) |
| Check-raise | 5% (n≈72) | 4% (n≈36) |
| Aposta após meu check | 26% (n≈94) | 57% (n≈103) |
| Blefe revelado no showdown | 33% (n≈29) | 42% (n≈66) |
| Meus blefes que funcionaram | 26% (n≈33) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 37 B call **turn:** B check A check **river:** B check A check | showdown — A: Par de 7; B: Carta alta (Rei) | A | 132 | 1066/934 |
| 2 | 5/10 | B | **pré:** B call A check **flop:** A bet 13 B call **turn:** A check B check **river:** A check B check | showdown — A: Dois pares (Ases e Damas); B: Dois pares (Ases e Damas) | B | 46 | 1043/957 |
| 3 | 5/10 | A | **pré:** A call B raise 27 A call **flop:** B check A bet 34 B call **turn:** B check A bet 78 B call **river:** B bet 192 A call | showdown — A: Dois pares (5 e 2); B: Dois pares (8 e 2) | B | 662 | 712/1288 |
| 4 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A bet 37 B call **turn:** A bet 84 B call **river:** A bet 191 B call | showdown — A: Flush (Valete alto); B: Dois pares (Valetes e 10) | A | 682 | 1053/947 |
| 5 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 37 B call **turn:** B check A bet 84 B call **river:** B check A bet 191 B fold | fold | A | 491 | 1203/797 |
| 6 | 5/10 | B | **pré:** B call A check **flop:** A bet 13 B call **turn:** A bet 29 B call **river:** A bet 66 B call | showdown — A: Dois pares (Damas e 8); B: Trinca de 8 | B | 236 | 1085/915 |
| 7 | 5/10 | A | **pré:** A raise 29 B call **flop:** B check A bet 37 B fold | fold | A | 95 | 1114/886 |
| 8 | 5/10 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B bet 14 A fold | fold | B | 34 | 1104/896 |
| 9 | 10/20 | A | **pré:** A raise 60 B call **flop:** B bet 85 A call **turn:** B bet 200 A fold | fold | B | 490 | 959/1041 |
| 10 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A bet 75 B call **turn:** A check B check **river:** A check B bet 185 A call | showdown — A: Carta alta (Ás); B: Par de Reis | B | 640 | 639/1361 |
| 11 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 75 B call **turn:** B check A check **river:** B bet 185 A raise (all-in) 504 B call | showdown — A: Par de Damas; B: Par de 9 | A | 1278 | 1278/722 |
| 12 | 10/20 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A bet 25 B call | showdown — A: Dois pares (7 e 4); B: Par de 4 | A | 90 | 1323/677 |
| 13 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 75 B call **turn:** B check A bet 170 B fold | fold | A | 440 | 1458/542 |
| 14 | 10/20 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Flush (Dama alto); B: Flush (Dama alto) | empate | 40 | 1458/542 |
| 15 | 10/20 | A | **pré:** A call B raise 55 A call **flop:** B bet 75 A fold | fold | B | 185 | 1403/597 |
| 16 | 10/20 | B | **pré:** B raise 55 A call **flop:** A bet 70 B call **turn:** A bet 160 B call **river:** A bet 365 B call parcial (all-in) | showdown — A: Par de Reis; B: Dois pares (Ases e 5) | B | 1194 | 806/1194 |
| 17 | 15/30 | A | **pré:** A raise 85 B call **flop:** B check A bet 110 B call **turn:** B check A bet 250 B call **river:** B check A bet (all-in) 361 B call | showdown — A: Sequência até 8; B: Par de 8 | A | 1612 | 1612/388 |
| 18 | 15/30 | B | **pré:** B raise 80 A call **flop:** A check B bet 110 A fold | fold | B | 270 | 1532/468 |
| 19 | 15/30 | A | **pré:** A call B check **flop:** B bet 40 A call **turn:** B bet 95 A fold | fold | B | 235 | 1462/538 |
| 20 | 15/30 | B | **pré:** B call A raise 85 B call **flop:** A bet 110 B raise (all-in) 453 A call | showdown — A: Par de 6; B: Dois pares (9 e 8) | B | 1076 | 924/1076 |
| 21 | 15/30 | A | **pré:** A raise 85 B call **flop:** B check A bet 110 B call **turn:** B bet 270 A call **river:** B bet (all-in) 611 A fold | fold | B | 1541 | 459/1541 |
| 22 | 15/30 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Carta alta (Valete); B: Carta alta (Ás) | B | 60 | 429/1571 |
| 23 | 15/30 | A | **pré:** A raise 85 B call **flop:** B bet 115 A fold | fold | B | 285 | 344/1656 |
| 24 | 15/30 | B | **pré:** B raise (all-in) 1656 A fold | fold | B | 1686 | 314/1686 |
| 25 | 20/40 | A | **pré:** A fold | fold | B | 60 | 294/1706 |
| 26 | 20/40 | B | **pré:** B raise (all-in) 1706 A call parcial (all-in) | showdown — A: Par de 8; B: Dois pares (Reis e 8) | B | 588 | 0/2000 |

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

Placar acumulado: A 7 × 12 B.
