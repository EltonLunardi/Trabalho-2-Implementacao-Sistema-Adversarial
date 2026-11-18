// Arena Adversarial — cliente ao vivo (visão do operador).
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const SUIT = { c: '♣', d: '♦', h: '♥', s: '♠' };
const pct = (x) => (x === null || x === undefined || Number.isNaN(x) ? '—' : `${Math.round(x * 100)}%`);
const fmt = (n) => (n === null || n === undefined ? '—' : Number(n).toLocaleString('pt-BR'));
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const ETAPA = { pre_flop: 'pré', flop: 'flop', turn: 'turn', river: 'river' };
const ETAPA_LONGA = { pre_flop: 'Pré-flop', flop: 'Flop', turn: 'Turn', river: 'River' };
const CAT = { valor: 'valor', blefe: 'blefe', roubo: 'roubo', armadilha: 'armadilha', call: 'pagar', check: 'check', fold: 'desistir', pressao: 'pressão' };
const TIPO_ADAPT = { regra_ativada: 'nova postura', regra_desativada: 'postura cancelada', mudanca_detectada: 'mudança percebida', contexto: 'contexto', treinador: 'treinador Llama' };

const S = {
  config: null,
  perfis: [],
  running: true,
  painel: null,
  adaptacoes: [],
  scope: 'atual',
  sel: null,
  anTab: 'stats',
  thoughts: { A: null, B: null },
  ws: null,
  live: true,
};
const T = { cartas: { A: [], B: [] }, mesa: [], saldos: { A: 0, B: 0 }, contrib: { A: 0, B: 0 }, pote: 0, bubble: { A: null, B: null }, vis: { A: false, B: false } };
const charts = {};

// ───────────────────────── Conexão ─────────────────────────
function connect() {
  const ws = new WebSocket(`${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/ws`);
  S.ws = ws;
  ws.onopen = () => setConn(true);
  ws.onclose = () => {
    setConn(false);
    setTimeout(connect, 1500);
  };
  ws.onmessage = (ev) => {
    let m;
    try { m = JSON.parse(ev.data); } catch { return; }
    handle(m);
  };
}
function setConn(on) {
  const c = $('#conn');
  c.dataset.state = on ? 'on' : 'off';
  c.textContent = on ? 'Ao vivo' : 'Reconectando…';
}
function send(cmd) {
  if (S.ws?.readyState === 1) S.ws.send(JSON.stringify(cmd));
}

// ───────────────────────── Mensagens ─────────────────────────
function handle(m, live = true) {
  switch (m.t) {
    case 'snapshot': {
      S.config = m.config;
      S.perfis = m.perfis;
      S.running = m.running;
      S.painel = m.painel;
      S.adaptacoes = m.adaptacoes ?? [];
      $('#feed').innerHTML = '';
      S.live = false;
      for (const r of m.recentes ?? []) handle(r, false);
      const ultimo = (m.recentes ?? []).filter((r) => r.t === 'evento').at(-1);
      if (m.mesa && ultimo?.ev.seq !== m.mesa.ev.seq) onEvento(m.mesa, false);
      S.live = true;
      fillConfig();
      renderAll();
      break;
    }
    case 'evento': onEvento(m, live); break;
    case 'pensamento':
      S.thoughts[m.agente] = m;
      if (!isTurbo() || !live) feedRow({ k: 'pensamento', mao: m.mao, etapa: m.etapa, who: m.agente, txt: `${CAT[m.categoria] ?? m.categoria}: ${m.raciocinio}` }, live);
      schedule('thoughts');
      break;
    case 'adaptacao':
      if (live) {
        S.adaptacoes.push(m.a);
        if (S.adaptacoes.length > 1500) S.adaptacoes.shift();
      }
      feedRow({ k: 'adaptacao', mao: m.a.mao, who: m.a.agente, txt: m.a.resposta }, live);
      schedule('influence');
      break;
    case 'painel':
      S.painel = m.painel;
      S.running = m.painel.running;
      schedule('header', 'analysis', 'seats', 'influence');
      break;
    case 'config':
      S.config = m.config;
      S.running = m.running;
      schedule('header');
      break;
    case 'partida_inicio':
      if (live) $('#feed').innerHTML = '';
      T.banner = null;
      feedRow({ k: 'sistema', txt: `Partida ${m.partida} começou. Conhecimento: A sobre B ${pct(m.conhecimento.A)}, B sobre A ${pct(m.conhecimento.B)}.` }, live);
      break;
    case 'nivel':
      feedRow({ k: 'sistema', mao: m.mao, txt: `Blinds sobem para ${fmt(m.sb)}/${fmt(m.bb)} (nível ${m.nivel + 1}).` }, live);
      break;
    case 'partida_fim':
      T.banner = { titulo: `${m.resumo.vencedor} venceu a partida ${m.resumo.partida}`, linha: `${m.resumo.maos} mãos · blinds finais ${m.resumo.blindsFinais}`, link: m.resumo.relatorio };
      feedRow({ k: 'sistema', txt: `Partida ${m.resumo.partida} encerrada: ${m.resumo.vencedor} venceu em ${m.resumo.maos} mãos. Relatório gerado.` }, live);
      schedule('table');
      break;
    case 'treinador':
      feedRow({ k: 'sistema', txt: m.r.ok ? `Treinador Llama sugeriu ajustes para ${m.agente} (${(m.r.ms / 1000).toFixed(1)} s). Entram na próxima mão.` : `Treinador Llama falhou para ${m.agente}: ${m.r.erro}` }, live);
      break;
    case 'relatorio_parcial':
      S.parcial = m.relatorio;
      feedRow({ k: 'sistema', txt: `Relatório parcial da partida ${m.partida} gerado.` }, live);
      if (S.anTab === 'matches') renderAnalysis();
      break;
    case 'alerta':
      feedRow({ k: 'sistema', txt: m.texto }, live);
      break;
    case 'memoria_apagada':
      S.adaptacoes = [];
      $('#feed').innerHTML = '';
      feedRow({ k: 'sistema', txt: 'Memória apagada: os agentes recomeçam sem conhecer um ao outro.' }, live);
      schedule('influence');
      break;
  }
}

