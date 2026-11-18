// arena.js — vídeo explicativo da Arena Adversarial, montado por roteiro/telas.json e sincronizado pela fala.
//
// params: { palavras: [{w,t0,t1}], telas: { trocas: [[["grupo","sete"], "Grupo 7"], …], secoes: [ … ] }, pasta_img }
// Seção: { de: "frase falada", itens: [ … ], janela: {rotulo} (opcional: reserva uma janela 16:9 para gravação) }.
// Item: { tipo, em: "frase falada" (opcional), x, y, w, h (frações da área livre), … }
//   texto   { texto, papel, tam, cor, alinhar }        caixa { titulo, texto, cor, borda, papel_titulo, tam_titulo, tam_texto }
//   seta    { x2, y2, cor }                             chip  { texto, cor, cor_texto }
//   barra   { rotulo, valor, max, cor, sufixo }         img   { arquivo }
//   numero  { valor, casas, sufixo, prefixo, tam, cor } linhas{ series:[{cor,pontos,tracejado,rotulo}], eixo_x:[], ymin, ymax, sufixo }
//   risco   {} (linha que risca o retângulo x,y,w,h)
// A seção ocupa de "de" até o "de" da seguinte; a troca entre seções é um fade da DA.
export const meta = {
  nome: 'arena',
  descricao: 'Vídeo explicativo da Arena Adversarial (Trabalho 2), telas ancoradas na fala com legenda karaokê.',
  dur_padrao: 60,
  formatos: ['horizontal'],
  alfa_padrao: false,
  grao: false,
  params: {
    palavras: { tipo: 'lista', min: 1, obrigatorio: true,
      itens: { tipo: 'objeto', campos: { w: { tipo: 'texto', obrigatorio: true }, t0: { tipo: 'numero', obrigatorio: true }, t1: { tipo: 'numero', obrigatorio: true } } } },
    telas: { tipo: 'objeto', obrigatorio: true },
    pasta_img: { tipo: 'arquivo', obrigatorio: true, descricao: 'qualquer imagem de animacoes/img/ (a cena usa a pasta dela)' },
  },
};

const S = {};
const norm = (w) => String(w).normalize('NFD').replace(/\p{Mn}/gu, '').replace(/[^\p{L}\p{N}-]/gu, '').toLowerCase();

function montarCues(pal, trocas) {
  const tr = (trocas || []).map(([seq, txt]) => [seq.map(norm), txt]);
  const itens = [];
  for (let i = 0; i < pal.length; i++) {
    let feito = false;
    for (const [seq, txt] of tr) {
      if (seq.every((s, k) => pal[i + k] && norm(pal[i + k].w) === s)) {
        itens.push({ w: txt, t0: pal[i].t0, t1: pal[i + seq.length - 1].t1 }); i += seq.length - 1; feito = true; break;
      }
    }
    if (!feito) itens.push({ w: pal[i].w, t0: pal[i].t0, t1: pal[i].t1 });
  }
  const out = [];
  let atual = [];
  for (const it of itens) {
    const ult = atual[atual.length - 1];
    if (atual.length && (atual.length >= 5 || it.t0 - ult.t1 > 0.35 || /[.!?]$/.test(ult.w))) { out.push(atual); atual = []; }
    atual.push(it);
  }
  if (atual.length) out.push(atual);
  return out;
}

