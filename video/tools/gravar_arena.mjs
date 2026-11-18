// Grava tomadas da Arena ao vivo em 1920×1080 por screencast do DevTools (quadros JPEG nítidos) → bruto/<tomada>.mp4 a 30 fps.
// Uso: node tools/gravar_arena.mjs [mesa|influencia|relatorio|telas|todas]
import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import os from 'node:os';

const require = createRequire(join(os.homedir(), '.claude/skills/video-direcao-de-arte/kit/package.json'));
const { chromium } = require('playwright-core');
const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const URL = 'http://127.0.0.1:3000/';
const CHROME = join(os.homedir(), '.cache/ms-playwright/chromium-1248/chrome-linux64/chrome');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function abrir(browser, url = URL) {
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  await sleep(1500);
  return page;
}

async function gravar(page, nome, roteiro) {
  const dir = join(RAIZ, 'bruto', `_quadros_${nome}`);
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });
  const cdp = await page.context().newCDPSession(page);
  const quadros = [];
  cdp.on('Page.screencastFrame', async (f) => {
    const arq = join(dir, `${String(quadros.length).padStart(5, '0')}.jpg`);
    writeFileSync(arq, Buffer.from(f.data, 'base64'));
    quadros.push({ arq, t: f.metadata.timestamp });
    try { await cdp.send('Page.screencastFrameAck', { sessionId: f.sessionId }); } catch {}
  });
  await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 95, maxWidth: 1920, maxHeight: 1080, everyNthFrame: 1 });
  const t0 = Date.now();
  await roteiro(page);
  const fim = Date.now();
  await cdp.send('Page.stopScreencast');
  await sleep(300);
  // concat com duração real de cada quadro → 30 fps constantes
  const lista = quadros.map((q, i) => {
    const prox = quadros[i + 1] ? quadros[i + 1].t : q.t + 1 / 30;
    return `file '${q.arq.replace(/'/g, "'\\''")}'\nduration ${Math.max(0.001, prox - q.t).toFixed(4)}`;
  });
  lista.push(`file '${quadros.at(-1).arq.replace(/'/g, "'\\''")}'`);
  const listaArq = join(dir, 'lista.txt');
  writeFileSync(listaArq, lista.join('\n'));
  const saida = join(RAIZ, 'bruto', `${nome}.mp4`);
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', listaArq,
    '-vf', 'fps=30,scale=1920:1080:flags=lanczos,format=yuv420p', '-c:v', 'libx264', '-crf', '14', '-preset', 'slow', '-movflags', '+faststart', saida]);
  console.log(`${nome}: ${quadros.length} quadros em ${((fim - t0) / 1000).toFixed(1)} s → ${saida}`);
}

const comando = (page, cmd) => page.evaluate((c) => new Promise((ok) => {
  const ws = new WebSocket(`ws://${location.host}/ws`);
  ws.onopen = () => { ws.send(JSON.stringify(c)); setTimeout(() => { ws.close(); ok(); }, 300); };
}), cmd);
const clica = (page, sel) => page.evaluate((s) => document.querySelector(s)?.click(), sel);
const rolar = async (page, y, ms = 1600) => {
  await page.evaluate(([alvo, dur]) => {
    const ini = scrollY, t0 = performance.now();
    const passo = (now) => { const p = Math.min(1, (now - t0) / dur); const e = 1 - Math.pow(1 - p, 3); scrollTo(0, ini + (alvo - ini) * e); if (p < 1) requestAnimationFrame(passo); };
    requestAnimationFrame(passo);
  }, [y, ms]);
  await sleep(ms + 200);
};
const topoDe = (page, sel) => page.evaluate((s) => document.querySelector(s).getBoundingClientRect().top + scrollY - 70, sel);

const TOMADAS = {
  async mesa(browser) {
    const page = await abrir(browser);
    await comando(page, { cmd: 'velocidade', valor: 'normal' });
    await comando(page, { cmd: 'play' });
    await sleep(2500);
    await gravar(page, 'rec_mesa', async (pg) => {
      await sleep(16000);
      await rolar(pg, 380, 1800);           // decisões privadas + feed
      await sleep(9000);
      await rolar(pg, 0, 1500);
      await sleep(3000);
    });
    await comando(page, { cmd: 'pause' });
    await page.context().close();
  },
  async influencia(browser) {
    const page = await abrir(browser);
    await clica(page, '#inf-scope button[data-s="ult3"]');
    await gravar(page, 'rec_influencia', async (pg) => {
      await sleep(1500);
      await rolar(pg, await topoDe(pg, '.influence'), 2200);
      await sleep(3500);
      const nos = await pg.$$('.inf-chart .node');
      for (const i of [Math.floor(nos.length * 0.3), Math.floor(nos.length * 0.6)]) {
        const n = (await pg.$$('.inf-chart .node'))[i];
        if (n) { await n.click(); await sleep(4500); }
      }
      await sleep(3000);
    });
    await page.context().close();
  },
  async relatorio(browser) {
    const page = await abrir(browser, URL + 'relatorio.html?f=partida-001.md');
    await gravar(page, 'rec_relatorio', async (pg) => {
      await sleep(3000);
      await rolar(pg, await topoDe(pg, 'h2:nth-of-type(2)'), 2500);
      await sleep(6000);
      await rolar(pg, await topoDe(pg, 'h2:nth-of-type(4)'), 2500);
      await sleep(4000);
    });
    await page.context().close();
  },
  async telas(browser) {
    // Retratos estáticos da interface para as cenas (entram como imagem com data-da-livre)
    const page = await abrir(browser);
    await clica(page, '#btn-play');
    await page.evaluate(() => { if (document.querySelector('#btn-play span').textContent !== 'Continuar') document.querySelector('#btn-play').click(); });
    const dir = join(RAIZ, 'animacoes', 'img');
    mkdirSync(dir, { recursive: true });
    const tab = async (t, arq) => {
      await clica(page, `#an-tabs button[data-t="${t}"]`);
      await sleep(900);
      const el = await page.$('.analysis');
      await el.scrollIntoViewIfNeeded();
      await sleep(400);
      await el.screenshot({ path: join(dir, arq) });
    };
    await tab('policy', 'tela_politica.png');
    await tab('model', 'tela_leitura.png');
    await tab('learn', 'tela_aprendizado.png');
    await tab('stats', 'tela_estatisticas.png');
    await (await page.$('.thoughts')).screenshot({ path: join(dir, 'tela_decisoes.png') });
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({ path: join(dir, 'tela_arena.png') });
    await clica(page, '#btn-play');
    console.log('telas salvas em', dir);
    await page.context().close();
  },
};

const alvo = process.argv[2] || 'todas';
const browser = await chromium.launch({ executablePath: CHROME, headless: true });
for (const [nome, fn] of Object.entries(TOMADAS)) if (alvo === 'todas' || alvo === nome) await fn(browser);
await browser.close();
