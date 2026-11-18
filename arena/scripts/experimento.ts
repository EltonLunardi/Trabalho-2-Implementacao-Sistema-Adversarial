// Experimento: com memória entre partidas × sem memória (grupo de controle).
// `npm run experimento -- 20` imprime médias por bloco de partidas. Não usa o treinador Llama (determinístico).
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Arena } from '../src/match/arena.js';

const n = Number(process.argv[2] ?? 20);
const seed = Number(process.argv[3] ?? 2026);
const pct = (x: number | null) => (x === null || Number.isNaN(x) ? '  — ' : `${String(Math.round(x * 100)).padStart(3)}%`);
const avg = (xs: (number | null)[]) => {
  const v = xs.filter((x): x is number => x !== null);
  return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null;
};

async function rodar(memoria: boolean) {
  const dir = mkdtempSync(join(tmpdir(), 'arena-exp-'));
  const arena = new Arena(dir, { seed, velocidade: 'turbo', memoria, treinador: { ativo: false } as any });
  await arena.simular(n);
  const cross = arena.adaptacoes.filter((a) => {
    const c = arena.adaptacoes.find((x) => x.id === a.causaId);
    return c && c.agente !== a.agente;
  });
  return { partidas: arena.partidas, adaptacoes: arena.adaptacoes, cross, dir };
}

for (const memoria of [true, false]) {
  const r = await rodar(memoria);
  console.log(`\n=== ${memoria ? 'COM memória entre partidas' : 'SEM memória (controle)'} · ${n} partidas · seed ${seed} ===`);
  const bloco = 5;
  console.log('bloco      | mãos/partida | conhec. A→B | conhec. B→A | acerto A | acerto B | adaptações | vitórias A/B');
  for (let i = 0; i < r.partidas.length; i += bloco) {
    const ps = r.partidas.slice(i, i + bloco);
    console.log(
      `P${String(i + 1).padStart(2)}–P${String(i + ps.length).padEnd(2)}   | ${String(avg(ps.map((p) => p.maos))!.toFixed(1)).padStart(12)} | ${pct(avg(ps.map((p) => p.conhecimento.A[1]))).padStart(11)} | ${pct(avg(ps.map((p) => p.conhecimento.B[1]))).padStart(11)} | ${pct(avg(ps.map((p) => p.precisao.A))).padStart(8)} | ${pct(avg(ps.map((p) => p.precisao.B))).padStart(8)} | ${String(ps.reduce((s, p) => s + p.adaptacoes, 0)).padStart(10)} | ${ps.filter((p) => p.vencedor === 'A').length}/${ps.filter((p) => p.vencedor === 'B').length}`,
    );
  }
  const aB = r.cross.filter((a) => a.agente === 'B').length;
  const bA = r.cross.filter((a) => a.agente === 'A').length;
  const lag = avg(r.cross.map((a) => a.maoGlobal - r.adaptacoes.find((x) => x.id === a.causaId)!.maoGlobal));
  console.log(`influências cruzadas: A→B ${aB}, B→A ${bA} · reação média ${lag?.toFixed(1)} mãos · maior cadeia ${Math.max(0, ...r.adaptacoes.map((a) => a.cadeia))}`);
  console.log(`placar: A ${r.partidas.filter((p) => p.vencedor === 'A').length} × ${r.partidas.filter((p) => p.vencedor === 'B').length} B · relatórios em ${r.dir}/relatorios`);
}
process.exit(0);
