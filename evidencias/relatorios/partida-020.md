# Relatório da partida 20

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 18:33:50.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **A** |
| Mãos jogadas | 17 |
| Nível final de blinds | 3 (15/30) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 89% → 89% |
| Conhecimento de B sobre A | 89% → 89% |
| Acerto das previsões (A / B) | 83% / 69% |
| Evidências (cada evento, decisão e adaptação) | [partida-020.jsonl](partida-020.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 1** — Na mão 1 da partida 20, com blinds de 5/10, o menor stack vale 100,0 big blinds: A saiu do modo push/fold e voltou a jogar todas as etapas.
- **B · mão 1** — Na mão 1 da partida 20, com blinds de 5/10, o menor stack vale 100,0 big blinds: B saiu do modo push/fold e voltou a jogar todas as etapas.
- **A · mão 10** — A partir do momento em que B começou a jogar de forma mais passiva (percebido na mão 7 da partida 19), A abandonou a postura "Respeitar o passivo" na mão 10 da partida 20 (roubo após check 30% → 20%; margem para pagar -1 p.p. → -8 p.p.). Leitura: B aposta ou aumenta em 39% das suas ações (10/20 recentes); a leitura que motivou essa postura deixou de valer.

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 8 | 9 |
| VPIP (entra no pote) | 94% | 82% |
| PFR (aumenta no pré-flop) | 41% | 41% |
| Agressão (bet+raise / bet+raise+call) | 61% | 44% |
| Desiste diante de aposta | 21% | 16% |
| Blefes (sucesso) | 0 (—) | 0 (—) |
| Armadilhas | 0 | 0 |
| Showdowns ganhos | 4/9 | 5/9 |
| All-ins | 2 | 3 |
| Maior pote ganho | 1908 | 1126 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 70% | 45% | 45% |
| Frequência de blefe | 3% | 3% | 0% | 0% |
| Roubo após check | 30% | 20% | 0% | 0% |
| Armadilha (induzir) | 5% | 5% | 55% | 55% |
| Margem para pagar | -1% | -8% | -6% | -6% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Valor contra pagador, Corrigir blefes, Pagar o blefador; B: Induzir o agressor, Valor contra pagador, Pagar o blefador, Corrigir blefes.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 13% (n≈134) | 28% (n≈117) |
| Agressão (bet+raise / ações) | 39% (n≈141) | 66% (n≈141) |
| Entra no pote (VPIP) | 84% (n≈122) | 82% (n≈121) |
| Aumenta no pré-flop (PFR) | 31% (n≈122) | 45% (n≈121) |
| Check-raise | 4% (n≈75) | 6% (n≈37) |
| Aposta após meu check | 25% (n≈98) | 56% (n≈106) |
| Blefe revelado no showdown | 35% (n≈32) | 41% (n≈68) |
| Meus blefes que funcionaram | 26% (n≈33) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B raise 27 A call **flop:** A bet 34 B call **turn:** A bet 78 B call **river:** A check B check | showdown — A: Par de 10; B: Dois pares (10 e 8) | B | 278 | 861/1139 |
| 2 | 5/10 | A | **pré:** A call B check **flop:** B check A bet 13 B call **turn:** B check A bet 29 B call **river:** B check A bet 66 B fold | fold | A | 170 | 913/1087 |
| 3 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A bet 37 B call **turn:** A bet 84 B call **river:** A bet 191 B call | showdown — A: Full house (8 com 6); B: Flush (Dama alto) | A | 682 | 1254/746 |
| 4 | 5/10 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A check **river:** B check A check | showdown — A: Par de Reis; B: Par de Reis | B | 20 | 1244/756 |
| 5 | 5/10 | B | **pré:** B call A check **flop:** A check B bet 14 A fold | fold | B | 34 | 1234/766 |
| 6 | 5/10 | A | **pré:** A call B raise 27 A call **flop:** B check A check **turn:** B bet 37 A fold | fold | B | 91 | 1207/793 |
| 7 | 5/10 | B | **pré:** B call A raise 29 B call **flop:** A check B check **turn:** A check B check **river:** A bet 37 B fold | fold | A | 95 | 1236/764 |
| 8 | 5/10 | A | **pré:** A raise 29 B call **flop:** B bet 40 A raise 123 B call **turn:** B bet 210 A call **river:** B bet (all-in) 402 A fold | fold | B | 1126 | 874/1126 |
| 9 | 10/20 | B | **pré:** B raise 55 A call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Carta alta (Rei); B: Carta alta (Rei) | A | 110 | 929/1071 |
| 10 | 10/20 | A | **pré:** A call B check **flop:** B bet 30 A call **turn:** B bet 70 A call **river:** B bet 165 A fold | fold | B | 405 | 809/1191 |
| 11 | 10/20 | B | **pré:** B raise 55 A call **flop:** A check B bet 75 A raise 230 B call **turn:** A bet (all-in) 524 B call | showdown — A: Dois pares (Damas e 7); B: Par de Damas | A | 1618 | 1618/382 |
| 12 | 10/20 | A | **pré:** A raise 60 B call **flop:** B bet 85 A call **turn:** B bet (all-in) 237 A call | showdown — A: Carta alta (Ás); B: Par de 8 | B | 764 | 1236/764 |
| 13 | 10/20 | B | **pré:** B raise 55 A call **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Trinca de 2; B: Trinca de 2 | B | 110 | 1181/819 |
| 14 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 75 B call **turn:** B check A check **river:** B bet 185 A call | showdown — A: Par de 8; B: Sequência até 5 | B | 640 | 861/1139 |
| 15 | 10/20 | B | **pré:** B raise 55 A call **flop:** A bet 70 B call **turn:** A bet 160 B fold | fold | A | 410 | 986/1014 |
| 16 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 75 B fold | fold | A | 195 | 1046/954 |
| 17 | 15/30 | B | **pré:** B raise 80 A raise 240 B call **flop:** A bet 305 B call **turn:** A bet (all-in) 501 B call parcial (all-in) | showdown — A: Dois pares (Ases e Damas); B: Par de Damas | A | 1908 | 2000/0 |

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

Placar acumulado: A 8 × 12 B.
