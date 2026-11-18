import { METRICS, MetricId } from '../agents/model.js';
import { POLICY_LABELS, PolicyKey } from '../agents/policy.js';
import type { Narrada } from './narrative.js';

const pct = (x: number | null | undefined) => (x === null || x === undefined ? '—' : `${Math.round(x * 100)}%`);

export interface HandRow {
  partida: number;
  mao: number;
  maoGlobal: number;
  nivel: number;
  sb: number;
  bb: number;
  botao: string;
  vencedor: string;
  motivo: string;
  pote: number;
  saldos: { A: number; B: number };
  acoes: string;
  showdown?: { A: string; B: string };
}

export interface MatchSummary {
  partida: number;
  vencedor: string;
  maos: number;
  nivelFinal: number;
  blindsFinais: string;
  inicio: string;
  fim: string;
  conhecimento: { A: [number, number]; B: [number, number] };
  precisao: { A: number | null; B: number | null };
  adaptacoes: number;
  cadeiaMax: number;
  relatorio: string;
  evidencias?: string;
  maoGlobalInicio?: number;
  maoGlobalFim?: number;
}

export function matchReport(d: {
  resumo: MatchSummary;
  config: any;
  stats: any;
  rows: HandRow[];
  adaptacoes: Narrada[];
  agentes: Record<'A' | 'B', any>;
  politicaInicial: Record<'A' | 'B', any>;
  partidas: MatchSummary[];
}): string {
  const { resumo: r, stats, rows, adaptacoes, agentes } = d;
  const L: string[] = [];
  L.push(`# Relatório da partida ${r.partida}`, '');
  L.push(`Gerado automaticamente pela Arena de Poker Adversarial em ${new Date(r.fim).toLocaleString('pt-BR')}.`, '');
  L.push('## Resultado', '');
  L.push(`| Item | Valor |`, `|---|---|`);
  L.push(`| Vencedor | **${r.vencedor}** |`);
  L.push(`| Mãos jogadas | ${r.maos} |`);
  L.push(`| Nível final de blinds | ${r.nivelFinal + 1} (${r.blindsFinais}) |`);
  L.push(`| Stack inicial | ${d.config.stackInicial} por agente (total ${d.config.stackInicial * 2}) |`);
  L.push(`| Mãos por nível | ${d.config.maosPorNivel} |`);
  L.push(`| Seed | ${d.config.seed} |`);
  L.push(`| Memória entre partidas | ${d.config.memoria ? 'ativa' : 'desligada'} |`);
  L.push(`| Conhecimento de A sobre B | ${pct(r.conhecimento.A[0])} → ${pct(r.conhecimento.A[1])} |`);
  L.push(`| Conhecimento de B sobre A | ${pct(r.conhecimento.B[0])} → ${pct(r.conhecimento.B[1])} |`);
  L.push(`| Acerto das previsões (A / B) | ${pct(r.precisao.A)} / ${pct(r.precisao.B)} |`);
  L.push(`| Evidências (cada evento, decisão e adaptação) | [${r.evidencias}](${r.evidencias}) |`, '');

  L.push('## Linha do tempo das adaptações', '');
  L.push('Cada item liga uma mudança observada no oponente à resposta do agente. A cadeia indica quantas reações encadeadas antecederam aquela adaptação; 2 ou mais caracteriza escalada (corrida armamentista).', '');
  if (!adaptacoes.length) L.push('_Nenhuma adaptação nesta partida._');
  for (const a of adaptacoes) {
    const tag = a.cadeia >= 2 ? ` **[cadeia ${a.cadeia}]**` : '';
    L.push(`- **${a.agente} · mão ${a.mao}** — ${a.texto}${tag}`);
  }
  L.push('');

  L.push('## Estatísticas observadas pelo operador', '');
  L.push('| Indicador | A | B |', '|---|---:|---:|');
  const row = (n: string, f: (s: any) => string) => L.push(`| ${n} | ${f(stats.A)} | ${f(stats.B)} |`);
  row('Mãos ganhas', (s) => `${s.maosGanhas}`);
  row('VPIP (entra no pote)', (s) => pct(s.vpipPct));
  row('PFR (aumenta no pré-flop)', (s) => pct(s.pfrPct));
  row('Agressão (bet+raise / bet+raise+call)', (s) => pct(s.agressaoPct));
  row('Desiste diante de aposta', (s) => pct(s.foldToBetPct));
  row('Blefes (sucesso)', (s) => `${s.blefes} (${pct(s.blefeSucessoPct)})`);
  row('Armadilhas', (s) => `${s.armadilhas}`);
  row('Showdowns ganhos', (s) => `${s.showdownsGanhos}/${s.showdowns}`);
  row('All-ins', (s) => `${s.allIns}`);
  row('Maior pote ganho', (s) => `${s.maiorPoteGanho}`);
  L.push('');

  L.push('## Política: início × fim da partida', '');
  L.push('| Parâmetro | A início | A fim | B início | B fim |', '|---|---:|---:|---:|---:|');
  for (const k of Object.keys(POLICY_LABELS) as PolicyKey[]) {
    L.push(`| ${POLICY_LABELS[k]} | ${pct(d.politicaInicial.A[k])} | ${pct(agentes.A.politica[k])} | ${pct(d.politicaInicial.B[k])} | ${pct(agentes.B.politica[k])} |`);
  }
  L.push('', `Regras ativas ao final — A: ${agentes.A.ativas.join(', ') || 'nenhuma'}; B: ${agentes.B.ativas.join(', ') || 'nenhuma'}.`, '');

  L.push('## Leitura que cada agente tem do outro (só eventos públicos)', '');
  L.push('| Métrica | A sobre B | B sobre A |', '|---|---:|---:|');
  for (const id of Object.keys(METRICS) as MetricId[]) {
    const f = (s: any) => `${pct(s.leitura[id].p)} (n≈${Math.round(s.leitura[id].nLongo)})`;
    L.push(`| ${METRICS[id].nome} | ${f(agentes.A)} | ${f(agentes.B)} |`);
  }
  L.push('');

  L.push('## Mãos', '');
  L.push('| Mão | Blinds | Botão | Ações | Final | Vencedor | Pote | Saldos A/B |', '|---:|---|---|---|---|---|---:|---|');
  for (const h of rows) {
    const fim = h.motivo === 'showdown' && h.showdown ? `showdown — A: ${h.showdown.A}; B: ${h.showdown.B}` : h.motivo;
    L.push(`| ${h.mao} | ${h.sb}/${h.bb} | ${h.botao} | ${h.acoes} | ${fim} | ${h.vencedor} | ${h.pote} | ${h.saldos.A}/${h.saldos.B} |`);
  }
  L.push('');
  L.push(generalTable(d.partidas));
  return L.join('\n');
}