function onEvento(m, live) {
  const e = m.ev;
  const info = m.info;
  const st = e.estado;
  Object.assign(T, { partida: info.partida, mao: info.mao, botao: info.botao, sb: info.sb, bb: info.bb, nivel: info.nivel });
  T.saldos = st.saldos;
  T.contrib = st.contrib;
  T.pote = st.pote;
  T.vez = st.vez;
  T.fase = st.fase;
  T.etapa = st.etapa;
  T.mesa = st.mesa;
  if (!live) {
    // Reconstrução a partir do último estado conhecido.
    T.cartas = info.cartas;
    T.vis = { A: true, B: true };
  }
  switch (e.tipo) {
    case 'inicio_mao':
      Object.assign(T, { cartas: info.cartas, vis: { A: false, B: false }, bubble: { A: null, B: null }, showdown: null, banner: null, folded: null, mesa: [] });
      feedRow({ k: 'sistema', mao: e.mao, txt: `Mão ${e.mao} · botão ${e.dados.botao} · blinds ${fmt(e.dados.sb)}/${fmt(e.dados.bb)}` }, live);
      break;
    case 'cartas_privadas':
      T.vis[e.privadoPara] = true;
      T.dealt = live;
      break;
    case 'blind':
      T.bubble[e.agente] = { txt: `${e.dados.blind === 'small' ? 'SB' : 'BB'} ${fmt(e.dados.valor)}`, k: 'blind' };
      break;
    case 'acao': {
      const c = e.dados.classificacao;
      const aggr = c.startsWith('bet') || c.startsWith('raise');
      const allin = c.includes('all-in');
      const nome = { fold: 'Fold', check: 'Check', call: 'Call', bet: 'Bet', raise: 'Raise', all_in: 'All-in' }[e.dados.tipo] ?? e.dados.tipo;
      const txt = allin ? `All-in ${fmt(e.dados.total_etapa)}` : aggr ? `${nome} ${fmt(e.dados.total_etapa)}` : e.dados.tipo === 'call' ? `Call ${fmt(e.dados.valor)}` : nome;
      T.bubble[e.agente] = { txt, k: allin ? 'allin' : aggr ? 'aggr' : e.dados.tipo === 'fold' ? 'fold' : e.dados.tipo === 'call' ? 'call' : 'check' };
      if (e.dados.tipo === 'fold') T.folded = e.agente;
      feedRow({ k: 'acao', mao: e.mao, etapa: e.etapa, who: e.agente, txt: c.replace(' — não reabre aumento', ' (não reabre)') + (aggr ? ` para ${fmt(e.dados.total_etapa)}` : ''), v: e.dados.valor || '' }, live);
      break;
    }
    case 'nova_etapa':
      T.bubble = { A: null, B: null };
      T.flipFrom = live ? T.mesa.length - e.dados.cartas.length : 99;
      feedRow({ k: 'sistema', mao: e.mao, txt: `${ETAPA_LONGA[e.etapa]}: ${e.dados.cartas.map(cardText).join(' ')}${e.dados.runout ? ' (sem apostas)' : ''}` }, live);
      break;
    case 'runout':
      feedRow({ k: 'sistema', mao: e.mao, txt: 'All-in pago: cartas reveladas, a mesa abre sem novas apostas.' }, live);
      break;
    case 'devolucao':
      feedRow({ k: 'acao', mao: e.mao, etapa: e.etapa, who: e.agente, txt: 'devolução da parte não coberta', v: e.dados.valor }, live);
      break;
    case 'showdown':
      T.showdown = e.dados;
      T.bubble = { A: null, B: null };
      feedRow({ k: 'sistema', mao: e.mao, txt: `Showdown: A ${e.dados.maos.A.descricao} × B ${e.dados.maos.B.descricao}` }, live);
      break;
    case 'fim_mao': {
      const d = e.dados;
      const w = d.vencedor === 'empate' ? 'Empate' : `${d.vencedor} vence ${fmt(d.pote)}`;
      const como = d.motivo === 'fold' ? 'por desistência' : T.showdown ? `com ${T.showdown.maos[d.vencedor]?.descricao ?? 'pote dividido'}` : '';
      T.banner = { titulo: w, linha: como, mao: true };
      feedRow({ k: 'sistema', mao: e.mao, txt: `${w} ${como}`.trim() }, live);
      break;
    }
  }
  schedule('table', 'header');
}

// ───────────────────────── Renderização agendada ─────────────────────────
const pending = new Set();
let raf = 0;
function schedule(...parts) {
  for (const p of parts) pending.add(p);
  if (!raf) raf = requestAnimationFrame(flush);
}
function flush() {
  raf = 0;
  const p = new Set(pending);
  pending.clear();
  if (p.has('header')) renderHeader();
  if (p.has('table') || p.has('seats')) renderTable();
  if (p.has('thoughts')) renderThoughts();
  if (p.has('influence')) renderInfluence();
  if (p.has('analysis')) renderAnalysis();
}
function renderAll() {
  schedule('header', 'table', 'thoughts', 'influence', 'analysis');
}
const isTurbo = () => S.config?.velocidade === 'turbo';

// ───────────────────────── Cabeçalho e controles ─────────────────────────
function renderHeader() {
  const P = S.painel;
  if (!P || !S.config) return;
  $('#mi-partida').textContent = P.partida || '—';
  $('#mi-mao').textContent = T.mao ?? P.mao ?? '—';
  const [sb, bb] = T.sb ? [T.sb, T.bb] : P.blinds;
  $('#mi-blinds').textContent = `${fmt(sb)}/${fmt(bb)}`;
  $('#mi-sobe').textContent = P.emPartida ? (P.maosParaSubir === 0 ? '· sobe na próxima mão' : `· sobe em ${P.maosParaSubir + 1} mãos`) : '';
  const wa = P.partidas.filter((p) => p.vencedor === 'A').length;
  const wb = P.partidas.filter((p) => p.vencedor === 'B').length;
  $('#mi-placar').innerHTML = `<span style="color:var(--a)">A ${wa}</span> × <span style="color:var(--b)">${wb} B</span>`;
  const inv = $('#mi-inv');
  const ok = P.invariantes.violacoes === 0;
  inv.className = `inv ${ok ? 'ok' : 'bad'}`;
  inv.innerHTML = `<svg aria-hidden="true"><use href="#${ok ? 'i-check' : 'i-alert'}"/></svg>${fmt(S.config.stackInicial * 2)}`;
  inv.title = `${fmt(P.invariantes.checagens)} checagens de conservação, ${P.invariantes.violacoes} violações, ${P.invariantes.rejeicoes} ações rejeitadas`;
  const play = $('#btn-play');
  play.querySelector('use').setAttribute('href', S.running ? '#i-pause' : '#i-play');
  play.querySelector('span').textContent = S.running ? 'Pausar' : 'Continuar';
  for (const b of $$('#speed button')) b.setAttribute('aria-checked', String(b.dataset.v === S.config.velocidade));
  document.body.classList.toggle('turbo', isTurbo());
}

