// Simulação em lote: `npm run simular -- 10` joga 10 partidas sem interface e grava os relatórios.
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Arena } from '../src/match/arena.js';

const n = Number(process.argv[2] ?? 5);
const dir = process.env.SIM_DIR ?? join(dirname(fileURLToPath(import.meta.url)), '..');
const arena = new Arena(dir, { velocidade: 'turbo', memoria: process.env.MEMORIA !== '0', treinador: { ativo: false } as any });
const t0 = Date.now();
await arena.simular(n, (r) => {
  const pct = (x: number | null) => (x === null ? '—' : `${Math.round(x * 100)}%`);
  console.log(
    `partida ${String(r.partida).padStart(3)} · vencedor ${r.vencedor} · ${String(r.maos).padStart(3)} mãos · blinds ${r.blindsFinais.padEnd(9)} · ` +
      `conhecimento A→B ${pct(r.conhecimento.A[1])} B→A ${pct(r.conhecimento.B[1])} · acerto A ${pct(r.precisao.A)} B ${pct(r.precisao.B)} · adaptações ${r.adaptacoes} · cadeia ${r.cadeiaMax}`,
  );
});
console.log(`\n${n} partidas em ${((Date.now() - t0) / 1000).toFixed(1)} s — relatórios em ${join(dir, 'relatorios')}`);
process.exit(0);
