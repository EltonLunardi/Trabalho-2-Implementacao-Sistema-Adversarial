# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Node.js + TypeScript (Express + WebSocket) no servidor, escolhido pelo usuário. Frontend em HTML/CSS/JS puro servido pelo próprio Express, sem etapa de build (delegado: menos peças para rodar e explicar na disciplina). Chart.js servido localmente de `node_modules`.

## Users

O grupo 7 de Engenharia de Software Adversarial (mestrado, UNIPAMPA), principalmente quem roda a arena no próprio notebook para analisar o comportamento dos agentes durante e depois das partidas. Secundariamente, o professor avaliando o Trabalho 2 a partir da demonstração e do repositório.

## Product Purpose

Implementação funcional do Trabalho 2: dois agentes heurísticos (A e B) jogam heads-up de Texas Hold'em No Limit, partida após partida, até um deles quebrar, com blinds crescentes. Cada agente observa somente ações públicas, modela o oponente, prevê suas respostas e muda de política; a memória persiste entre partidas. A arena exibe o jogo ao vivo e registra ações, decisões e resultados de cada rodada. Sucesso é tornar visível e verificável o ciclo ação → resposta → observação → adaptação, e a evolução do conhecimento mútuo entre partidas.

## Positioning

Não é um jogo de poker; é um instrumento de análise de um sistema adversarial. O diferencial é o encadeamento causal explícito ("a partir do momento em que B passou a X, A começou a Y"), gerado a partir de regras de decisão explícitas e de observações públicas, sem roteiro prévio.

## Operating Context

- Rodado localmente com `npm start`; páginas em `http://127.0.0.1:3000`.
- Usado em sessões de análise: pausar, avançar passo a passo, acelerar (turbo) para acumular partidas, ler relatórios Markdown gerados em `relatorios/`.
- Material de apoio do Trabalho 1 (relatório, cenário sintético `dados/cenario.json`) define regras, ameaças T1–T3 e controles C1–C5.
- Treinador opcional via Ollama local (llama3.1:8b) entre partidas.

## Capabilities and Constraints

- Requisitos do enunciado do Trabalho 2: escopo delimitado; ≥2 agentes com objetivos conflitantes e regras de decisão explícitas; ≥3 rodadas conectadas com ciclo ação → resposta → observação → adaptação; adaptação demonstrada a partir de resultados anteriores; evidências de ações, decisões e resultados de cada rodada; nada roteirizado.
- Pesos de avaliação: rodadas adversariais e adaptação 35; implementação dos agentes 30; delimitação 15; demonstração e análise 15; repositório e contribuições 5.
- O motor é a autoridade sobre cartas e fichas; visões filtradas por agente (C1), validação central (C2), versão/aplicação única (C3), invariantes (C5). A demonstração de ataques T1–T3 ficou fora por decisão do usuário.
- Interface em português do Brasil.

## Brand Commitments

- Direção visual escolhida pelo usuário (rodada de decisão, padrão da categoria): dashboard escuro de poker com mesa oval de feltro verde no centro, painéis ardósia e destaque dourado. Executar a convenção com fidelidade, sem ironia nem enfeites.
- Barra de acabamento: clientes de poker online PokerStars / GGPoker (mesa, cartas, fichas e ações animadas).

## Evidence on Hand

- Relatório do Trabalho 1 (repositório rafaelbtorres/Trabalho-1-Analise-de-Sistema-Adversarial).
- Cenários sintéticos `dados/cenario.json` e `dados/cenario-all-in.json`, verificados por `npm test`.
- Relatórios e logs gerados pela própria arena em `relatorios/`. Nenhum resultado deve ser inventado na interface: tudo vem do servidor.

## Product Principles

1. Causa antes de efeito: toda adaptação mostrada aponta a observação pública que a motivou.
2. Separar o público do privado: o que cada agente vê é distinto do que o operador vê; a interface deixa isso explícito.
3. Evidência rastreável: cada número na tela pode ser encontrado no log ou relatório da partida.
4. Densidade com hierarquia: muita informação para análise, mas sempre com uma leitura principal clara.