function fillConfig() {
  const f = $('#config');
  const c = S.config;
  for (const sel of ['perfilA', 'perfilB']) {
    f[sel].innerHTML = S.perfis.map((p) => `<option value="${p.id}" title="${esc(p.descricao)}">${esc(p.nome)}</option>`).join('');
  }
  f.stackInicial.value = c.stackInicial;
  f.maosPorNivel.value = c.maosPorNivel;
  f.seed.value = c.seed;
  f.autoProxima.checked = c.autoProxima;
  f.perfilA.value = c.perfilA;
  f.perfilB.value = c.perfilB;
  f.treinadorAtivo.checked = c.treinador.ativo;
  f.modelo.value = c.treinador.modelo;
  const tr = S.painel?.treinador;
  $('#coach-hint').textContent = tr?.online ? `Ollama online · modelos: ${tr.modelos.join(', ') || 'nenhum'}` : 'Ollama offline: inicie com “ollama serve”. Sem ele, só as heurísticas adaptam.';
}

function bindControls() {
  $('#btn-play').onclick = () => send({ cmd: S.running ? 'pause' : 'play' });
  $('#btn-step').onclick = () => send({ cmd: 'step' });
  for (const b of $$('#speed button')) b.onclick = () => send({ cmd: 'velocidade', valor: b.dataset.v });
  $('#btn-config').onclick = () => {
    const f = $('#config');
    f.hidden = !f.hidden;
    $('#btn-config').setAttribute('aria-expanded', String(!f.hidden));
    if (!f.hidden) fillConfig();
  };
  $('#config').onsubmit = (ev) => {
    ev.preventDefault();
    const f = ev.target;
    send({
      cmd: 'config',
      valor: {
        stackInicial: Number(f.stackInicial.value),
        maosPorNivel: Number(f.maosPorNivel.value),
        seed: Number(f.seed.value),
        autoProxima: f.autoProxima.checked,
        perfilA: f.perfilA.value,
        perfilB: f.perfilB.value,
        treinadorAtivo: f.treinadorAtivo.checked,
        modelo: f.modelo.value.trim(),
      },
    });
    f.hidden = true;
    $('#btn-config').setAttribute('aria-expanded', 'false');
  };
  $('#btn-nova').onclick = () => send({ cmd: 'nova_partida' });
  $('#btn-apagar').onclick = () => {
    if (confirm('Apagar a memória dos dois agentes? Eles voltam a não se conhecer e o histórico de partidas é zerado.')) send({ cmd: 'apagar_memoria' });
  };
  tabs('#feed-filter', (b) => ($('.feed').dataset.f = b.dataset.f));
  tabs('#inf-scope', (b) => { S.scope = b.dataset.s; renderInfluence(); });
  tabs('#an-tabs', (b) => { S.anTab = b.dataset.t; renderAnalysis(); });
}
function tabs(sel, fn) {
  for (const b of $$(`${sel} button`)) {
    b.onclick = () => {
      for (const o of $$(`${sel} button`)) o.setAttribute('aria-selected', String(o === b));
      fn(b);
    };
  }
}

// ───────────────────────── Mesa ─────────────────────────
function cardText(c) {
  return (c[0] === 'T' ? '10' : c[0]) + SUIT[c[1]];
}
function cardEl(c, cls = '') {
  if (!c) return `<div class="card back ${cls}"></div>`;
  const red = c[1] === 'h' || c[1] === 'd';
  const r = c[0] === 'T' ? '10' : c[0];
  return `<div class="card ${red ? 'red' : ''} ${cls}" aria-label="${cardText(c)}"><span class="r">${r}</span><span class="s1">${SUIT[c[1]]}</span><span class="s2">${SUIT[c[1]]}</span></div>`;
}
function chipsHtml(amount, bb) {
  if (!amount) return '';
  const n = Math.min(7, Math.max(1, Math.ceil(Math.log2(amount / Math.max(1, bb) + 1) * 1.6)));
  const cores = ['#d64541', '#2e9d63', '#2f6fd6', '#23262c', '#9b59b6', '#e5b94e', '#d64541'];
  return `<span class="chips" aria-hidden="true">${Array.from({ length: n }, (_, i) => `<span class="chip" style="--c:${cores[i]}"></span>`).join('')}</span>`;
}

const prevBet = { A: 0, B: 0 };
let lastBoardKey = '';
const lastHoleKey = { A: '', B: '' };

