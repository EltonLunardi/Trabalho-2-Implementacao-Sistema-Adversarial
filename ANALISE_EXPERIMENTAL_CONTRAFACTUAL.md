# Análise Estatística Multi-Seed, Provas Contrafactuais e Auditoria das 71 Partidas

**Projeto:** Arena Adversarial — Poker Heads-Up com Agentes Adaptativos  
**Base Executável:** Módulo [`arena/`](file:///Users/diego/projects/www/mestrado/Trabalho-2-Implementacao-Sistema-Adversarial/arena) (código-fonte inalterado)  
**Escopo:** Consolidação experimental sem modificações no código do sistema, cobrindo: (1) validação *multi-seed* com intervalos de confiança de 95%, (2) experimentos contrafactuais de causalidade, (3) matriz *round-robin* $4 \times 4$ entre perfis e (4) extração integral das 71 partidas registradas em [`evidencias/`](file:///Users/diego/projects/www/mestrado/Trabalho-2-Implementacao-Sistema-Adversarial/evidencias).

---

## Sumário

1. [Experimento 1: Validação Estatística Multi-Seed (20 Seeds × 20 Partidas)](#1-experimento-1-validação-estatística-multi-seed-20-seeds--20-partidas)
   - 1.1. [Resultados Agregados (IC 95%)](#11-resultados-agregados-ic-95)
   - 1.2. [Evolução por Blocos de Partidas](#12-evolução-por-blocos-de-partidas)
   - 1.3. [Viés da Seed Única vs. Comportamento Populacional](#13-viés-da-seed-única-vs-comportamento-populacional)
2. [Experimento 2: Análise Contrafactual de Causalidade (Seed 2026)](#2-experimento-2-análise-contrafactual-de-causalidade-seed-2026)
   - 2.1. [Ablação Contrafactual de Regras na Partida 1](#21-ablação-contrafactual-de-regras-na-partida-1)
   - 2.2. [Contrafactual de Memória: Ponto Exato de Bifurcação](#22-contrafactual-de-memória-ponto-exato-de-bifurcação)
   - 2.3. [Contrafactual de Perfil do Adversário](#23-contrafactual-de-perfil-do-adversário)
3. [Experimento 3: Torneio Round-Robin 4 × 4 entre Perfis](#3-experimento-3-torneio-round-robin-4--4-entre-perfis)
4. [Auditoria Completa das Evidências Gravadas (Partidas 1 a 71)](#4-auditoria-completa-das-evidências-gravadas-partidas-1-a-71)
   - 4.1. [Consolidado Geral (1.160 Mãos e 8.316 Decisões)](#41-consolidado-geral-1160-mãos-e-8316-decisões)
   - 4.2. [Distribuição e Evolução das Intenções Privadas](#42-distribuição-e-evolução-das-intenções-privadas)
   - 4.3. [Calibração Preditiva: Escore de Brier por Bloco](#43-calibração-preditiva-escore-de-brier-por-bloco)
5. [Síntese dos Achados](#5-síntese-dos-achados)

---

## 1. Experimento 1: Validação Estatística Multi-Seed (20 Seeds × 20 Partidas)

Para eliminar o viés de uma única distribuição de cartas (`seed = 2026`), o protocolo de [`experimento.ts`](file:///Users/diego/projects/www/mestrado/Trabalho-2-Implementacao-Sistema-Adversarial/arena/scripts/experimento.ts) foi executado em **processos isolados** sobre **20 *seeds* independentes** (`101, 202, 303, 404, 505, 606, 707, 808, 909, 1010, 1111, 1212, 1313, 1414, 1515, 1616, 1717, 1818, 1919, 2026`), cada uma rodando 20 partidas **com memória** e 20 partidas **sem memória** (800 partidas no total), com `stackInicial = 1000`, `maosPorNivel = 8`, perfis `A = pressionador` e `B = valor`, e treinador Llama desligado. Os intervalos de confiança de 95% (IC 95%) utilizam $t_{19;\,0{,}975} = 2{,}093$.

### 1.1. Resultados Agregados (IC 95%)

| Indicador (20 partidas/seed, $N = 20$ seeds) | COM Memória (Média ± IC 95%) | Intervalo [Mín – Máx] | SEM Memória (Média ± IC 95%) | Intervalo [Mín – Máx] |
|---|---:|---:|---:|---:|
| **Mãos totais (20 partidas)** | **268,4 ± 28,1** | [181 – 404] | **346,3 ± 25,6** | [255 – 429] |
| **Adaptações totais (sem contexto)** | **16,15 ± 2,96** | [8 – 28] | **84,30 ± 4,57** | [61 – 98] |
| **Mudanças de regra (`ativada`/`desativada`)** | **13,30 ± 1,77** | [8 – 20] | **84,30 ± 4,57** | [61 – 98] |
| **Última partida com mudança de regra** | **15,20 ± 2,09** | [5 – 20] | **19,90 ± 0,14** | [19 – 20] |
| **Influências cruzadas totais (`A→B` + `B→A`)** | **6,00 ± 1,75** | [0 – 13] | **67,20 ± 6,16** | [32 – 86] |
| **Atraso médio de reação (mãos)** | **11,46 ± 2,68** *(n=19)* | [1,5 – 21,5] | **15,14 ± 0,86** | [11,7 – 18,9] |
| **Maior cadeia causal atingida** | **2,25 ± 0,60** | [0 – 5] | **11,30 ± 2,42** | [4 – 23] |
| **Conhecimento final (A→B / B→A)** | **88,9% ± 0,3% / 88,8% ± 0,4%** | [87,0% – 90,1%] | **45,2% ± 7,7% / 43,2% ± 7,0%** | [6,9% – 67,8%] |
| **Escore de Brier global (A / B)** | **0,152 ± 0,007 / 0,226 ± 0,006** | A: [0,123 – 0,193] | **0,231 ± 0,016 / 0,238 ± 0,019** | A: [0,165 – 0,279] |
| **Vitórias de A (em 20 partidas)** | **12,25 ± 1,37** *(61,3%)* | [7 – 18] | **10,85 ± 1,33** *(54,3%)* | [5 – 16] |
| **Vitórias de B (em 20 partidas)** | **7,75 ± 1,37** *(38,8%)* | [2 – 13] | **9,15 ± 1,33** *(45,8%)* | [4 – 15] |
| **Checagens de invariante / Violações / Rejeições** | **40.948 / 0 / 0** | — | **48.029 / 0 / 0** | — |

---

### 1.2. Evolução por Blocos de Partidas

| Bloco | Mãos/Partida (Com / Sem) | Conhecimento A→B (Com / Sem) | Acerto A (Com / Sem) | Acerto B (Com / Sem) | Adaptações/Bloco (Com / Sem) | Vitórias A /5 (Com / Sem) |
|---|---:|---:|---:|---:|---:|---:|
| **P1–P5** | 13,3 / 16,3 | 64,2% / 44,0% | 77,3% / 67,6% | 64,1% / 62,7% | 8,50 / 19,55 | 3,30 / 2,90 |
| **P6–P10** | 13,5 / 18,3 | 81,7% / 45,3% | 82,5% / 65,0% | 65,3% / 60,7% | 2,20 / 21,55 | 3,10 / 2,55 |
| **P11–P15** | 13,7 / 16,7 | 86,4% / 44,7% | 82,9% / 67,9% | 66,2% / 62,6% | 2,60 / 21,80 | 2,90 / 2,80 |
| **P16–P20** | 13,2 / 18,1 | 88,3% / 45,3% | 82,5% / 67,0% | 69,2% / 63,7% | 2,85 / 21,40 | 2,95 / 2,60 |

---

### 1.3. Viés da Seed Única vs. Comportamento Populacional

A execução *multi-seed* revelou um achado metodológico decisivo que não era visível na execução única anterior ([ANALISE.md §2](file:///Users/diego/projects/www/mestrado/Trabalho-2-Implementacao-Sistema-Adversarial/ANALISE.md#L15-L31)):

1. **Inversão do Vencedor Médio:** Na `seed = 2026`, B venceu por **13 × 7** (com memória) e **15 × 5** (sem memória). Contudo, no conjunto das 20 *seeds*, **`seed = 2026` representou exatamente o limite inferior absoluto de vitórias de A** (`min = 7` com memória; `min = 5` sem memória). Na média populacional, **A (`pressionador`) supera B (`valor`) com significância estatística** com memória (`12,25 ± 1,37` vs. `7,75 ± 1,37`), e a memória inter-partidas amplia a vantagem de A de **54,3%** para **61,3%** (+7,0 p.p.).
2. **Redução de 33,9% no Escore de Brier de A:** Com memória, o erro quadrático médio probabilístico de A ao prever B cai de `0,231` para **`0,152`**, enquanto a acurácia no bloco final estabiliza em **82,5%** (contra **67,0%** sem memória). Já B melhora menos seu Escore de Brier (`0,238 → 0,226`) e sua acurácia (`63,7% → 69,2%`), demonstrando que a estratégia mais agressiva e mista de A mantém maior entropia comportamental mesmo após 20 partidas.
3. **Saturação Estrutural e Amortecimento:** Com memória, mais da metade das adaptações ocorre já no primeiro bloco (**8,50** em P1–P5, caindo para **2,20–2,85** nos blocos seguintes), com última mudança de regra ocorrendo em média na partida **15,2**. Sem memória, o volume permanece constante em **~21 adaptações por bloco** até a partida 20, produzindo partidas 29% mais longas (`346,3` vs. `268,4` mãos) por conta da re-descoberta contínua entre os agentes.

<details>
<summary>Tabela completa por seed (20 seeds independentes, processo isolado por execução)</summary>

| Seed | COM: Vitórias A×B | COM: Adaptações | COM: Última Mudança | COM: Cadeia Máx | COM: Conhec. A | COM: Brier A | SEM: Vitórias A×B | SEM: Adaptações | SEM: Cadeia Máx | SEM: Brier A |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 101 | 14 × 6 | 13 | P18 | 1 | 88,4% | 0,155 | 10 × 10 | 95 | 20 | 0,262 |
| 202 | 11 × 9 | 17 | P19 | 1 | 88,9% | 0,139 | 9 × 11 | 88 | 12 | 0,238 |
| 303 | 15 × 5 | 27 | P19 | 5 | 89,7% | 0,168 | 13 × 7 | 92 | 8 | 0,221 |
| 404 | 12 × 8 | 26 | P16 | 2 | 88,3% | 0,148 | 14 × 6 | 78 | 23 | 0,187 |
| 505 | 18 × 2 | 17 | P17 | 3 | 88,8% | 0,138 | 11 × 9 | 82 | 6 | 0,229 |
| 606 | 10 × 10 | 19 | P15 | 4 | 89,6% | 0,193 | 15 × 5 | 91 | 4 | 0,267 |
| 707 | 12 × 8 | 25 | P18 | 4 | 89,3% | 0,161 | 13 × 7 | 92 | 9 | 0,275 |
| 808 | 9 × 11 | 15 | P20 | 4 | 88,2% | 0,155 | 8 × 12 | 61 | 7 | 0,279 |
| 909 | 15 × 5 | 8 | P11 | 1 | 87,5% | 0,123 | 13 × 7 | 80 | 16 | 0,186 |
| 1010 | 13 × 7 | 9 | P18 | 0 | 87,9% | 0,155 | 11 × 9 | 98 | 17 | 0,275 |
| 1111 | 7 × 13 | 19 | P18 | 2 | 88,1% | 0,141 | 9 × 11 | 75 | 7 | 0,206 |
| 1212 | 12 × 8 | 28 | P17 | 2 | 89,7% | 0,149 | 9 × 11 | 98 | 7 | 0,215 |
| 1313 | 11 × 9 | 8 | P8 | 1 | 88,8% | 0,163 | 10 × 10 | 85 | 15 | 0,198 |
| 1414 | 12 × 8 | 15 | P9 | 3 | 88,6% | 0,143 | 13 × 7 | 83 | 12 | 0,276 |
| 1515 | 9 × 11 | 12 | P12 | 2 | 89,6% | 0,139 | 6 × 14 | 80 | 12 | 0,227 |
| 1616 | 14 × 6 | 16 | P20 | 2 | 90,0% | 0,167 | 9 × 11 | 94 | 17 | 0,218 |
| 1717 | 16 × 4 | 8 | P5 | 2 | 88,7% | 0,152 | 11 × 9 | 70 | 7 | 0,210 |
| 1818 | 15 × 5 | 13 | P19 | 2 | 88,6% | 0,159 | 16 × 4 | 73 | 10 | 0,251 |
| 1919 | 13 × 7 | 16 | P15 | 1 | 89,7% | 0,152 | 12 × 8 | 86 | 10 | 0,165 |
| 2026 | 7 × 13 | 12 | P10 | 3 | 88,8% | 0,146 | 5 × 15 | 85 | 7 | 0,225 |

</details>

---

## 2. Experimento 2: Análise Contrafactual de Causalidade (Seed 2026)

Para testar contrafactualmente a inferência causal do narrador ([narrative.ts](file:///Users/diego/projects/www/mestrado/Trabalho-2-Implementacao-Sistema-Adversarial/arena/src/report/narrative.ts)), foram executados três ensaios controlados mantendo **exatamente as mesmas cartas** (`seed = 2026`), variando apenas uma condição experimental por vez.

### 2.1. Ablação Contrafactual de Regras na Partida 1

Na Partida 1 padrão (`seed = 2026`), ocorre a cadeia de profundidade 2 documentada em [partida-001.md](file:///Users/diego/projects/www/mestrado/Trabalho-2-Implementacao-Sistema-Adversarial/evidencias/relatorios/partida-001.md):
- **Mão 7:** B ativa `armadilha_contra_roubo` (`freqArmadilha: 30% → 50%`, `margemCall: +2 → -2 p.p.`) — **[cadeia 0]**.
- **Mão 8:** A ativa `respeitar_passivo` (`freqRoubo: 50% → 60%`, `margemCall: 0 → +7 p.p.`) — **[cadeia 1]**.
- **Mão 8:** B contra-reage ativando `induzir_agressor` (`agressividade: 55% → 45%`, `freqArmadilha: 50% → 75%`) — **[cadeia 2]**.
- **Mão 11:** B ativa `valor_contra_pagador` e encerra a partida vencendo na **11ª mão**.

Utilizando o bloqueio de reativação pública (`ultimaMudanca`) no script executor sem alterar o código-fonte, comparou-se essa linha de base com duas ablações sobre B:

| Condição na Partida 1 (`seed = 2026`) | Duração da Partida | Blinds Finais | Cadeia Máx | Sequência de Adaptações Observada | Política Final de B (`armadilha` / `margemCall` / `agress.`) |
|---|---:|---:|---:|---|---|
| **Linha de Base (todas as regras ativas)** | **11 mãos** | `10/20` | **2** | Mão 7: B `armadilha_contra_roubo` $\rightarrow$ Mão 8: A `respeitar_passivo` (`c=1`) $\rightarrow$ Mão 8: B `induzir_agressor` (`c=2`) $\rightarrow$ Mão 11: B `valor_contra_pagador` | `75%` / `-2 p.p.` / `45%` |
| **Contrafactual A (sem `armadilha_contra_roubo` em B)** | **31 mãos** | `20/40` | **2** | Mão 7: *(sem adaptação)* $\rightarrow$ Mão 8: A `respeitar_passivo` (`c=0`) $\rightarrow$ Mão 8: B `induzir_agressor` (`c=1`) $\rightarrow$ Mão 13: B `pagar_blefador` (`c=1`) $\rightarrow$ Mão 15: A `valor_contra_pagador` (`c=2`) $\rightarrow$ Mão 27: A `corrigir_blefe` (`c=2`) | `55%` / `-6 p.p.` / `45%` |
| **Contrafactual B (sem `induzir_agressor` em B)** | **35 mãos** | `30/60` | **3** | Mão 7: B `armadilha_contra_roubo` (`c=0`) $\rightarrow$ Mão 8: A `respeitar_passivo` (`c=1`) $\rightarrow$ *(B não reage na mão 8)* $\rightarrow$ Mão 13: B `pagar_blefador` (`c=2`) $\rightarrow$ Mão 15: A `valor_contra_pagador` (`c=3`) $\rightarrow$ Mão 27: A `corrigir_blefe` (`c=3`) | `50%` / `-10 p.p.` / `55%` |

**Leitura causal:**
- No **Contrafactual A**, impedir B de armar armadilha na mão 7 não bloqueou a regra `respeitar_passivo` de A na mão 8 (porque o perfil base `valor` de B já apresentou `agressao = 25%` nas 14 amostras iniciais), mas rebaixou a adaptação de A de efeito encadeado (`cadeia: 1`) para evento raiz (`cadeia: 0`) e manteve `freqArmadilha` de B em `55%` em vez de `75%`. Como resultado direto dessa menor frequência de armadilha, B não eliminou A na mão 11: a partida estendeu-se por **31 mãos**, forçando ambos os agentes a percorrerem um conjunto distinto de adaptações (`pagar_blefador` e `corrigir_blefe`).
- No **Contrafactual B**, suprimir apenas a contra-reação de B na mão 8 (`induzir_agressor`) manteve a agressividade base de B em `55%`, prolongando a partida para **35 mãos** (nível `30/60`) e permitindo que A e B construíssem uma **cadeia causal de profundidade 3** já na primeira partida.

---

### 2.2. Contrafactual de Memória: Ponto Exato de Bifurcação

Comparando `MEMORIA=true` vs. `MEMORIA=false` na `seed = 2026` (mesma sequência de cartas):
- **Partida 1 (Mãos 1–11):** As duas execuções são **bit-a-bit idênticas** (11 mãos, vencedor B, 4 adaptações, `cadeiaMax = 2`, conhecimento final A `42,4%` / B `40,5%`, acerto A `45,0%` / B `68,4%`).
- **Partida 2 (Mão Global 12+ — Ponto de Bifurcação):**
  - **Com memória:** A inicia com `42,4%` de conhecimento prévio e já na **mão 1 da partida 2** (mão global 12) ativa `valor_contra_pagador` em continuidade à adaptação de B na mão 7 da partida 1 (`causaId = 1`). A partida termina em **26 mãos** (blinds `15/30`) com **vitória de A**, conhecimento A `66,7%`, acerto de previsão de A saltando para **80,4%**, e **3 adaptações**.
  - **Sem memória:** A e B iniciam a Partida 2 com conhecimento `0%` e políticas resetadas aos perfis originais. Apesar de a Partida 2 ainda terminar em 26 mãos com vitória de A nessa *seed* específica, o conhecimento final de A fica em `60,7%` (acerto `77,8%`), B termina em `53,6%`, e a partir da Partida 3 a divergência de trajetórias se torna completa, levando a **85 adaptações totais** contra apenas **12** com memória.

---

### 2.3. Contrafactual de Perfil do Adversário

Mantendo **fixos** a `seed = 2026`, o perfil de **B (`valor`)** e a memória ligada (20 partidas), variou-se apenas o perfil inicial de **A** entre os 4 perfis disponíveis em [`policy.ts`](file:///Users/diego/projects/www/mestrado/Trabalho-2-Implementacao-Sistema-Adversarial/arena/src/agents/policy.ts#L59-L84):

| Perfil Inicial de A (vs. B = `valor`) | Vitórias A × B | Mãos Totais | Adaptações | Cadeia Máx | Brier A / B | Regras Finais Ativas em B (resposta causada por A) | Política Final de B (`agress.` / `armadilha` / `margemCall`) |
|---|---:|---:|---:|---:|---:|---|---|
| **`pressionador`** | 7 × 13 | 262 | 12 | 3 | 0,146 / 0,235 | `induzir_agressor`, `valor_contra_pagador`, `pagar_blefador`, `corrigir_blefe` | `45%` / `55%` / `-6 p.p.` |
| **`valor`** | 9 × 11 | 261 | 14 | 1 | 0,163 / 0,219 | `pagar_blefador`, `valor_contra_pagador`, `induzir_agressor` | `45%` / `55%` / `-6 p.p.` |
| **`conservador`** | 7 × 13 | 385 | 11 | 1 | 0,193 / 0,197 | `corrigir_blefe`, `valor_contra_pagador`, `pagar_blefador`, `induzir_agressor` | `45%` / `55%` / `-6 p.p.` |
| **`equilibrado`** | 9 × 11 | 296 | 15 | 1 | 0,179 / 0,218 | `pagar_blefador`, `induzir_agressor`, `valor_contra_pagador`, `armadilha_contra_roubo` | `45%` / `75%` / `-10 p.p.` |

**Leitura:** A mudança de apenas o perfil inicial de A altera tanto o ritmo do jogo (`261–262` mãos contra perfis agressivos/valor vs. **`385` mãos** contra o perfil conservador) quanto o equilíbrio de adaptação em B: contra `equilibrado`, B manteve ativa `armadilha_contra_roubo` até o fim (`freqArmadilha = 75%`, `margemCall = -10 p.p.`), enquanto contra `pressionador` essa regra foi desativada após A cortar seus roubos e blefes.

---

## 3. Experimento 3: Torneio Round-Robin 4 × 4 entre Perfis

Foram executados todos os **16 pares ordenados** $(A \times B)$ dos perfis de [`PROFILES`](file:///Users/diego/projects/www/mestrado/Trabalho-2-Implementacao-Sistema-Adversarial/arena/src/agents/policy.ts#L59-L84) em processos isolados sobre **5 *seeds*** (`101, 202, 303, 404, 2026`), 20 partidas cada com memória ativa (1.600 partidas ao todo). Os valores reportam média ± IC 95% ($t_{4;\,0{,}975} = 2{,}776$).

### Matriz de Taxa de Vitória do Agente A (% de 20 partidas)

| A \ B | `pressionador` | `valor` | `conservador` | `equilibrado` | Média de A |
|---|---:|---:|---:|---:|---:|
| **`pressionador`** | 58,0% ± 14,3% | 59,0% ± 19,3% | **67,0% ± 9,4%** | **65,0% ± 9,8%** | **62,3%** |
| **`valor`** | 52,0% ± 12,9% | 56,0% ± 19,3% | **63,0% ± 10,4%** | 60,0% ± 8,8% | **57,8%** |
| **`equilibrado`** | 42,0% ± 14,3% | **62,0% ± 21,3%** | **63,0% ± 16,2%** | 53,0% ± 18,9% | **55,0%** |
| **`conservador`** | 43,0% ± 19,9% | 41,0% ± 20,8% | 43,0% ± 18,9% | 42,0% ± 16,2% | **42,3%** |

### Duração, Dinâmica de Adaptação e Conhecimento por Pareamento

| Pareamento ($A \times B$) | Mãos Totais (20 partidas) | Adaptações Totais | Cadeia Máx Média | Conhecimento Final (A / B) |
|---|---:|---:|---:|---:|
| `pressionador` × `pressionador` | 256,2 ± 18,4 | 13,2 ± 2,8 | 1,2 | 89,0% / 88,9% |
| `pressionador` × `valor` | 258,6 ± 72,6 | 19,0 ± 8,8 | 2,4 | 88,8% / 88,7% |
| `pressionador` × `conservador` | 374,2 ± 71,0 | 14,6 ± 2,4 | 2,8 | 89,4% / 89,8% |
| `pressionador` × `equilibrado` | 280,8 ± 16,7 | 14,0 ± 5,6 | 2,4 | 89,1% / 89,1% |
| `valor` × `pressionador` | 281,4 ± 44,7 | 17,0 ± 10,5 | 2,6 | 89,0% / 88,9% |
| `valor` × `valor` | 321,2 ± 75,0 | 13,2 ± 5,4 | 1,2 | 89,6% / 89,6% |
| `valor` × `conservador` | 467,4 ± 61,7 | 25,0 ± 8,7 | 2,6 | 90,4% / 90,4% |
| `valor` × `equilibrado` | 372,8 ± 54,4 | 22,2 ± 12,1 | 2,6 | 90,0% / 90,0% |
| `conservador` × `pressionador` | 400,2 ± 61,6 | 14,6 ± 3,4 | 2,2 | 89,7% / 89,7% |
| `conservador` × `valor` | 478,4 ± 84,2 | 21,6 ± 13,3 | 2,2 | 90,4% / 90,3% |
| **`conservador` × `conservador`** | **754,8 ± 129,6** | **35,6 ± 12,8** | **3,2** | **90,9% / 90,9%** |
| `conservador` × `equilibrado` | 478,4 ± 30,8 | 24,0 ± 14,5 | 3,2 | 90,3% / 90,4% |
| `equilibrado` × `pressionador` | 294,0 ± 48,0 | 17,0 ± 7,1 | 1,6 | 89,2% / 89,2% |
| `equilibrado` × `valor` | 311,8 ± 42,3 | 15,2 ± 6,8 | 1,8 | 89,5% / 89,5% |
| `equilibrado` × `conservador` | 451,2 ± 58,5 | 21,0 ± 9,6 | 2,8 | 90,3% / 90,3% |
| `equilibrado` × `equilibrado` | 307,2 ± 47,0 | 22,2 ± 5,5 | 2,8 | 89,6% / 89,5% |

**Leitura sob Teoria dos Jogos:**
1. **Hierarquia Transitiva Clara (sem ciclos pedra-papel-tesoura):** A iniciativa agressiva do `pressionador` domina todos os demais perfis (média de 62,3%), seguido por `valor` (57,8%), `equilibrado` (55,0%) e `conservador` (42,3%, derrotado em todos os confrontos). No *No Limit Heads-Up* com *blinds* crescentes a cada 8 mãos, a passividade do perfil `conservador` (`agressividade = 40%`, `limiarValor = 66%`) cede excessivamente potes pequenos e perde na fase de *blinds* médios/altos.
2. **Duelo de Passivos Amplifica Duração e Adaptações:** O confronto `conservador × conservador` produz quase o triplo de mãos (`754,8`) e mais que o dobro de adaptações (`35,6`) de `pressionador × pressionador` (`256,2` mãos e `13,2` adaptações), pois os agentes evitam confrontos *all-in* precoces e acumulam amostras suficientes para atingir **90,9% de conhecimento mútuo**.

---

## 4. Auditoria Completa das Evidências Gravadas (Partidas 1 a 71)

A análise publicada originalmente em [ANALISE.md §3](file:///Users/diego/projects/www/mestrado/Trabalho-2-Implementacao-Sistema-Adversarial/ANALISE.md#L32-L54) contemplava até a partida 68. O processamento direto de todos os arquivos `partida-001.jsonl` a `partida-071.jsonl` em [`evidencias/relatorios/`](file:///Users/diego/projects/www/mestrado/Trabalho-2-Implementacao-Sistema-Adversarial/evidencias/relatorios) e de [`evidencias/memoria.json`](file:///Users/diego/projects/www/mestrado/Trabalho-2-Implementacao-Sistema-Adversarial/evidencias/memoria.json) permite auditar o conjunto completo das **71 partidas** da execução ao vivo com o treinador Llama.

### 4.1. Consolidado Geral (1.160 Mãos e 8.316 Decisões)

| Métrica de Auditoria (P1–P71) | Valor Observado nos `.jsonl` |
|---|---:|
| **Partidas concluídas** | **71** |
| **Mãos jogadas** | **1.160** (média de 16,3 mãos/partida) |
| **Eventos do motor registrados** | **19.914** |
| **Decisões privadas registradas** | **8.316** (A: 3.959; B: 4.357) |
| **Adaptações registradas** | **214** |
| **Placar acumulado (P1–P71)** | **A 41 × 30 B** *(P69: B venceu em 17 mãos; P70: A venceu em 17 mãos com 2 adaptações; P71: A venceu em 7 mãos)* |
| **Conhecimento mútuo final (ao fim da P71)** | **A→B: 91,42% · B→A: 91,44%** |

---

### 4.2. Distribuição e Evolução das Intenções Privadas

Os registros `decisao` nos logs JSONL revelam a verdade terrestre (*ground truth*) das intenções ocultas de cada agente, demonstrando empiricamente a especialização co-evolutiva:

| Categoria Privada | Total A (3.959 decisões) | % A | Total B (4.357 decisões) | % B | Papel Estratégico Emergente |
|---|---:|---:|---:|---:|---|
| **`valor`** | **1.549** | **39,1%** | 1.007 | 23,1% | A convergiu para extração intensa por valor |
| **`check`** | 1.149 | 29,0% | 1.278 | 29,3% | Controle de pote e espera |
| **`call`** | 787 | 19,9% | **1.504** | **34,5%** | B assumiu postura de pagador/armador |
| **`fold`** | 275 | 6,9% | 324 | 7,4% | Desistência disciplinada abaixo das *pot odds* |
| **`roubo`** | **123** | **3,1%** | 7 | 0,2% | A manteve pressão oportunista pós-*check* |
| **`armadilha`** | 38 | 1,0% | **226** | **5,2%** | B armou ~6× mais armadilhas que A |
| **`pressao`** | 28 | 0,7% | 11 | 0,3% | *All-in* em modo curto ($\le 12\text{ BB}$) |
| **`blefe`** | **10** | **0,3%** | **0** | **0,0%** | Extinção quase total dos blefes puros |

**Evolução temporal dos blefes e armadilhas por bloco de 10 partidas:**
- **Blefes de A:** ocorreram **6** em P1–P10, **3** em P11–P20, **0** em P21–P30, **1** em P31–P40 e **0** em todo o intervalo P41–P71.
- **Roubos de B:** ocorreram **6** em P1–P10, **1** em P11–P20 e **0** da partida 21 até a partida 71.
- **Armadilhas de B:** mantiveram-se presentes em todos os blocos (**34** em P1–P10, **25** em P11–P20, **22** em P21–P30, **33** em P31–P40, **37** em P41–P50, **30** em P51–P60, **42** em P61–P70 e **3** em P71).

---

### 4.3. Calibração Preditiva: Escore de Brier por Bloco

A partir das previsões individuais gravadas em [`evidencias/memoria.json`](file:///Users/diego/projects/www/mestrado/Trabalho-2-Implementacao-Sistema-Adversarial/evidencias/memoria.json) (`OpponentModel.predicoes`), calculou-se a acurácia direcional e o **Escore de Brier** ($B = \frac{1}{N}\sum (p - o)^2$, em que $0$ é previsão perfeita e $0{,}25$ equivale ao palpite uniforme $p = 0{,}5$) para todos os blocos de P1 a P71:

| Bloco | Previsões de A ($n$) | Acerto A | Escore de Brier A | Previsões de B ($n$) | Acerto B | Escore de Brier B |
|---|---:|---:|---:|---:|---:|---:|
| **P1–P10** | 305 | 78,7% | 0,1636 | 242 | 57,0% | 0,2410 |
| **P11–P20** | 256 | **85,5%** | **0,1222** | 194 | 67,5% | 0,2138 |
| **P21–P30** | 345 | 82,0% | 0,1466 | 246 | 63,8% | 0,2145 |
| **P31–P40** *(escalada pós-treinador)* | 320 | **73,4%** | **0,1919** | 250 | 63,6% | 0,2308 |
| **P41–P50** | 302 | 79,8% | 0,1541 | 255 | 68,6% | **0,2040** |
| **P51–P60** | 386 | 76,7% | 0,1760 | 314 | **68,8%** | 0,2088 |
| **P61–P70** | 398 | 78,6% | 0,1620 | 300 | 66,0% | 0,2195 |
| **P71** *(7 mãos)* | 14 | 71,4% | 0,2098 | 9 | 88,9% | 0,1685 |

**Leitura:** O Escore de Brier fornece uma assinatura quantitativa precisa da **perturbação causada pelo treinador Llama**. Entre P1–P10 e P11–P20, A aprende rapidamente o comportamento de B e reduz seu erro de Brier para `0,1222`. Contudo, quando as intervenções do treinador em A reabrem a escalada competitiva em P31–P40, a imprevisibilidade mútua volta a crescer e o Escore de Brier de A salta de `0,1466` para **`0,1919`** (queda de 8,6 pontos percentuais no acerto), recuperando-se nos blocos seguintes conforme o modelo EWMA se recalibra ao novo equilíbrio.

---

## 5. Síntese dos Achados

1. **Robustez Estatística:** Ao longo de 20 *seeds* (800 partidas) e 88.977 checagens de invariantes, o motor manteve **0 violações** e **0 rejeições**. A memória inter-partidas eleva o conhecimento mútuo para **~88,9%**, reduz em **33,9%** o Escore de Brier de A e reduz as adaptações após a convergência (~84 → ~16). Além disso, o experimento *multi-seed* corrige a impressão da `seed = 2026` isolada: em média populacional, **`pressionador` (A) vence 61,3% ± 6,8% das partidas com memória**.
2. **Causalidade Contrafactual Comprovada:** As ablações na Partida 1 (`seed = 2026`) demonstram que desligar uma única regra de B (`armadilha_contra_roubo` ou `induzir_agressor`) altera imediatamente a profundidade da cadeia causal, estende a partida de 11 para 31 ou 35 mãos e muda o conjunto de regras ativadas por ambos os agentes.
3. **Dinâmica do Ecossistema de Perfis:** No torneio *round-robin* $4 \times 4$ (1.600 partidas), perfis com iniciativa (`pressionador`, `valor`, `equilibrado`) exploram sistematicamente o perfil `conservador` (42,3% de vitórias), enquanto a similaridade passiva em `conservador × conservador` maximiza o acúmulo de conhecimento (`90,9%`) e a incidência de adaptações (`35,6`).
4. **Assinatura da Co-Evolução nas 71 Partidas:** Os logs de intenções privadas e o Escore de Brier confirmam quantitativamente que B especializou-se como armador (`226` armadilhas vs. `38` de A; `0` blefes puros), A migrou para extração por valor (`1.549` ações de valor; `0` blefes a partir da partida 41), e as intervenções do treinador reabriram a dinâmica de incerteza exatamente no pico de Brier de P31–P40.
