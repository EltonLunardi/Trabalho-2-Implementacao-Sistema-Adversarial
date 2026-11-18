# Relatório da partida 22

Gerado automaticamente pela Arena de Poker Adversarial em 17/11/2026, 18:42:01.

## Resultado

| Item | Valor |
|---|---|
| Vencedor | **A** |
| Mãos jogadas | 22 |
| Nível final de blinds | 3 (15/30) |
| Stack inicial | 1000 por agente (total 2000) |
| Mãos por nível | 8 |
| Seed | 2026 |
| Memória entre partidas | ativa |
| Conhecimento de A sobre B | 89% → 90% |
| Conhecimento de B sobre A | 89% → 89% |
| Acerto das previsões (A / B) | 88% / 57% |
| Evidências (cada evento, decisão e adaptação) | [partida-022.jsonl](partida-022.jsonl) |

## Linha do tempo das adaptações

Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).

- **A · mão 1** — Antes da mão 1 da partida 22, o treinador Llama de A revisou a partida anterior e ajustou a política base (llama3.1:8b, 7.1 s) (agressividade 70% → 75%; frequência de blefe 3% → 0%; armadilha (induzir) 5% → 10%). Justificativa: “Ajustes feitos para explorar melhor o oponente, aumentando a agressividade para pressioná-lo, reduzindo a frequência de blefe para evitar ser detectado e aumentando a frequência de armadilha para induzir erros no oponente.”
- **B · mão 2** — Antes da mão 2 da partida 22, o treinador Llama de B revisou a partida anterior e ajustou a política base (llama3.1:8b, 16.0 s) (agressividade 45% → 40%; armadilha (induzir) 55% → 65%). Justificativa: “A partir da análise da partida, percebeu-se que o agente B foi muito agressivo e não conseguiu explorar o oponente adequadamente. Portanto, foi feita uma redução na agressividade para -0.05. Além disso, foi observado que o agente B não utilizou o blefe de forma eficaz, então foi feita uma pequena alteração na frequência de blefe para 0.02. Por fim, o agente B não utilizou a armadilha de forma eficaz, então foi feita uma pequena alteração na frequência de armadilha para 0.35.”
- **A · mão 18** — Na mão 18 da partida 22, com blinds de 15/30, o menor stack vale 0,5 big blinds: A entrou em modo push/fold (all-in ou desistência no pré-flop).
- **B · mão 18** — Na mão 18 da partida 22, com blinds de 15/30, o menor stack vale 0,5 big blinds: B entrou em modo push/fold (all-in ou desistência no pré-flop).

## Estatísticas observadas pelo operador

| Indicador | A | B |
|---|---:|---:|
| Mãos ganhas | 12 | 9 |
| VPIP (entra no pote) | 55% | 64% |
| PFR (aumenta no pré-flop) | 32% | 9% |
| Agressão (bet+raise / bet+raise+call) | 76% | 19% |
| Desiste diante de aposta | 0% | 14% |
| Blefes (sucesso) | 3 (0%) | 0 (—) |
| Armadilhas | 0 | 3 |
| Showdowns ganhos | 6/16 | 9/16 |
| All-ins | 0 | 0 |
| Maior pote ganho | 1400 | 254 |

## Política: início × fim da partida

| Parâmetro | A início | A fim | B início | B fim |
|---|---:|---:|---:|---:|
| Agressividade | 70% | 75% | 45% | 40% |
| Frequência de blefe | 3% | 0% | 0% | 0% |
| Roubo após check | 20% | 20% | 0% | 0% |
| Armadilha (induzir) | 5% | 10% | 55% | 65% |
| Margem para pagar | -8% | -8% | -6% | -6% |
| Limiar de valor | 50% | 50% | 54% | 54% |
| Tamanho da aposta | 60% | 60% | 70% | 70% |

Regras ativas ao final — A: Valor contra pagador, Corrigir blefes, Pagar o blefador; B: Induzir o agressor, Valor contra pagador, Pagar o blefador, Corrigir blefes.

## Leitura que cada agente tem do outro (só eventos públicos)

| Métrica | A sobre B | B sobre A |
|---|---:|---:|
| Desiste diante de aposta | 13% (n≈136) | 26% (n≈120) |
| Agressão (bet+raise / ações) | 36% (n≈141) | 67% (n≈141) |
| Entra no pote (VPIP) | 83% (n≈125) | 81% (n≈125) |
| Aumenta no pré-flop (PFR) | 28% (n≈125) | 44% (n≈125) |
| Check-raise | 4% (n≈80) | 6% (n≈39) |
| Aposta após meu check | 23% (n≈103) | 54% (n≈112) |
| Blefe revelado no showdown | 32% (n≈36) | 44% (n≈73) |
| Meus blefes que funcionaram | 23% (n≈36) | 38% (n≈9) |