export function build(palco, p, ctx) {
  const L = ctx.L, A = ctx.A;
  const pal = p.palavras;
  const nw = pal.map((x) => norm(x.w));
  const achar = (frase, depois = 0) => {
    const seq = String(frase).split(/\s+/).map(norm).filter(Boolean);
    for (let i = 0; i < pal.length; i++) {
      if (pal[i].t0 < depois - 1e-6) continue;
      if (seq.every((s, k) => nw[i + k] === s)) return pal[i].t0;
    }
    throw new Error(`âncora "${frase}" (depois de ${depois.toFixed(2)} s) não está na fala`);
  };
  const pasta = p.pasta_img.slice(0, p.pasta_img.lastIndexOf('/') + 1);
  const area = ctx.area_livre(undefined, { legenda: true });
  const fx = (f) => area.x + f * area.w;
  const fy = (f) => area.y + f * area.h;

  const fundo = ctx.el('div');
  Object.assign(fundo.style, { position: 'absolute', inset: '0', background: ctx.cor('fundo') });
  palco.appendChild(fundo);

  const secoes = [];
  let ultimo = 0;
  const lista = p.telas.secoes;
  for (let si = 0; si < lista.length; si++) {
    const sec = lista[si];
    const t0 = si === 0 ? 0 : achar(sec.de, ultimo);
    ultimo = t0;
    const camada = ctx.el('div');
    Object.assign(camada.style, { position: 'absolute', inset: '0' });
    palco.appendChild(camada);
    const itens = [];
    let depois = t0;
    let janela = null;
    if (sec.janela) {
      const h = area.h * 0.9, w = Math.min(area.w, (h * 16) / 9);
      janela = { x: Math.round(L / 2 - w / 2), y: Math.round(area.y + area.h * 0.08), w: Math.round(w), h: Math.round(h) };
      const moldura = ctx.el('div');
      Object.assign(moldura.style, { position: 'absolute', left: janela.x - ctx.traco + 'px', top: janela.y - ctx.traco + 'px',
        width: janela.w + 'px', height: janela.h + 'px', border: `${ctx.traco}px solid ${ctx.cor('texto_suave')}`, borderRadius: ctx.raio + 'px' });
      camada.appendChild(moldura);
      const rot = ctx.texto('subtitulo', sec.janela.rotulo, { tam: ctx.tam('nota'), cor: ctx.cor('primaria') });
      camada.appendChild(rot);
      ctx.place(rot, { x: janela.x, y: area.y });
      itens.push({ el: rot, t: t0, tipo: 'texto' });
    }
    for (const it of sec.itens || []) {
      const t = it.em ? achar(it.em, depois) : t0;
      if (it.em && it.sequencia !== false) depois = t;
      const x = fx(it.x ?? 0), y = fy(it.y ?? 0), w = (it.w ?? 1) * area.w, h = (it.h ?? 0) * area.h;
      const reg = { t, tipo: it.tipo, it };
      if (it.tipo === 'texto') {
        const e = ctx.texto(it.papel || 'corpo', it.texto, { tam: ctx.tam(it.tam || 'corpo'), cor: ctx.cor(it.cor || 'texto'), maxW: w, alinhar: it.alinhar || 'esquerda', wrap: true });
        camada.appendChild(e);
        const m = ctx.medir(e);
        const xx = it.alinhar === 'centro' ? x + (w - m.w) / 2 : it.alinhar === 'direita' ? x + w - m.w : x;
        ctx.place(e, { x: xx, y });
        reg.el = e;
      } else if (it.tipo === 'caixa' || it.tipo === 'chip') {
        const e = ctx.el('div');
        const chip = it.tipo === 'chip';
        Object.assign(e.style, { position: 'absolute', boxSizing: 'border-box', background: ctx.cor(it.cor || 'superficie'),
          border: `${ctx.traco}px solid ${ctx.cor(it.borda || (chip ? it.cor || 'superficie' : 'superficie'))}`,
          borderRadius: (chip ? ctx.px(0.03) : ctx.raio) + 'px', padding: `${ctx.px(chip ? 0.008 : 0.02)}px ${ctx.px(chip ? 0.018 : 0.024)}px` });
        if (!chip) Object.assign(e.style, { width: w + 'px', height: h ? h + 'px' : 'auto' });
        const corT = it.cor_texto ? ctx.cor(it.cor_texto) : ctx.cor(ctx.legivel(it.cor || 'superficie', 'texto', 'fundo'));
        if (it.titulo) {
          const tt = ctx.texto(it.papel_titulo || 'titulo', it.titulo, { tam: ctx.tam(it.tam_titulo || (chip ? 'nota' : 'h3')), cor: it.cor_titulo ? ctx.cor(it.cor_titulo) : corT, maxW: chip ? null : w - ctx.px(0.05), wrap: true });
          tt.style.position = 'relative';
          e.appendChild(tt);
        }
        for (const [li, linhaTxt] of (it.texto ? String(it.texto).split('\n') : []).entries()) {
          const tx = ctx.texto(chip ? 'subtitulo' : 'corpo', linhaTxt, { tam: ctx.tam(it.tam_texto || (chip ? 'nota' : 'corpo')), cor: chip ? corT : ctx.cor(it.cor_corpo || 'texto_suave'), maxW: chip ? null : w - ctx.px(0.05), wrap: !chip });
          tx.style.position = 'relative';
          if (it.titulo || li) tx.style.marginTop = ctx.px(li ? 0.004 : 0.008) + 'px';
          e.appendChild(tx);
        }
        camada.appendChild(e);
        ctx.place(e, { x, y });
        reg.el = e;
      } else if (it.tipo === 'seta' || it.tipo === 'risco') {
        const x2 = it.tipo === 'risco' ? x + w : fx(it.x2), y2 = it.tipo === 'risco' ? y + h / 2 : fy(it.y2);
        const yy = it.tipo === 'risco' ? y + h / 2 : y;
        const comp = Math.hypot(x2 - x, y2 - yy);
        const cor = ctx.cor(it.cor || (it.tipo === 'risco' ? 'negativo' : 'texto_suave'));
        const ponta = it.tipo === 'seta' ? ctx.svg('path', { d: `M ${x2} ${y2} l ${-ctx.px(0.016)} ${-ctx.px(0.009)} M ${x2} ${y2} l ${-ctx.px(0.016)} ${ctx.px(0.009)}`,
          stroke: cor, 'stroke-width': ctx.traco * 1.4, fill: 'none', 'stroke-linecap': 'round', transform: `rotate(${(Math.atan2(y2 - yy, x2 - x) * 180) / Math.PI} ${x2} ${y2})` }) : null;
        const linha = ctx.svg('line', { x1: x, y1: yy, x2, y2, stroke: cor, 'stroke-width': ctx.traco * (it.tipo === 'risco' ? 1.6 : 1.4), 'stroke-linecap': 'round', 'stroke-dasharray': comp, 'stroke-dashoffset': comp });
        const svg = ctx.svg('svg', { width: L, height: A, style: 'position:absolute;left:0;top:0;overflow:visible' }, ponta ? [linha, ponta] : [linha]);
        camada.appendChild(svg);
        Object.assign(reg, { linha, ponta, comp });
      } else if (it.tipo === 'barra') {
        const e = ctx.el('div');
        Object.assign(e.style, { position: 'absolute', left: x + 'px', top: y + 'px', width: w + 'px' });
        const rot = ctx.texto('corpo', it.rotulo, { tam: ctx.tam(it.tam || 'corpo'), cor: ctx.cor('texto') });
        rot.style.position = 'relative';
        const trilho = ctx.el('div');
        const altura = ctx.px(0.016);
        Object.assign(trilho.style, { position: 'relative', height: altura + 'px', marginTop: ctx.px(0.006) + 'px', background: ctx.cor('superficie'), borderRadius: altura / 2 + 'px', width: w * 0.82 + 'px' });
        const enche = ctx.el('div');
        Object.assign(enche.style, { position: 'absolute', left: '0', top: '0', bottom: '0', width: '0px', background: ctx.cor(it.cor || 'primaria'), borderRadius: altura / 2 + 'px' });
        trilho.appendChild(enche);
        const val = ctx.texto('dados', '0%', { tam: ctx.tam(it.tam || 'corpo'), cor: ctx.cor('texto') });
        Object.assign(val.style, { position: 'absolute', left: w * 0.85 + 'px', top: ctx.px(0.04) + 'px' });
        e.append(rot, trilho, val);
        camada.appendChild(e);
        Object.assign(reg, { el: e, enche, val, larg: w * 0.82 });
      } else if (it.tipo === 'numero') {
        const e = ctx.texto(it.papel || 'titulo', '0', { tam: ctx.tam(it.tam || 'display'), cor: ctx.cor(it.cor || 'primaria') });
        camada.appendChild(e);
        ctx.place(e, { x, y });
        reg.el = e;
      } else if (it.tipo === 'img') {
        const e = ctx.el('img');
        e.setAttribute('data-da-livre', 'captura de tela da Arena');
        e.src = pasta + it.arquivo;
        Object.assign(e.style, { position: 'absolute', left: x + 'px', top: y + 'px', width: w + 'px', height: h + 'px', objectFit: 'contain', objectPosition: it.ancora || 'center' });
        camada.appendChild(e);
        reg.el = e;
      } else if (it.tipo === 'linhas') {
        const ymin = it.ymin ?? 0, ymax = it.ymax ?? 100;
        const n = it.eixo_x.length;
        const px = (i) => x + (i / Math.max(1, n - 1)) * w;
        const py = (v) => y + h - ((v - ymin) / (ymax - ymin)) * h;
        const filhos = [ctx.svg('line', { x1: x, y1: y + h, x2: x + w, y2: y + h, stroke: ctx.cor('texto_suave'), 'stroke-width': ctx.traco })];
        const series = [];
        for (const s of it.series) {
          const pts = s.pontos.map((v, i) => `${px(i)},${py(v)}`).join(' ');
          const comp = s.pontos.reduce((acc, v, i) => (i ? acc + Math.hypot(px(i) - px(i - 1), py(v) - py(s.pontos[i - 1])) : 0), 0);
          const pl = ctx.svg('polyline', { points: pts, fill: 'none', stroke: ctx.cor(s.cor), 'stroke-width': ctx.traco * 2, 'stroke-linejoin': 'round',
            'stroke-dasharray': s.tracejado ? `${ctx.px(0.012)} ${ctx.px(0.008)}` : `${comp} ${comp}`, 'stroke-dashoffset': s.tracejado ? 0 : comp });
          filhos.push(pl);
          series.push({ pl, comp, tracejado: s.tracejado });
        }
        const svg = ctx.svg('svg', { width: L, height: A, style: 'position:absolute;left:0;top:0;overflow:visible' }, filhos);
        camada.appendChild(svg);
        const rotulos = it.eixo_x.map((r, i) => {
          const e = ctx.texto('dados', r, { tam: ctx.tam('nota'), cor: ctx.cor('texto_suave') });
          camada.appendChild(e);
          const m = ctx.medir(e);
          ctx.place(e, { x: px(i) - m.w / 2, y: y + h + ctx.px(0.01) });
          return e;
        });
        const legendas = it.series.map((s, k) => {
          const e = ctx.texto('dados', s.rotulo + ` ${s.pontos[s.pontos.length - 1]}${it.sufixo || ''}`, { tam: ctx.tam('nota'), cor: ctx.cor(s.cor) });
          camada.appendChild(e);
          ctx.place(e, { x: x + w + ctx.px(0.012), y: py(s.pontos[s.pontos.length - 1]) - ctx.px(0.012) + (s.desloc || 0) * area.h });
          return e;
        });
        Object.assign(reg, { svg, series, extras: [...rotulos, ...legendas] });
      }
      itens.push(reg);
    }
    secoes.push({ t0, camada, itens, janela });
  }
  for (let i = 0; i < secoes.length; i++) secoes[i].t1 = i + 1 < secoes.length ? secoes[i + 1].t0 : ctx.duracao + 1;

  // Legenda karaokê (bloco legenda da DA)
  const cues = montarCues(pal, p.telas.trocas);
  const leg = cues.map((c) => {
    const l = ctx.kit.legenda(c.map((x) => x.w), { falada: -1, plataforma: 'quadro', x: L / 2, y: A * 0.86, largura: L * 0.78, maxLinhas: 2 });
    palco.appendChild(l.el);
    l.posicionar();
    return { l, palavras: c, t0: c[0].t0, t1: c[c.length - 1].t1 };
  });

  for (let i = 0; i < leg.length; i++) leg[i].fim = Math.min(leg[i].t1 + 0.25, i + 1 < leg.length ? leg[i + 1].t0 - 0.06 : leg[i].t1 + 0.25);
  Object.assign(S, { ctx, secoes, leg });
  const jan = secoes.find((s) => s.janela);
  return { fim_entrada: 0.5, inicio_saida: +(ctx.duracao - 0.5).toFixed(3), secoes: secoes.map((s) => +s.t0.toFixed(3)),
    janelas: secoes.filter((s) => s.janela).map((s) => ({ t0: +s.t0.toFixed(3), t1: +s.t1.toFixed(3), ...s.janela })), janela: jan ? jan.janela : null };
}

