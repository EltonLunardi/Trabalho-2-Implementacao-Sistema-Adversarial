// Modelo do oponente construído SOMENTE a partir de eventos públicos.
// Duas memórias por métrica:
//   - longo prazo (decaimento lento, atravessa partidas): o "conhecimento" acumulado sobre o oponente;
//   - recente (decaimento rápido): detecta quando o oponente muda de comportamento.

export type MetricId =
  | 'foldToBet'
  | 'agressao'
  | 'vpip'
  | 'pfr'
  | 'checkRaise'
  | 'rouboAposCheck'
  | 'blefeShowdown'
  | 'meuBlefeSucesso';

export interface MetricInfo {
  nome: string;
  /** Descrição do comportamento do oponente quando a métrica sobe / desce. */
  sobe: string;
  desce: string;
  prior: number;
}

export const METRICS: Record<MetricId, MetricInfo> = {
  foldToBet: { nome: 'Desiste diante de aposta', sobe: 'desistir mais diante de apostas', desce: 'pagar mais as apostas', prior: 0.45 },
  agressao: { nome: 'Agressão (bet+raise / ações)', sobe: 'apostar e aumentar com mais frequência', desce: 'jogar de forma mais passiva', prior: 0.45 },
  vpip: { nome: 'Entra no pote (VPIP)', sobe: 'entrar em mais potes', desce: 'entrar em menos potes', prior: 0.7 },
  pfr: { nome: 'Aumenta no pré-flop (PFR)', sobe: 'aumentar mais no pré-flop', desce: 'aumentar menos no pré-flop', prior: 0.35 },
  checkRaise: { nome: 'Check-raise', sobe: 'dar check-raise', desce: 'abandonar o check-raise', prior: 0.15 },
  rouboAposCheck: { nome: 'Aposta após meu check', sobe: 'apostar sempre que recebe check', desce: 'aceitar o check e não roubar o pote', prior: 0.4 },
  blefeShowdown: { nome: 'Blefe revelado no showdown', sobe: 'mostrar mãos fracas depois de apostar (blefes)', desce: 'apostar só com mãos fortes', prior: 0.25 },
  meuBlefeSucesso: { nome: 'Meus blefes que funcionaram', sobe: 'desistir diante dos blefes', desce: 'pagar os blefes', prior: 0.5 },
};

interface Obs {
  v: number;
  partida: number;
  mao: number;
}

const DECAY_LONG = 0.993;
const DECAY_RECENT = 0.94;
const PRIOR_N = 3;

export interface Estimate {
  p: number;
  n: number;
  pLongo: number;
  nLongo: number;
  pRecente: number;
  nRecente: number;
  mudou: boolean;
  /** k de n nas últimas 20 observações (texto do relatório). */
  k20: number;
  n20: number;
}

export class Metric {
  obs: Obs[] = [];
  constructor(public id: MetricId) {}

  add(v: number, partida: number, mao: number) {
    this.obs.push({ v, partida, mao });
    if (this.obs.length > 600) this.obs.shift();
  }

  private ewma(decay: number) {
    const prior = METRICS[this.id].prior;
    let w = 1;
    let sw = 0;
    let sv = 0;
    for (let i = this.obs.length - 1; i >= 0; i--) {
      sw += w;
      sv += w * this.obs[i].v;
      w *= decay;
      if (w < 1e-3) break;
    }
    return { p: (sv + prior * PRIOR_N) / (sw + PRIOR_N), n: sw };
  }

  estimate(): Estimate {
    const L = this.ewma(DECAY_LONG);
    const R = this.ewma(DECAY_RECENT);
    const mudou = R.n >= 8 && L.n >= 15 && Math.abs(R.p - L.p) >= 0.18;
    const last = this.obs.slice(-20);
    return {
      p: mudou ? R.p : L.p,
      n: mudou ? R.n : L.n,
      pLongo: L.p,
      nLongo: L.n,
      pRecente: R.p,
      nRecente: R.n,
      mudou,
      k20: last.reduce((a, o) => a + o.v, 0),
      n20: last.length,
    };
  }
}

export interface Prediction {
  tipo: 'desiste_contra_aposta' | 'aposta_apos_check';
  p: number;
  acertou: boolean;
  brier: number;
  partida: number;
}

export class OpponentModel {
  m: Record<MetricId, Metric>;
  predicoes: Prediction[] = [];

  constructor() {
    this.m = Object.fromEntries(Object.keys(METRICS).map((k) => [k, new Metric(k as MetricId)])) as Record<MetricId, Metric>;
  }

  est(id: MetricId) {
    return this.m[id].estimate();
  }

  /** Índice 0–1 de quanto o agente conhece o oponente (amostras efetivas de longo prazo). */
  conhecimento(): number {
    const ids: MetricId[] = ['foldToBet', 'agressao', 'vpip', 'pfr', 'rouboAposCheck', 'blefeShowdown', 'checkRaise'];
    const sat: Record<string, number> = { vpip: 60, pfr: 60, agressao: 60, foldToBet: 40, rouboAposCheck: 30, blefeShowdown: 12, checkRaise: 15 };
    const vals = ids.map((id) => {
      const n = this.m[id].estimate().nLongo;
      return n / (n + sat[id] / 3);
    });
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  }

  predict(tipo: Prediction['tipo'], p: number, outcome: boolean, partida: number) {
    const brier = (p - (outcome ? 1 : 0)) ** 2;
    this.predicoes.push({ tipo, p, acertou: p >= 0.5 === outcome, brier, partida });
    if (this.predicoes.length > 3000) this.predicoes.shift();
  }

  precisao(partida?: number) {
    const ps = partida === undefined ? this.predicoes.slice(-60) : this.predicoes.filter((x) => x.partida === partida);
    if (!ps.length) return null;
    return {
      acerto: ps.filter((x) => x.acertou).length / ps.length,
      brier: ps.reduce((a, x) => a + x.brier, 0) / ps.length,
      n: ps.length,
    };
  }

  toJSON() {
    return {
      obs: Object.fromEntries(Object.entries(this.m).map(([k, v]) => [k, v.obs])),
      predicoes: this.predicoes,
    };
  }

  static fromJSON(j: any): OpponentModel {
    const om = new OpponentModel();
    for (const k of Object.keys(om.m) as MetricId[]) om.m[k].obs = j?.obs?.[k] ?? [];
    om.predicoes = j?.predicoes ?? [];
    return om;
  }
}