export function generalTable(partidas: MatchSummary[]): string {
  const L: string[] = ['## Aprendizado entre partidas', ''];
  L.push('| Partida | Vencedor | Mãos | Conhecimento A→B | Conhecimento B→A | Acerto A | Acerto B | Adaptações | Maior cadeia |');
  L.push('|---:|---|---:|---:|---:|---:|---:|---:|---:|');
  for (const p of partidas) {
    L.push(`| [${p.partida}](${p.relatorio}) | ${p.vencedor} | ${p.maos} | ${pct(p.conhecimento.A[1])} | ${pct(p.conhecimento.B[1])} | ${pct(p.precisao.A)} | ${pct(p.precisao.B)} | ${p.adaptacoes} | ${p.cadeiaMax} |`);
  }
  const wa = partidas.filter((p) => p.vencedor === 'A').length;
  const wb = partidas.filter((p) => p.vencedor === 'B').length;
  L.push('', `Placar acumulado: A ${wa} × ${wb} B.`, '');
  return L.join('\n');
}

export function generalReport(partidas: MatchSummary[], adaptacoes: Narrada[]): string {
  const L = ['# Relatório geral — evolução entre partidas', ''];
  L.push('Na partida 1 os agentes não se conhecem. A cada partida, o modelo de longo prazo de cada agente acumula observações públicas do outro, as regras de adaptação ativas são herdadas e as previsões ficam mais precisas.', '');
  L.push(generalTable(partidas));
  L.push('## Principais cadeias de reação (corrida armamentista)', '');
  const chains = adaptacoes.filter((a) => a.cadeia >= 2).slice(-25);
  if (!chains.length) L.push('_Ainda não houve cadeias com duas ou mais reações encadeadas._');
  for (const a of chains) L.push(`- **Partida ${a.partida}, ${a.agente}, mão ${a.mao} [cadeia ${a.cadeia}]** — ${a.texto}`);
  return L.join('\n');
}