export function seek(tt) {
  const { ctx, secoes, leg } = S;
  const tr = ctx.dur('media');
  for (const s of secoes) {
    const vis = tt >= s.t0 - tr && tt < s.t1 + 0.001;
    s.camada.style.display = vis ? 'block' : 'none';
    s.camada.style.opacity = String(ctx.prog(tt, s.t0 - tr, tr, 'suave') * (1 - ctx.prog(tt, s.t1 - tr, tr, 'suave')));
    if (!vis) continue;
    for (const r of s.itens) {
      const pe = ctx.prog(tt, r.t, ctx.dur('longa'), 'entrada');
      const it = r.it || {};
      if (r.tipo === 'texto') ctx.entrada(r.el, ctx.prog(tt, r.t, ctx.dur('longa') * 1.4, 'linear'), it.entrada || 'digita');
      else if (r.tipo === 'caixa' || r.tipo === 'chip' || r.tipo === 'img') ctx.entrada(r.el, pe, it.entrada || 'sobe');
      else if (r.tipo === 'seta' || r.tipo === 'risco') {
        const pp = ctx.prog(tt, r.t, ctx.dur('longa'), 'enfase');
        r.linha.setAttribute('stroke-dashoffset', String(r.comp * (1 - pp)));
        if (r.ponta) r.ponta.setAttribute('opacity', pp > 0.95 ? '1' : '0');
      } else if (r.tipo === 'barra') {
        const pp = ctx.prog(tt, r.t, ctx.dur('longa') * 1.6, 'enfase');
        const v = (it.valor / (it.max || 1)) * pp;
        r.enche.style.width = Math.max(0, r.larg * v) + 'px';
        (r.val.firstElementChild || r.val).textContent = `${Math.round(it.valor * pp)}${it.sufixo ?? '%'}`;
        ctx.entrada(r.el, pe, 'fade');
      } else if (r.tipo === 'numero') {
        const pp = ctx.prog(tt, r.t, ctx.dur('longa') * 2.2, 'enfase');
        const v = it.valor * pp;
        const txt = `${it.prefixo || ''}${v.toLocaleString('pt-BR', { minimumFractionDigits: it.casas || 0, maximumFractionDigits: it.casas || 0 })}${it.sufixo || ''}`;
        const alvo = r.el.firstElementChild || r.el;
        alvo.textContent = txt;
        ctx.entrada(r.el, pe, 'fade');
      } else if (r.tipo === 'linhas') {
        const pp = ctx.prog(tt, r.t, ctx.dur('longa') * 3, 'suave');
        for (const s of r.series) {
          if (s.tracejado) s.pl.setAttribute('opacity', String(pp));
          else s.pl.setAttribute('stroke-dashoffset', String(s.comp * (1 - pp)));
        }
        r.svg.style.opacity = String(Math.min(1, pp * 4));
        for (const e of r.extras) e.style.opacity = String(ctx.prog(tt, r.t + ctx.dur('longa') * 2, ctx.dur('media'), 'suave'));
      }
    }
  }
  for (const { l, palavras, t0, fim } of leg) {
    const on = tt >= t0 - 0.05 && tt < fim;
    l.el.style.display = on ? 'block' : 'none';
    if (!on) continue;
    let i = -1;
    for (let k = 0; k < palavras.length; k++) if (tt >= palavras[k].t0 - 0.02) i = k;
    l.seek(i);
  }
}

export function ancoras() {
  const out = [];
  for (const s of S.secoes) {
    out.push({ t: +s.t0.toFixed(3), nome: 'secao', tipo: 'entrada' });
    for (const r of s.itens) if (r.t > s.t0 + 0.05) out.push({ t: +r.t.toFixed(3), nome: r.tipo, tipo: r.tipo === 'texto' ? 'texto' : 'entrada' });
  }
  return out;
}
