// thumb.js — miniatura do vídeo (1280×720): título curto, A × B e a Arena ao fundo.
export const meta = {
  nome: 'thumb',
  descricao: 'Thumbnail do vídeo da Arena Adversarial.',
  dur_padrao: 1,
  formatos: ['thumbnail'],
  alfa_padrao: false,
  params: {
    titulo: { tipo: 'texto', obrigatorio: true },
    destaque: { tipo: 'texto', obrigatorio: true },
    imagem: { tipo: 'arquivo', obrigatorio: true },
  },
};
const S = {};
export function build(palco, p, ctx) {
  const L = ctx.L, A = ctx.A;
  const fundo = ctx.el('div');
  Object.assign(fundo.style, { position: 'absolute', inset: '0', background: `linear-gradient(180deg, ${ctx.cor('superficie')} 0%, ${ctx.cor('fundo')} 100%)` });
  palco.appendChild(fundo);
  const img = ctx.el('img');
  img.setAttribute('data-da-livre', 'captura de tela da Arena');
  img.src = p.imagem;
  Object.assign(img.style, { position: 'absolute', left: L * 0.47 + 'px', top: A * 0.08 + 'px', width: L * 0.5 + 'px', height: A * 0.56 + 'px', objectFit: 'cover', objectPosition: 'left top', borderRadius: ctx.raio + 'px', border: `${ctx.traco}px solid ${ctx.cor('texto_suave')}` });
  palco.appendChild(img);
  const m = ctx.margens();
  const t1 = ctx.texto('titulo', p.titulo, { tam: ctx.px(0.17), cor: ctx.cor('texto'), maxW: L * 0.44, wrap: true });
  palco.appendChild(t1);
  ctx.place(t1, { x: m.esquerda, y: A * 0.1 });
  const t2 = ctx.texto('titulo', p.destaque, { tam: ctx.px(0.17), cor: ctx.cor('primaria') });
  palco.appendChild(t2);
  ctx.place(t2, { x: m.esquerda, y: A * 0.1 + ctx.medir(t1).h });
  const chip = (txt, cor, x) => {
    const e = ctx.texto('subtitulo', txt, { tam: ctx.tam('h3'), cor: ctx.cor('fundo') });
    Object.assign(e.style, { background: ctx.cor(cor), padding: `${ctx.px(0.01)}px ${ctx.px(0.03)}px`, borderRadius: ctx.px(0.04) + 'px' });
    palco.appendChild(e);
    ctx.place(e, { x, y: A * 0.72 });
    return e;
  };
  chip('A', 'destaque', m.esquerda);
  const vs = ctx.texto('titulo', '×', { tam: ctx.tam('h2'), cor: ctx.cor('texto_suave') });
  palco.appendChild(vs);
  ctx.place(vs, { x: m.esquerda + ctx.px(0.16), y: A * 0.71 });
  chip('B', 'secundaria', m.esquerda + ctx.px(0.26));
  Object.assign(S, { els: [] });
  return { fim_entrada: 0, inicio_saida: 1 };
}
export function seek() {}
