# Direção de arte — Arena Adversarial — Trabalho 2

> A Arena em movimento: interface escura de cliente de pôquer, feltro verde, dourado de destaque; A em coral, B em azul — cada tela explica uma peça do sistema adversarial.

Revisão 1 · APROVADA em 2026-11-17T22:55:28-03:00 · sha256 `c301eea964528c06…` · base: lab-ia

_Gerado por `da.py compilar`. Não edite este arquivo: mude `da/da.json` e recompile._

## Conceito

Palavras-chave: acadêmico, claro, interface de pôquer, causa e efeito, dados reais.

**Faça**

- Coral é sempre o agente A e azul é sempre o agente B, em qualquer tela.
- Dourado marca o que está sendo explicado agora (a palavra da legenda, o número em foco).
- Mostrar a Arena real gravada sempre que o assunto for o protótipo; animação só para conceito.
- Números com a fonte citada (relatório da partida, experimento) e unidade escrita.
- Uma ideia por tela; diagramas crescem na ordem em que o dado flui.

**Não faça**

- Inventar resultado ou número que não está nos relatórios.
- Usar coral ou azul para outra coisa que não A e B.
- Fichas, cartas ou feltro como enfeite em tela que não fala do jogo.
- Animação elástica ou que quica.
- Parágrafo longo na tela: quebrar em rótulos e passos.

Referências:

- `referencias/arena_mesa.png` — A própria Arena: fundo ardósia, mesa de feltro, dourado de destaque, A coral e B azul. O vídeo e o protótipo devem parecer uma coisa só.

## Cor

| token | hex | CSS | contraste c/ fundo |
|---|---|---|---|
| fundo | `#0D1117` | `var(--da-cor-fundo)` | — |
| superficie | `#161B23` | `var(--da-cor-superficie)` | 1,1:1 |
| texto | `#E9EDF2` | `var(--da-cor-texto)` | 16,1:1 |
| texto_suave | `#8A95A5` | `var(--da-cor-texto-suave)` | 6,2:1 |
| primaria | `#E5B94E` | `var(--da-cor-primaria)` | 10,3:1 |
| secundaria | `#4EA8FF` | `var(--da-cor-secundaria)` | 7,5:1 |
| destaque | `#FF6F61` | `var(--da-cor-destaque)` | 6,9:1 |
| positivo | `#3FB97A` | `var(--da-cor-positivo)` | 7,6:1 |
| negativo | `#EF5350` | `var(--da-cor-negativo)` | 5,4:1 |
| alerta | `#F2994A` | `var(--da-cor-alerta)` | 8,5:1 |
| feltro | `#1F8A63` | `var(--da-cor-feltro)` | 4,4:1 |
| feltro_medio | `#0F5A40` | `var(--da-cor-feltro-medio)` | 2,3:1 |
| feltro_escuro | `#093A29` | `var(--da-cor-feltro-escuro)` | 1,5:1 |

