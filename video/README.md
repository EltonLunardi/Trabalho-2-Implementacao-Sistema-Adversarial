# Vídeo de apresentação do Trabalho 2

Vídeo explicativo de ~11 min (1920×1080), do conceito à conclusão do projeto. O arquivo de vídeo não fica no repositório: [assista no YouTube](https://www.youtube.com/watch?v=S0OIkzr4Xb8).

## O que há nesta pasta

| Caminho | Conteúdo |
|---|---|
| [roteiro/roteiro.md](roteiro/roteiro.md) | Roteiro completo em 14 blocos, com a fala e o que aparece na tela em cada um |
| [roteiro/telas.json](roteiro/telas.json) | Layout de cada tela, com os itens ancorados em trechos da fala |
| [roteiro/fala_tts.txt](roteiro/fala_tts.txt) | Texto exato enviado à voz sintética |
| [cenas/arena.js](cenas/arena.js) | Cena animada (HTML renderizado quadro a quadro), com a legenda karaokê sincronizada pela fala |
| [cenas/thumb.js](cenas/thumb.js), [thumbs/thumb_01.png](thumbs/thumb_01.png) | Miniatura |
| [tools/gravar_arena.mjs](tools/gravar_arena.mjs) | Grava a Arena rodando de verdade (screencast do Chromium em 1080p) |
| [tools/compor.py](tools/compor.py) | Encaixa as gravações na janela da cena de demonstração e junta o áudio |
| [da/](da/) | Direção de arte: paleta da Arena, tipografia e regras (`DA.md`, `prancha.png`) |
| [publicacao/youtube.md](publicacao/youtube.md) | Título, descrição e capítulos |

## Como foi produzido

- **Narração:** voz sintética neural pt-BR (edge-tts, Antonio, velocidade 1,15x), com o tempo de cada palavra usado para sincronizar telas e legenda.
- **Telas:** uma cena que lê o roteiro de telas e mostra cada item no trecho falado correspondente. Cores e fontes vêm só dos tokens da direção de arte; A é sempre coral e B sempre azul.
- **Demonstração:** gravações reais da Arena (mesa jogando, linha de influência e relatório de partida), sem filtros.
- **Som:** trilha e efeitos sintetizados para este vídeo, com a trilha baixando sob a fala; volume final de −14 LUFS.
- **Números:** todos vêm de [ANALISE.md](../ANALISE.md) e dos relatórios em [evidencias/](../evidencias/).