## Mãos

| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |
|---:|---|---|---|---|---|---:|---|
| 1 | 5/10 | B | **pré:** B call A check **flop:** A check B check **turn:** A bet 13 B call **river:** A bet 30 B raise 104 A call | showdown — A: Dois pares (6 e 3); B: Sequência até 7 | B | 254 | 873/1127 |
| 2 | 5/10 | A | **pré:** A call B check **flop:** B check A check **turn:** B check A check **river:** B check A bet 10 B call | showdown — A: Carta alta (Valete); B: Par de 3 | B | 40 | 853/1147 |
| 3 | 5/10 | B | **pré:** B call A check **flop:** A bet 13 B call **turn:** A bet 30 B fold | fold | A | 76 | 876/1124 |
| 4 | 5/10 | A | **pré:** A raise 30 B call **flop:** B check A check **turn:** B check A check **river:** B check A bet 24 B call | showdown — A: Par de 3; B: Par de 3 | B | 108 | 822/1178 |
| 5 | 5/10 | B | **pré:** B call A raise 30 B call **flop:** A check B bet 41 A call **turn:** A check B check **river:** A check B check | showdown — A: Carta alta (Dama); B: Par de 7 | B | 142 | 751/1249 |
| 6 | 5/10 | A | **pré:** A raise 30 B call **flop:** B check A bet 39 B call **turn:** B check A bet 89 B call **river:** B bet 215 A call | showdown — A: Dois pares (Ases e Valetes); B: Dois pares (Reis e Valetes) | A | 746 | 1124/876 |
| 7 | 5/10 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Par de Reis; B: Par de Reis | empate | 20 | 1124/876 |
| 8 | 5/10 | A | **pré:** A raise 30 B call **flop:** B check A check **turn:** B check A bet 24 B call **river:** B check A check | showdown — A: Par de 6; B: Par de 6 | B | 108 | 1070/930 |
| 9 | 10/20 | B | **pré:** B raise 50 A call **flop:** A bet 65 B call **turn:** A check B check **river:** A bet 150 B fold | fold | A | 380 | 1185/815 |
| 10 | 10/20 | A | **pré:** A raise 60 B call **flop:** B bet 80 A call **turn:** B check A check **river:** B check A bet 180 B call | showdown — A: Dois pares (7 e 4); B: Dois pares (7 e 3) | A | 640 | 1505/495 |
| 11 | 10/20 | B | **pré:** B call A raise 60 B call **flop:** A bet 75 B fold | fold | A | 195 | 1565/435 |
| 12 | 10/20 | A | **pré:** A call B check **flop:** B check A check **turn:** B bet 25 A raise 80 B call **river:** B check A check | showdown — A: Dois pares (6 e 4); B: Full house (6 com 4) | B | 200 | 1465/535 |
| 13 | 10/20 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A check B check | showdown — A: Carta alta (Rei); B: Carta alta (Rei) | A | 40 | 1485/515 |
| 14 | 10/20 | A | **pré:** A call B check **flop:** B check A bet 25 B call **turn:** B check A bet 60 B call **river:** B check A check | showdown — A: Par de 8; B: Par de Damas | B | 210 | 1380/620 |
| 15 | 10/20 | B | **pré:** B call A check **flop:** A check B check **turn:** A check B check **river:** A bet 25 B call | showdown — A: Sequência até Valete; B: Carta alta (Ás) | A | 90 | 1425/575 |
| 16 | 10/20 | A | **pré:** A raise 60 B call **flop:** B check A bet 75 B call **turn:** B check A check **river:** B check A check | showdown — A: Par de 2; B: Carta alta (Dama) | A | 270 | 1560/440 |
| 17 | 15/30 | B | **pré:** B raise 80 A call **flop:** A bet 105 B call **turn:** A bet 240 B call **river:** A bet 550 B fold | fold | A | 1400 | 1985/15 |
| 18 | 15/30 | A |  | showdown — A: Carta alta (Ás); B: Par de 7 | B | 30 | 1970/30 |
| 19 | 15/30 | B | **pré:** B fold | fold | A | 45 | 1985/15 |
| 20 | 15/30 | A |  | showdown — A: Carta alta (Rei); B: Carta alta (Rei) | B | 30 | 1970/30 |
| 21 | 15/30 | B | **pré:** B fold | fold | A | 45 | 1985/15 |
| 22 | 15/30 | A |  | showdown — A: Dois pares (Reis e 6); B: Par de Ases | A | 30 | 2000/0 |

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

Placar acumulado: A 9 × 13 B.