Dados (ordem fixa, `dado-1`…): `#E5B94E` `#4EA8FF` `#FF6F61` `#3FB97A` `#F2994A` `#8A95A5` `#E9EDF2`.
Neutros (`neutro-1`…): `#000000` `#FFFFFF`.
Gradientes: `profundidade` = linear-gradient(180deg, #161B23 0%, #0D1117 100%); `feltro` = radial-gradient(circle, #1F8A63 0%, #0F5A40 55%, #093A29 100%).

## Tipografia

| papel | família | peso | largura | caixa | tracking | entrelinha | arquivo |
|---|---|---|---|---|---|---|---|
| titulo | Roboto | 700 | 82% | normal | -0,012 em | 1,06 | `fontes/Roboto-Variable.ttf` |
| subtitulo | Fira Code | 500 | normal | alta | 0,08 em | 1,35 | `fontes/FiraCode-Variable.ttf` |
| corpo | Roboto | 400 | 100% | normal | 0 em | 1,42 | `fontes/Roboto-Variable.ttf` |
| dados | Fira Code | 500 | normal | normal | 0 em | 1,25 | `fontes/FiraCode-Variable.ttf` |
| legenda | Roboto | 800 | 88% | normal | -0,005 em | 1,12 | `fontes/Roboto-Variable.ttf` |

Escala (fração do lado menor): display 0,12 (130 px em 1080); h1 0,078 (84 px em 1080); h2 0,054 (58 px em 1080); h3 0,039 (42 px em 1080); corpo 0,03 (32 px em 1080); nota 0,022 (24 px em 1080).

## Layout

Grade de 12 colunas, margem 0,06 (65 px em 1080), calha 0,012 (13 px em 1080); raio 0,008 (9 px em 1080); traço 0,0028 (3 px em 1080); sombra nenhuma; densidade media.

## Movimento

Curvas (cubic-bezier): entrada [0,16, 1, 0,3, 1]; saida [0,7, 0, 0,84, 0]; enfase [0,2, 0, 0, 1]; suave [0,65, 0, 0,35, 1]; linear [0, 0, 1, 1].
Durações: micro 0,08 s; curta 0,2 s; media 0,36 s; longa 0,7 s; escalonamento 0,04 s.
Entrada padrão: digita · saída padrão: fade · transição padrão: corte (permitidas: corte, mascara, fade).

- Movimento de interface: rápido para chegar, exato para parar
- Texto técnico digita; forma geométrica desenha o traço
- Diagramas crescem na direção do fluxo do dado
- Sem elasticidade: nada passa do ponto

## Tratamento de imagem (footage e b-roll)

Grade: exposição 0 EV · contraste 1 · saturação 1 · gama 1 · temperatura 0 · matiz 0° · LUT nenhuma · curva nenhuma.
Duotone: não · grão: não · vinheta: não · nitidez 0 · desfoque 0 · velocidade 1×.
Moldura: janela (cor texto_suave, espessura 0,0028 (3 px em 1080), margem 0,06 (65 px em 1080), rótulo sim) · recorte ancorado em: centro.
Cadeia ffmpeg (horizontal): `null`

## Legenda

Estilo karaoke, papel `legenda`, tamanho 0,052 (56 px em 1080), caixa normal; cor texto (`#E9EDF2`), destaque primaria (`#E5B94E`), já falada texto_suave; contorno não; sombra não; caixa de fundo `#0D1117` a 84%.
Posição (y do centro): vertical 0,6; horizontal 0,86 · largura máx. 0,78 · até 2 linha(s) e 5 palavra(s) por cue · animação fade.
Faixa da legenda reservada (GC, crédito, título e gráficos desviam dela) em: vertical, quadrado, horizontal.

## Gráficos, thumbnail, som e marca

- GC: estilo linha, inferior esquerda; nome em `titulo`, cargo em `dados`.
- Tarja: contorno, texto texto sobre primaria, papel `subtitulo`.
- Ícones: traco (0,0028 (3 px em 1080)). Gráficos de dados: eixo texto_suave, grade superficie, rótulos em `dados`.
- Crédito de fonte: papel `dados`, 0,024 (26 px em 1080), inferior direita.
- Thumbnail: até 4 palavras em `titulo` (0,17 do lado menor); fundo gradiente:profundidade; foto com saturação 0,9 e contraste 1,15, pessoa recortada; zona proibida: inferior direita.
- Som: Sintético e limpo: texturas eletrônicas discretas, cliques de interface e graves controlados. Loudness: longo -14 LUFS / -1 dBTP; curto -14 LUFS / -1 dBTP. SFX: entrada = blip, enfase = impacto, texto = tick. Música: eletrônica ambiente, arpejos lentos, sem bateria pesada (90–110 bpm).
- Marca: logo nenhum; assinatura nenhuma; posição superior direita; marca d'água não.

## Formatos e margens seguras

- horizontal: 1920×1080 a 30000/1001 fps
- vertical: 1080×1920 a 30000/1001 fps
- quadrado: 1080×1080 a 30000/1001 fps
- thumbnail: 1280×720
- margens seguras horizontal [topo, direita, base, esquerda]: padrao [0,05, 0,05, 0,05, 0,05]
- margens seguras vertical [topo, direita, base, esquerda]: instagram [0,14, 0,21, 0,35, 0,06]; tiktok [0,125, 0,2778, 0,3438, 0,1111]; shorts [0,15, 0,1778, 0,35, 0,0444]; uniao [0,15, 0,2778, 0,35, 0,1111]
- margens seguras quadrado [topo, direita, base, esquerda]: padrao [0,05, 0,05, 0,05, 0,05]

## Como as peças usam a DA

- HTML/CSS: `<link rel="stylesheet" href="da/build/da.css">` e `var(--da-cor-primaria)`, `var(--da-fonte-titulo)`, `var(--da-escala-h1)`, classes `.da-titulo`, `.da-corpo`… Cor com transparência tem uma forma só: `rgba(var(--da-cor-fundo-rgb), 0.86)`. Em cena do motor: `ctx.cor(…)`, `ctx.alfa(…, a)`; fora dele, `window.DA` (de `da/build/da.js`).
- Python: `sys.path.insert(0, os.path.expanduser("~/.claude/skills/video-direcao-de-arte/kit")); import da; d = da.carregar()` → `d.cor("primaria")`, `d.fonte("titulo")`, `d.px(...)`, `d.grade("horizontal")`.
- Proibido cor ou fonte literal em peças (HTML, CSS, JS, JSON, SVG e Python): `~/.claude/skills/video-direcao-de-arte/kit/bin/da lint <pasta>` reprova. Toda saída leva carimbo: `~/.claude/skills/video-direcao-de-arte/kit/bin/da conferir-carimbo`.
- Antes de publicar: `~/.claude/skills/video-direcao-de-arte/kit/bin/da conferencia` — a conferência final (DA aprovada, lint, carimbos, loudness e limites de plataforma) grava `qa/relatorio.json` e `qa/relatorio.md`; nada vai para `publicacao/` com esse relatório reprovado.
