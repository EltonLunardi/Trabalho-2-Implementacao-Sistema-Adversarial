// Encadeamento causal das adaptações: "a partir do momento em que B passou a X, A começou a Y".
import type { Adaptacao } from '../agents/agent.js';
import { METRICS } from '../agents/model.js';
import { METRIC_DRIVERS, POLICY_LABELS, PolicyKey } from '../agents/policy.js';
import { other } from '../engine/types.js';

export interface Narrada extends Adaptacao {
  id: number;
  texto: string;
  causaId?: number;
  /** Profundidade da cadeia de reações (≥2 indica escalada/corrida armamentista). */
  cadeia: number;
}

const pct = (x: number) => `${Math.round(x * 100)}%`;

export function fmtMudanca(m: { param: string; de: number; para: number }): string {
  if (m.param === 'modoCurto') return m.para ? 'modo push/fold ligado' : 'modo push/fold desligado';
  const label = POLICY_LABELS[m.param as PolicyKey] ?? m.param;
  const f = (v: number) => (m.param === 'margemCall' ? `${v >= 0 ? '+' : ''}${Math.round(v * 100)} p.p.` : pct(v));
  return `${label.toLowerCase()} ${f(m.de)} → ${f(m.para)}`;
}

const onde = (a: { partida: number; mao: number }, ref?: { partida: number }) =>
  ref && ref.partida === a.partida ? `mão ${a.mao}` : `mão ${a.mao} da partida ${a.partida}`;

export function narrar(a: Adaptacao & { id: number }, anteriores: Narrada[]): Narrada {
  const X = a.agente;
  const Y = other(X);
  const mud = a.mudancas.length ? ` (${a.mudancas.map(fmtMudanca).join('; ')})` : '';

  if (a.tipo === 'contexto') {
    return { ...a, cadeia: 0, texto: `Na ${onde(a)}, ${a.observacao}: ${X} ${a.resposta}.` };
  }
  if (a.tipo === 'treinador') {
    return { ...a, cadeia: 0, texto: `Antes da ${onde(a)}, o treinador Llama de ${X} revisou a partida anterior e ${a.resposta}${mud}. Justificativa: “${a.observacao}”` };
  }
  if (a.tipo === 'mudanca_detectada') {
    return { ...a, cadeia: 0, texto: `Na ${onde(a)}, ${X} percebeu que ${a.observacao}; ${X} ${a.resposta}.` };
  }

  // Procura a mudança de política de Y que explica a métrica observada por X.
  const drivers = a.metrica ? METRIC_DRIVERS[a.metrica] : {};
  const sentido = a.direcao === 'desce' ? -1 : 1;
  const janela = anteriores.filter((c) => c.maoGlobal <= a.maoGlobal && c.maoGlobal >= a.maoGlobal - 60);
  // A mudança de Y explica a observação de X se moveu um parâmetro no mesmo sentido da métrica.
  const explica = (c: Narrada) =>
    c.mudancas.some((m) => {
      const sinal = (drivers as Record<string, number>)[m.param];
      return sinal !== undefined && Math.sign(m.para - m.de) * sinal === sentido;
    });
  let causa: Narrada | undefined;
  for (let i = janela.length - 1; i >= 0; i--) {
    const c = janela[i];
    if (c.agente !== Y || c.tipo === 'mudanca_detectada') continue;
    if (c.tipo === 'contexto' && c.partida !== a.partida) continue;
    if (explica(c)) {
      causa = c;
      break;
    }
  }
  // Ou a detecção, pelo próprio X, de que Y mudou de comportamento nessa métrica.
  const deteccao = janela
    .slice()
    .reverse()
    .find((c) => c.agente === X && c.tipo === 'mudanca_detectada' && c.metrica === a.metrica);

  const acao = a.resposta;
  if (causa) {
    const comportamento = a.metrica && a.direcao ? METRICS[a.metrica][a.direcao] : 'mudar de comportamento';
    return {
      ...a,
      causaId: causa.id,
      cadeia: causa.cadeia + 1,
      texto:
        `A partir da ${onde(causa, a)}, quando ${Y} ${causa.resposta}, ${Y} começou a ${comportamento}. ` +
        `${X} observou que ${a.observacao}. Na ${onde(a)}, ${X} ${acao}${mud}.`,
    };
  }
  if (deteccao) {
    return {
      ...a,
      causaId: deteccao.id,
      cadeia: 1,
      texto: `A partir do momento em que ${Y} começou a ${METRICS[deteccao.metrica!][deteccao.direcao!]} (percebido na ${onde(deteccao, a)}), ${X} ${acao} na ${onde(a)}${mud}. Leitura: ${a.observacao}.`,
    };
  }
  return { ...a, cadeia: 0, texto: `Na ${onde(a)}, ${X} observou que ${a.observacao}. Em resposta, ${X} ${acao}${mud}.` };
}