function renderTable() {
  const P = S.painel;
  for (const s of ['A', 'B']) {
    const seat = $(`#seat-${s}`);
    const ag = P?.agentes?.[s];
    const perfil = S.perfis.find((p) => p.id === ag?.perfil)?.nome ?? '';
    const opp = s === 'A' ? 'B' : 'A';
    const postura = ag ? (ag.modoCurto ? 'modo push/fold' : ag.ativas[0] ?? 'sem postura especial') : '';
    const sd = T.showdown?.maos?.[s];
    const best = new Set(sd?.melhor ?? []);
    const vencedor = T.showdown?.vencedor;
    const cards = T.vis[s] ? T.cartas?.[s] ?? [] : [];
    const holeKey = `${T.partida}-${T.mao}-${cards.join('')}-${sd ? 'sd' : ''}-${T.folded === s}`;
    let hole = seat.querySelector('.hole');
    if (!hole || lastHoleKey[s] !== holeKey) {
      const animate = T.dealt && S.live && !sd && lastHoleKey[s].split('-').slice(0, 2).join('-') !== `${T.partida}-${T.mao}`;
      const cls = (c) => [animate ? 'deal' : '', sd && (vencedor === s || vencedor === 'empate') && best.has(c) ? 'win' : '', T.folded === s ? 'dim' : ''].join(' ');
      lastHoleKey[s] = holeKey;
      seat.innerHTML = `
        <div class="hole">${cards.map((c, i) => cardEl(c, cls(c)).replace('class="card', `style="animation-delay:${i * 90}ms" class="card`)).join('')}</div>
        <div class="plate">
          <div class="avatar">${s}</div>
          <div class="pinfo"><span class="pname">${s} · ${esc(perfil)}</span><span class="pstack"></span><span class="posture"></span></div>
          <span class="dealer" hidden>D</span>
          <span class="bubble-slot"></span>
        </div>`;
    }
    seat.querySelector('.pstack').textContent = fmt(T.saldos?.[s] ?? P?.saldos?.[s]);
    seat.querySelector('.posture').textContent = ag ? `${postura} · conhece ${opp} ${pct(ag.conhecimento)}` : '';
    seat.querySelector('.dealer').hidden = T.botao !== s;
    seat.classList.toggle('turn', T.vez === s);
    seat.classList.toggle('out', (T.saldos?.[s] ?? 1) === 0 && !T.pote);
    const b = T.bubble[s];
    const slot = seat.querySelector('.bubble-slot');
    const bk = b ? `${b.k}|${b.txt}` : '';
    if (slot.dataset.k !== bk) {
      slot.dataset.k = bk;
      slot.innerHTML = b ? `<span class="bubble" data-k="${b.k}">${esc(b.txt)}</span>` : '';
    }
    if (sd) seat.querySelector('.posture').textContent = sd.descricao;

    // Apostas na frente do assento
    const bet = $(`#bet-${s}`);
    const v = T.contrib?.[s] ?? 0;
    if (v > 0) {
      bet.classList.remove('collect');
      bet.innerHTML = `${chipsHtml(v, T.bb)}<span>${fmt(v)}</span>`;
    } else if (prevBet[s] > 0 && S.live) {
      bet.classList.add('collect');
      setTimeout(() => { if (!(T.contrib?.[s] > 0)) { bet.innerHTML = ''; bet.classList.remove('collect'); } }, 480);
    } else if (!v) bet.innerHTML = '';
    prevBet[s] = v;
  }

  // Mesa comunitária
  const key = `${T.partida}-${T.mao}-${(T.mesa ?? []).join('')}-${T.showdown ? 1 : 0}`;
  if (key !== lastBoardKey) {
    lastBoardKey = key;
    const best = new Set([...(T.showdown?.maos?.A?.melhor ?? []), ...(T.showdown?.maos?.B?.melhor ?? [])]);
    const w = T.showdown?.vencedor;
    const winBest = new Set(w && w !== 'empate' ? T.showdown.maos[w].melhor : [...best]);
    const slots = [];
    for (let i = 0; i < 5; i++) {
      const c = T.mesa?.[i];
      if (!c) slots.push('<div class="slot"></div>');
      else slots.push(cardEl(c, [S.live && i >= (T.flipFrom ?? 99) ? 'flip' : '', T.showdown && winBest.has(c) ? 'win' : ''].join(' ')).replace('class="card', `style="animation-delay:${Math.max(0, i - (T.flipFrom ?? 0)) * 110}ms" class="card`));
    }
    $('#board').innerHTML = slots.join('');
    T.flipFrom = 99;
  }
  $('#pot-v').textContent = fmt(T.pote);
  $('#pot .chips').outerHTML = chipsHtml(Math.max(T.pote, 1), T.bb || 10) || '<span class="chips"></span>';
  $('#street').textContent = T.fase === 'RUNOUT' ? 'Runout' : T.fase === 'REVELACAO' || T.showdown ? 'Showdown' : ETAPA_LONGA[T.etapa] ?? '';

  // Faixa de resultado
  const ban = $('#banner');
  if (T.banner) {
    const html = `<b>${esc(T.banner.titulo)}</b><span>${esc(T.banner.linha ?? '')}</span>${T.banner.link ? `<br><a href="relatorio.html?f=${encodeURIComponent(T.banner.link)}" target="_blank" rel="noopener">Abrir relatório da partida</a>` : ''}`;
    if (ban.dataset.h !== html) {
      ban.dataset.h = html;
      ban.innerHTML = html;
    }
    ban.hidden = false;
  } else {
    ban.hidden = true;
    ban.dataset.h = '';
  }
}

function renderThoughts() {
  for (const s of ['A', 'B']) {
    const t = S.thoughts[s];
    const el = $(`#th-${s}`);
    if (!t) {
      el.innerHTML = `<header><b>Decisão de ${s}</b><span class="private">privado · só o operador vê</span></header><p>Aguardando a vez de ${s}.</p>`;
      continue;
    }
    const odds = t.raciocinio.match(/pot odds (\d+)%/);
    el.innerHTML = `
      <header><b>Decisão de ${s}</b><span class="badge" data-c="${t.categoria}">${CAT[t.categoria] ?? t.categoria}</span><span>mão ${t.mao} · ${ETAPA[t.etapa]}</span><span class="private">privado · só o operador vê</span></header>
      <p>${esc(t.raciocinio)}</p>
      <div class="eq"><span>Equidade ${pct(t.equidade)}</span><span class="meter"><i style="width:${Math.round(t.equidade * 100)}%"></i>${odds ? `<span class="odds" style="left:${odds[1]}%" title="pot odds"></span>` : ''}</span>${odds ? `<span>pot odds ${odds[1]}%</span>` : ''}</div>`;
  }
}

// ───────────────────────── Feed ─────────────────────────
function feedRow(r, live) {
  const ol = $('#feed');
  const li = document.createElement('li');
  li.className = `k-${r.k}${live && S.live ? ' new' : ''}`;
  li.innerHTML = r.k === 'sistema'
    ? `<span class="m">${r.mao ?? ''}</span><span class="e"></span><span class="txt">${esc(r.txt)}</span>`
    : `<span class="m">${r.mao ?? ''}</span><span class="e">${ETAPA[r.etapa] ?? ''}</span><span class="who ${r.who}">${r.who ?? ''}</span><span class="txt">${esc(r.txt)}</span><span class="v">${r.v ? fmt(r.v) : ''}</span>`;
  ol.prepend(li);
  while (ol.children.length > 400) ol.lastElementChild.remove();
}

// ───────────────────────── Influência ─────────────────────────
function scoped() {
  const P = S.painel;
  const cur = P?.partida ?? 0;
  if (S.scope === 'atual') return S.adaptacoes.filter((a) => a.partida === cur);
  if (S.scope === 'ult3') return S.adaptacoes.filter((a) => a.partida > cur - 3);
  return S.adaptacoes;
}

function influenceLinks(list) {
  const byId = new Map(S.adaptacoes.map((a) => [a.id, a]));
  const out = [];
  for (const a of list) {
    if (!a.causaId) continue;
    const c = byId.get(a.causaId);
    if (c) out.push({ from: c, to: a, cross: c.agente !== a.agente });
  }
  return out;
}

function renderInfluence() {
  const list = scoped();
  const links = influenceLinks(list);
  const cross = links.filter((l) => l.cross);
  const aOnB = cross.filter((l) => l.from.agente === 'A').length;
  const bOnA = cross.filter((l) => l.from.agente === 'B').length;
  const lag = cross.length ? cross.reduce((s, l) => s + (l.to.maoGlobal - l.from.maoGlobal), 0) / cross.length : null;
  const chain = list.reduce((m, a) => Math.max(m, a.cadeia ?? 0), 0);
  const mud = list.filter((a) => a.tipo === 'regra_ativada' || a.tipo === 'regra_desativada' || a.tipo === 'treinador').length;
  $('#inf-kpis').innerHTML = `
    <dl class="kpi"><dt>A influenciou B</dt><dd class="A">${aOnB}<small>reações</small></dd></dl>
    <dl class="kpi"><dt>B influenciou A</dt><dd class="B">${bOnA}<small>reações</small></dd></dl>
    <dl class="kpi"><dt>Tempo médio de reação</dt><dd>${lag === null ? '—' : lag.toFixed(1).replace('.', ',')}<small>mãos</small></dd></dl>
    <dl class="kpi"><dt>Maior cadeia de reações</dt><dd>${chain}<small>${chain >= 2 ? 'escalada' : ''}</small></dd></dl>
    <dl class="kpi"><dt>Mudanças de política</dt><dd>${mud}</dd></dl>`;
  renderInfluenceChart(list, links);
  renderNarrative(list);
}

function renderInfluenceChart(list, links) {
  const box = $('#inf-chart');
  const P = S.painel;
  const W = Math.max(480, box.clientWidth - 20);
  const H = 300;
  const padL = 30, padR = 16, yA = 70, yB = 200, yAx = 262;
  if (!P) return;
  const fim = Math.max(P.maoGlobal, ...list.map((a) => a.maoGlobal), 1);
  let ini;
  if (S.scope === 'atual') ini = P.maoGlobalInicio ?? fim - P.mao + 1;
  else ini = Math.min(fim - 1, ...list.map((a) => a.maoGlobal), ...(P.partidas.filter((p) => S.scope === 'todas' || p.partida > P.partida - 3).map((p) => p.maoGlobalInicio ?? Infinity)));
  if (!Number.isFinite(ini)) ini = Math.max(1, fim - 30);
  const span = Math.max(8, fim - ini + 1);
  const x = (g) => padL + ((g - ini + 0.5) / span) * (W - padL - padR);
  const y = (s) => (s === 'A' ? yA : yB);
  const col = (s) => (s === 'A' ? 'var(--a)' : 'var(--b)');

  // posições com empilhamento de nós na mesma mão
  const pos = new Map();
  const count = new Map();
  for (const a of list) {
    const k = `${a.agente}-${a.maoGlobal}`;
    const i = count.get(k) ?? 0;
    count.set(k, i + 1);
    const dir = a.agente === 'A' ? -1 : 1;
    pos.set(a.id, { x: x(a.maoGlobal), y: y(a.agente) + dir * i * 13 });
  }

  const parts = [];
  // fronteiras de partida (rótulo só quando há espaço)
  const bounds = P.partidas.concat(P.emPartida ? [{ partida: P.partida, maoGlobalInicio: P.maoGlobalInicio }] : []);
  let lastLabel = -Infinity;
  for (const p of bounds) {
    const g = p.maoGlobalInicio;
    if (!g || g < ini || g > fim) continue;
    const bx = x(g - 0.5);
    parts.push(`<line x1="${bx}" x2="${bx}" y1="24" y2="${yAx}" stroke="#3a4558" stroke-dasharray="3 4"><title>Partida ${p.partida}${p.vencedor ? ` · ${p.vencedor} venceu` : ''}</title></line>`);
    if (bx - lastLabel >= 76) {
      const w = p.vencedor ? ` · <tspan style="fill:var(--${p.vencedor.toLowerCase()})">${p.vencedor}</tspan>` : '';
      parts.push(`<text x="${bx + 4}" y="18">P${p.partida}${w}</text>`);
      lastLabel = bx;
    }
  }
  parts.push(`<line x1="${padL}" x2="${W - padR}" y1="${yA}" y2="${yA}" stroke="var(--a)" stroke-opacity=".35" stroke-width="2"/>`);
  parts.push(`<line x1="${padL}" x2="${W - padR}" y1="${yB}" y2="${yB}" stroke="var(--b)" stroke-opacity=".35" stroke-width="2"/>`);
  parts.push(`<text class="lane-label" x="4" y="${yA + 4}" style="fill:var(--a)">A</text><text class="lane-label" x="4" y="${yB + 4}" style="fill:var(--b)">B</text>`);
  parts.push(`<line x1="${padL}" x2="${W - padR}" y1="${yAx}" y2="${yAx}" stroke="#2a3342"/>`);
  const pxPerHand = (W - padL - padR) / span;
  const step = Math.max(1, Math.ceil(46 / pxPerHand));
  const ordered = [...P.partidas, { partida: P.partida, maoGlobalInicio: P.maoGlobalInicio }].filter((q) => q.maoGlobalInicio);
  for (let g = ini; g <= fim; g += step) {
    const p = ordered.filter((q) => q.maoGlobalInicio <= g).at(-1);
    const m = p ? g - p.maoGlobalInicio + 1 : g;
    parts.push(`<text x="${x(g)}" y="${yAx + 16}" text-anchor="middle">${S.scope === 'atual' ? 'mão ' : 'm'}${m}</text>`);
  }
  // mão atual
  parts.push(`<line x1="${x(P.maoGlobal)}" x2="${x(P.maoGlobal)}" y1="30" y2="${yAx}" stroke="var(--gold)" stroke-opacity=".5"/>`);

  // ligações causa → efeito
  for (const l of links) {
    const a = pos.get(l.from.id);
    const b = pos.get(l.to.id);
    if (!a || !b) continue;
    const sel = S.sel === l.to.id || S.sel === l.from.id;
    const mx = (a.x + b.x) / 2;
    const d = l.cross ? `M${a.x} ${a.y} C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}` : `M${a.x} ${a.y} Q ${mx} ${a.y + (l.to.agente === 'A' ? -40 : 40)} ${b.x} ${b.y}`;
    parts.push(`<path class="link ${sel ? 'sel' : ''}" d="${d}" stroke="${l.cross ? col(l.from.agente) : '#6b7686'}" ${l.cross ? 'marker-end="url(#arr-' + l.from.agente + ')"' : 'stroke-dasharray="4 4"'}/>`);
  }
  // nós
  for (const a of list) {
    const p = pos.get(a.id);
    const sel = S.sel === a.id ? 'sel' : '';
    const t = esc(`${a.agente} · ${TIPO_ADAPT[a.tipo]} · mão ${a.mao} (partida ${a.partida})\n${a.texto}`);
    const c = col(a.agente);
    let shape;
    if (a.tipo === 'regra_ativada') shape = `<circle class="node ${sel}" data-id="${a.id}" cx="${p.x}" cy="${p.y}" r="7" fill="${c}"/>`;
    else if (a.tipo === 'regra_desativada') shape = `<circle class="node ${sel}" data-id="${a.id}" cx="${p.x}" cy="${p.y}" r="6" fill="var(--panel)" stroke="${c}" stroke-width="2"/><line x1="${p.x - 5}" y1="${p.y + 5}" x2="${p.x + 5}" y2="${p.y - 5}" stroke="${c}" stroke-width="2" pointer-events="none"/>`;
    else if (a.tipo === 'mudanca_detectada') shape = `<circle class="node ${sel}" data-id="${a.id}" cx="${p.x}" cy="${p.y}" r="5" fill="var(--panel)" stroke="${c}" stroke-width="2"/>`;
    else if (a.tipo === 'treinador') shape = `<rect class="node ${sel}" data-id="${a.id}" x="${p.x - 6}" y="${p.y - 6}" width="12" height="12" fill="var(--gold)" transform="rotate(45 ${p.x} ${p.y})"/>`;
    else shape = `<rect class="node ${sel}" data-id="${a.id}" x="${p.x - 5}" y="${p.y - 5}" width="10" height="10" rx="2" fill="#6b7686"/>`;
    parts.push(`<g><title>${t}</title>${shape}</g>`);
  }
  const empty = list.length ? '' : `<text x="${W / 2}" y="${(yA + yB) / 2 + 4}" text-anchor="middle">Nenhuma adaptação ainda neste recorte. Os agentes precisam de algumas mãos de observação.</text>`;
  box.innerHTML = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" style="height:${H}px">
    <defs>${['A', 'B'].map((s) => `<marker id="arr-${s}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="${col(s)}"/></marker>`).join('')}</defs>
    ${parts.join('')}${empty}</svg>
    <div class="inf-legend"><span><i></i>nova postura</span><span><i class="ring"></i>mudança percebida</span><span><i class="sq"></i>contexto</span><span><i class="dia"></i>treinador</span></div>`;
  for (const n of $$('.node', box)) n.onclick = () => select(Number(n.dataset.id));
}

function renderNarrative(list) {
  const ol = $('#narrative');
  const items = list.filter((a) => a.tipo !== 'contexto' || S.scope !== 'todas').slice(-120).reverse();
  if (!items.length) {
    ol.innerHTML = '<li class="empty">As adaptações aparecem aqui com a observação que as motivou.</li>';
    return;
  }
  ol.innerHTML = items
    .map((a) => {
      const rule = a.tipo === 'regra_desativada' && a.rotulo ? `<span class="rule">${esc(a.rotulo)}</span> · ` : '';
      return `<li data-id="${a.id}" class="${S.sel === a.id ? 'sel' : ''} ${a.tipo === 'regra_desativada' ? 'void' : ''}">
        <div class="meta"><b class="${a.agente}">${a.agente}</b><span>Partida ${a.partida} · mão ${a.mao}</span><span>${TIPO_ADAPT[a.tipo]}</span>${a.cadeia >= 1 ? `<span class="chain">cadeia ${a.cadeia}</span>` : ''}</div>
        ${rule}${esc(a.texto)}</li>`;
    })
    .join('');
  for (const li of $$('li[data-id]', ol)) li.onclick = () => select(Number(li.dataset.id));
}

function select(id) {
  S.sel = S.sel === id ? null : id;
  renderInfluence();
  $(`#narrative li[data-id="${id}"]`)?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

// ───────────────────────── Análise ─────────────────────────
function renderAnalysis() {
  const P = S.painel;
  const body = $('#an-body');
  if (!P) return;
  const t = S.anTab;
  if (t !== 'chips' && t !== 'learn') {
    for (const k of Object.keys(charts)) { charts[k].destroy(); delete charts[k]; }
  }
  if (t === 'stats') body.innerHTML = statsHtml(P);
  else if (t === 'policy') body.innerHTML = policyHtml(P);
  else if (t === 'model') body.innerHTML = modelHtml(P);
  else if (t === 'matches') {
    body.innerHTML = matchesHtml(P);
    $('#btn-relatorio')?.addEventListener('click', () => send({ cmd: 'relatorio_agora' }));
  }
  else if (t === 'coach') body.innerHTML = coachHtml(P);
  else if (t === 'chips') chipsChart(P, body);
  else if (t === 'learn') learnChart(P, body);
}

function statsHtml(P) {
  const a = P.stats.A, b = P.stats.B;
  const rows = [
    ['Fichas', fmt(P.saldos.A), fmt(P.saldos.B)],
    ['Mãos ganhas', `${a.maosGanhas} de ${a.maos}`, `${b.maosGanhas} de ${b.maos}`],
    ['VPIP · entra no pote', pct(a.vpipPct), pct(b.vpipPct)],
    ['PFR · aumenta no pré-flop', pct(a.pfrPct), pct(b.pfrPct)],
    ['Agressão · bet+raise / (bet+raise+call)', pct(a.agressaoPct), pct(b.agressaoPct)],
    ['Desiste diante de aposta', `${pct(a.foldToBetPct)} (${a.desistiuAposta}/${a.enfrentouAposta})`, `${pct(b.foldToBetPct)} (${b.desistiuAposta}/${b.enfrentouAposta})`],
    ['Blefes · sucesso', `${a.blefes} · ${pct(a.blefeSucessoPct)}`, `${b.blefes} · ${pct(b.blefeSucessoPct)}`],
    ['Armadilhas', a.armadilhas, b.armadilhas],
    ['Showdowns ganhos', `${a.showdownsGanhos}/${a.showdowns}`, `${b.showdownsGanhos}/${b.showdowns}`],
    ['All-ins', a.allIns, b.allIns],
    ['Maior pote ganho', fmt(a.maiorPoteGanho), fmt(b.maiorPoteGanho)],
  ];
  const cats = ['valor', 'blefe', 'roubo', 'pressao', 'armadilha', 'call', 'check', 'fold'];
  const ca = P.agentes.A.categorias, cb = P.agentes.B.categorias;
  return `<div class="grid3">
    <div><h3>Partida ${P.partida} · observado pelo operador</h3><table class="data"><thead><tr><th>Indicador</th><th class="n A">A</th><th class="n B">B</th></tr></thead><tbody>
      ${rows.map((r) => `<tr><td>${r[0]}</td><td class="n">${r[1]}</td><td class="n">${r[2]}</td></tr>`).join('')}</tbody></table></div>
    <div><h3>Intenção das decisões (privado, acumulado)</h3><table class="data"><thead><tr><th>Categoria</th><th class="n A">A</th><th class="n B">B</th></tr></thead><tbody>
      ${cats.map((c) => `<tr><td><span class="badge" data-c="${c}">${CAT[c]}</span></td><td class="n">${fmt(ca[c] ?? 0)}</td><td class="n">${fmt(cb[c] ?? 0)}</td></tr>`).join('')}</tbody></table>
      <p class="note">A intenção (blefe, armadilha…) é o motivo privado registrado pelo agente; o oponente só vê a ação pública.</p></div></div>`;
}

const RANGE = { margemCall: [-0.2, 0.25], limiarValor: [0.45, 0.8], tamanhoAposta: [0.3, 1.2] };
function policyHtml(P) {
  const side = (s) => {
    const ag = P.agentes[s];
    const off = S.adaptacoes.filter((a) => a.agente === s && a.tipo === 'regra_desativada' && !ag.ativas.includes(a.rotulo)).slice(-5).map((a) => a.rotulo);
    const bars = Object.entries(ag.labels).map(([k, label]) => {
      const [lo, hi] = RANGE[k] ?? [0, 1];
      const f = (v) => Math.max(0, Math.min(100, ((v - lo) / (hi - lo)) * 100));
      const v = ag.politica[k];
      const base = ag.base[k];
      const fmtv = k === 'margemCall' ? `${v >= 0 ? '+' : ''}${Math.round(v * 100)}` : pct(v);
      const d = Math.round((v - base) * 100);
      return `<div class="pbar"><span class="lbl">${label}</span><span class="track ${s}"><i style="width:${f(v)}%"></i><span class="base" style="left:${f(base)}%" title="base do perfil: ${pct(base)}"></span></span><span class="v">${fmtv}${d ? `<span class="delta ${d > 0 ? 'up' : 'down'}">${d > 0 ? '+' : ''}${d}</span>` : ''}</span></div>`;
    }).join('');
    const perfil = S.perfis.find((p) => p.id === ag.perfil);
    return `<div><h3><span class="${s}">${s}</span> · ${esc(perfil?.nome ?? ag.perfil)}${ag.modoCurto ? ' · modo push/fold' : ''}</h3>${bars}
      <div class="rules">${ag.ativas.map((r) => `<span class="badge on">${esc(r)}</span>`).join('') || '<span class="badge">nenhuma postura ativa</span>'}${[...new Set(off)].map((r) => `<span class="badge off" title="postura cancelada">${esc(r)}</span>`).join('')}</div></div>`;
  };
  return `<div class="grid2">${side('A')}${side('B')}</div><p class="note">A barra mostra a política efetiva (base do perfil + posturas ativas + ajustes do treinador). O traço branco marca a base do perfil; o número ao lado, a diferença em pontos percentuais. Posturas riscadas foram canceladas, não apagadas.</p>`;
}

const METRIC_NAMES = {
  foldToBet: 'Desiste diante de aposta', agressao: 'Agressão', vpip: 'Entra no pote (VPIP)', pfr: 'Aumenta no pré-flop (PFR)',
  checkRaise: 'Check-raise', rouboAposCheck: 'Aposta após o meu check', blefeShowdown: 'Blefe revelado no showdown', meuBlefeSucesso: 'Meus blefes que funcionaram',
};
function modelHtml(P) {
  const cell = (m) => `${pct(m.p)}<span class="delta" style="color:var(--muted)">hist. ${pct(m.pLongo)} · rec. ${pct(m.pRecente)} · n≈${Math.round(m.nLongo)}</span>${m.mudou ? '<span class="shift">mudou</span>' : ''}`;
  const pa = P.agentes.A.precisao, pb = P.agentes.B.precisao;
  return `<div class="grid3"><div><h3>O que cada agente acredita sobre o outro (só eventos públicos)</h3><table class="data"><thead><tr><th>Métrica</th><th class="A">A sobre B</th><th class="B">B sobre A</th></tr></thead><tbody>
    ${Object.keys(METRIC_NAMES).map((k) => `<tr><td>${METRIC_NAMES[k]}</td><td>${cell(P.agentes.A.leitura[k])}</td><td>${cell(P.agentes.B.leitura[k])}</td></tr>`).join('')}</tbody></table>
    <p class="note">“hist.” é a memória de longo prazo, que atravessa partidas; “rec.” é a janela recente. Quando as duas divergem, o agente marca a mudança e passa a confiar na leitura recente.</p></div>
    <div><h3>Quanto cada um conhece e prevê o outro</h3><table class="data"><tbody>
      <tr><td>Conhecimento de A sobre B</td><td class="n A">${pct(P.agentes.A.conhecimento)}</td></tr>
      <tr><td>Conhecimento de B sobre A</td><td class="n B">${pct(P.agentes.B.conhecimento)}</td></tr>
      <tr><td>Acerto das previsões de A (últimas 60)</td><td class="n A">${pa ? `${pct(pa.acerto)} · Brier ${pa.brier.toFixed(2)}` : '—'}</td></tr>
      <tr><td>Acerto das previsões de B (últimas 60)</td><td class="n B">${pb ? `${pct(pb.acerto)} · Brier ${pb.brier.toFixed(2)}` : '—'}</td></tr></tbody></table>
      <p class="note">Antes de cada resposta do oponente, o agente prevê se ele vai desistir diante de uma aposta ou apostar depois de um check. O acerto mede se a previsão (≥ 50%) bateu; o Brier mede a calibração (menor é melhor).</p></div></div>`;
}

function matchesHtml(P) {
  const agora = `<div class="report-now"><button class="btn btn-primary" type="button" id="btn-relatorio"${P.emPartida ? '' : ' disabled'}><svg aria-hidden="true"><use href="#i-doc"/></svg>Gerar relatório da partida em andamento</button>
    ${S.parcial ? `<a href="relatorio.html?f=${encodeURIComponent(S.parcial)}" target="_blank" rel="noopener">Abrir relatório parcial</a>` : '<span class="note">Funciona com o jogo pausado: cobre as mãos já concluídas, sem encerrar a partida.</span>'}
    <a href="relatorio.html?f=geral.md" target="_blank" rel="noopener">Relatório geral</a></div>`;
  if (!P.partidas.length) return `${agora}<p class="empty">Nenhuma partida concluída ainda. O relatório de cada partida aparece aqui quando houver um vencedor.</p>`;
  return `${agora}<table class="data"><thead><tr><th class="n">Partida</th><th>Vencedor</th><th class="n">Mãos</th><th>Blinds finais</th><th class="n">Conhecimento A→B</th><th class="n">Conhecimento B→A</th><th class="n">Acerto A</th><th class="n">Acerto B</th><th class="n">Adaptações</th><th class="n">Maior cadeia</th><th>Evidências</th></tr></thead><tbody>
    ${P.partidas.slice().reverse().map((p) => `<tr><td class="n">${p.partida}</td><td class="${p.vencedor}">${p.vencedor}</td><td class="n">${p.maos}</td><td>${p.blindsFinais}</td><td class="n">${pct(p.conhecimento.A[1])}</td><td class="n">${pct(p.conhecimento.B[1])}</td><td class="n">${pct(p.precisao.A)}</td><td class="n">${pct(p.precisao.B)}</td><td class="n">${p.adaptacoes}</td><td class="n">${p.cadeiaMax}</td>
      <td><span class="links"><a href="relatorio.html?f=${encodeURIComponent(p.relatorio)}" target="_blank" rel="noopener"><svg aria-hidden="true"><use href="#i-doc"/></svg>Relatório</a>${p.evidencias ? `<a href="/relatorios/${encodeURIComponent(p.evidencias)}" target="_blank" rel="noopener"><svg aria-hidden="true"><use href="#i-data"/></svg>Log JSONL</a>` : ''}</span></td></tr>`).join('')}</tbody></table>
    <p class="note"><a href="relatorio.html?f=geral.md" target="_blank" rel="noopener">Relatório geral da evolução entre partidas</a></p>`;
}

function coachHtml(P) {
  const c = P.treinador;
  const items = c.ultimos.map((r) => `<div class="coach-item"><b>${r.agente} · após a partida ${r.partida}</b> · ${r.ok ? `${(r.ms / 1000).toFixed(1)} s` : `falhou: ${esc(r.erro)}`}<br>
    ${r.ok ? `${Object.entries(r.ajustes).map(([k, v]) => `${esc(S.painel.agentes.A.labels[k] ?? k)} ${v > 0 ? '+' : ''}${Math.round(v * 100)} p.p.`).join(' · ') || 'sem ajustes'}<br><i>“${esc(r.justificativa)}”</i>` : ''}</div>`).join('');
  return `<div class="grid3"><div><h3>Treinador Llama</h3>
    <p><span class="status-dot ${c.online ? 'on' : ''}"></span>${c.online ? 'Ollama online' : 'Ollama offline'} · modelo <b>${esc(c.config.modelo)}</b> · ${c.config.ativo ? 'ativo' : 'desligado'}${c.emAndamento ? ' · analisando a última partida…' : ''}</p>
    <p class="note">Entre partidas, o modelo local recebe só o que o agente pôde observar (estatísticas públicas do oponente e as próprias) e propõe ajustes de até 10 p.p. na política base. A resposta é validada, limitada e registrada como adaptação do tipo “treinador”. Não consome uso do Claude.</p>
    ${c.online ? '' : '<p class="note">Para ativar: rode <code>ollama serve</code> em outro terminal. Modelos instalados: llama3.1:8b, qwen2.5:7b.</p>'}</div>
    <div><h3>Últimas análises</h3>${items || '<p class="note">Nenhuma análise ainda: ela acontece ao fim de cada partida.</p>'}</div></div>`;
}

function chartColors() {
  const cs = getComputedStyle(document.documentElement);
  return { a: cs.getPropertyValue('--a').trim(), b: cs.getPropertyValue('--b').trim(), grid: '#232b37', text: '#8a95a5', gold: cs.getPropertyValue('--gold').trim() };
}
function baseOpts(yTitle, pctAxis = false) {
  const c = chartColors();
  return {
    responsive: true, maintainAspectRatio: false, animation: { duration: isTurbo() ? 0 : 300 },
    interaction: { mode: 'index', intersect: false },
    plugins: { legend: { labels: { color: c.text, boxWidth: 28, boxHeight: 2, usePointStyle: true, font: { family: 'Roboto', size: 13 } } }, tooltip: { backgroundColor: '#0d1117', borderColor: '#2a3342', borderWidth: 1, titleFont: { family: 'Roboto' }, bodyFont: { family: 'Roboto' } } },
    scales: {
      x: { ticks: { color: c.text, font: { family: 'Roboto', size: 12 } }, grid: { color: c.grid } },
      y: { title: { display: true, text: yTitle, color: c.text }, ticks: { color: c.text, font: { family: 'Roboto', size: 12 }, callback: pctAxis ? (v) => `${v}%` : (v) => Number(v).toLocaleString('pt-BR') }, grid: { color: c.grid }, ...(pctAxis ? { min: 0, max: 100 } : {}) },
    },
  };
}
function chipsChart(P, body) {
  if (!window.Chart) { body.innerHTML = '<p class="empty">Chart.js não carregou.</p>'; return; }
  const c = chartColors();
  const labels = P.chips.map((p) => (p.mao === 0 ? 'início' : `m${p.mao}`));
  const data = [
    { label: 'Fichas de A', data: P.chips.map((p) => p.A), borderColor: c.a, backgroundColor: c.a, tension: 0.25, pointRadius: 2 },
    { label: 'Fichas de B', data: P.chips.map((p) => p.B), borderColor: c.b, backgroundColor: c.b, tension: 0.25, pointRadius: 2 },
  ];
  if (charts.chips && document.body.contains(charts.chips.canvas)) {
    charts.chips.data.labels = labels;
    charts.chips.data.datasets.forEach((d, i) => (d.data = data[i].data));
    charts.chips.update();
    return;
  }
  body.innerHTML = `<h3>Fichas por mão · partida ${P.partida}</h3><div class="chart-box"><canvas id="ch-chips"></canvas></div><p class="note">Os blinds sobem a cada ${S.config?.maosPorNivel} mãos; o total permanece ${fmt((S.config?.stackInicial ?? 0) * 2)} fichas (invariante de conservação).</p>`;
  charts.chips = new Chart($('#ch-chips'), { type: 'line', data: { labels, datasets: data }, options: baseOpts('fichas') });
}
function learnChart(P, body) {
  if (!window.Chart) { body.innerHTML = '<p class="empty">Chart.js não carregou.</p>'; return; }
  if (!P.partidas.length) { body.innerHTML = '<p class="empty">A curva de aprendizado aparece depois da primeira partida concluída.</p>'; return; }
  const c = chartColors();
  const labels = P.partidas.map((p) => `P${p.partida}`);
  const ds = [
    { label: 'Conhecimento de A sobre B', data: P.partidas.map((p) => Math.round(p.conhecimento.A[1] * 100)), borderColor: c.a, backgroundColor: c.a, tension: 0.25 },
    { label: 'Conhecimento de B sobre A', data: P.partidas.map((p) => Math.round(p.conhecimento.B[1] * 100)), borderColor: c.b, backgroundColor: c.b, tension: 0.25 },
    { label: 'Acerto das previsões de A', data: P.partidas.map((p) => (p.precisao.A === null ? null : Math.round(p.precisao.A * 100))), borderColor: c.a, backgroundColor: c.a, borderDash: [5, 4], tension: 0.25, pointStyle: 'line' },
    { label: 'Acerto das previsões de B', data: P.partidas.map((p) => (p.precisao.B === null ? null : Math.round(p.precisao.B * 100))), borderColor: c.b, backgroundColor: c.b, borderDash: [5, 4], tension: 0.25, pointStyle: 'line' },
  ];
  if (charts.learn && document.body.contains(charts.learn.canvas)) {
    charts.learn.data.labels = labels;
    charts.learn.data.datasets.forEach((d, i) => (d.data = ds[i].data));
    charts.learn.update();
    return;
  }
  body.innerHTML = `<h3>Aprendizado entre partidas</h3><div class="chart-box"><canvas id="ch-learn"></canvas></div><p class="note">Na partida 1 os agentes não se conhecem. A memória de longo prazo acumula observações públicas a cada partida: o conhecimento (linha cheia) cresce e as previsões (tracejado) tendem a acertar mais.</p>`;
  charts.learn = new Chart($('#ch-learn'), { type: 'line', data: { labels, datasets: ds }, options: baseOpts('%', true) });
}

// ───────────────────────── Início ─────────────────────────
bindControls();
window.addEventListener('resize', () => schedule('influence'));
connect();
