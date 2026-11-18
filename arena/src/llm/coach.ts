// Treinador opcional via Llama local (Ollama). Roda ENTRE partidas e só recebe dados que o próprio
// agente pode observar (estatísticas públicas do oponente e as próprias), preservando C1.
// A saída é tratada como entrada não confiável: JSON validado, deltas limitados e política recortada.
import type { HeuristicAgent } from '../agents/agent.js';
import { METRICS, MetricId } from '../agents/model.js';
import { POLICY_LABELS, Policy, PolicyKey, clampPolicy } from '../agents/policy.js';

export interface CoachConfig {
  ativo: boolean;
  url: string;
  modelo: string;
  timeoutMs: number;
}

export interface CoachResult {
  ok: boolean;
  modelo: string;
  ajustes: Partial<Policy>;
  antes: Policy;
  depois: Policy;
  justificativa: string;
  erro?: string;
  ms: number;
}

const MAX_DELTA = 0.1;

export async function coachStatus(cfg: CoachConfig): Promise<{ online: boolean; modelos: string[] }> {
  try {
    const r = await fetch(`${cfg.url}/api/tags`, { signal: AbortSignal.timeout(2000) });
    const j: any = await r.json();
    return { online: true, modelos: (j.models ?? []).map((m: any) => m.name) };
  } catch {
    return { online: false, modelos: [] };
  }
}

export async function treinar(
  cfg: CoachConfig,
  agent: HeuristicAgent,
  resumo: { partida: number; venceu: boolean; maos: number; stats: any; adaptacoes: string[] },
): Promise<CoachResult> {
  const t0 = Date.now();
  const antes = { ...agent.base };
  const snap = agent.snapshot();
  const leitura = Object.fromEntries(
    (Object.keys(METRICS) as MetricId[]).map((id) => [
      METRICS[id].nome,
      { estimativa: +snap.leitura[id].p.toFixed(2), amostras: Math.round(snap.leitura[id].nLongo) },
    ]),
  );
  const prompt = {
    papel: `Você é o treinador do agente ${agent.id} num heads-up de Texas Hold'em entre agentes de software.`,
    tarefa:
      'Analise a partida que terminou e proponha pequenos ajustes (entre -0.1 e +0.1) em NO MÁXIMO 3 parâmetros da política BASE do agente, os que mais ajudam a explorar o oponente na próxima partida. Responda SOMENTE em JSON.',
    formato: { ajustes: { '<parametro>': '<delta numérico>' }, justificativa: '<2 a 3 frases em português>' },
    parametros: Object.fromEntries(Object.entries(POLICY_LABELS).map(([k, v]) => [k, v])),
    politica_base_atual: antes,
    regras_ativas: snap.ativas,
    leitura_do_oponente: leitura,
    resultado: { partida: resumo.partida, venceu: resumo.venceu, maos: resumo.maos },
    minhas_estatisticas: resumo.stats,
    adaptacoes_na_partida: resumo.adaptacoes.slice(-8),
  };
  try {
    const r = await fetch(`${cfg.url}/api/chat`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      signal: AbortSignal.timeout(cfg.timeoutMs),
      body: JSON.stringify({
        model: cfg.modelo,
        stream: false,
        format: 'json',
        options: { temperature: 0.3 },
        messages: [{ role: 'user', content: JSON.stringify(prompt) }],
      }),
    });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const j: any = await r.json();
    const out = JSON.parse(j.message?.content ?? '{}');
    const ajustes: Partial<Policy> = {};
    for (const [k, v] of Object.entries(out.ajustes ?? {})) {
      if (!(k in antes)) continue; // ignora parâmetros inventados
      const n = Number(v);
      if (!Number.isFinite(n) || n === 0) continue;
      ajustes[k as PolicyKey] = Math.max(-MAX_DELTA, Math.min(MAX_DELTA, n));
    }
    // Mantém só os 3 ajustes de maior magnitude: mudanças rastreáveis na narrativa.
    for (const k of Object.keys(ajustes)
      .sort((a, b) => Math.abs(ajustes[b as PolicyKey]!) - Math.abs(ajustes[a as PolicyKey]!))
      .slice(3)) delete ajustes[k as PolicyKey];
    const depois = { ...antes };
    for (const [k, v] of Object.entries(ajustes)) depois[k as PolicyKey] += v as number;
    const just = String(out.justificativa ?? '').replace(/[<>`\[\]]/g, '').slice(0, 600) || 'sem justificativa';
    return { ok: true, modelo: cfg.modelo, ajustes, antes, depois: clampPolicy(depois), justificativa: just, ms: Date.now() - t0 };
  } catch (e: any) {
    return { ok: false, modelo: cfg.modelo, ajustes: {}, antes, depois: antes, justificativa: '', erro: String(e?.message ?? e), ms: Date.now() - t0 };
  }
}
