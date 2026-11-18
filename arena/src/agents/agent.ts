// Agente heurístico adaptativo. Recebe somente a visão autorizada (C1) e os eventos públicos.
// Ciclo: ação → resposta do oponente → observação (modelo) → adaptação (regras), com memória entre partidas.
import { Rng } from '../engine/cards.js';
import { ActionMsg, ActionType, AgentView, EngineEvent, Seat, other } from '../engine/types.js';
import { equity, handPercentile } from './equity.js';
import { METRICS, MetricId, OpponentModel } from './model.js';
import { POLICY_LABELS, PROFILES, Policy, PolicyKey, RULES, clampPolicy } from './policy.js';

export interface Decision {
  msg: ActionMsg;
  categoria: 'valor' | 'blefe' | 'roubo' | 'armadilha' | 'call' | 'check' | 'fold' | 'pressao';
  raciocinio: string;
  equidade: number;
  potOdds: number;
}

export interface Adaptacao {
  id?: number;
  agente: Seat;
  partida: number;
  mao: number;
  maoGlobal: number;
  tipo: 'regra_ativada' | 'regra_desativada' | 'contexto' | 'mudanca_detectada' | 'treinador';
  regra?: string;
  rotulo?: string;
  metrica?: MetricId;
  direcao?: 'sobe' | 'desce';
  observacao: string;
  resposta: string;
  mudancas: { param: string; de: number; para: number }[];
  estimativa?: number;
  amostras?: number;
}

export interface HandCtx {
  partida: number;
  mao: number;
  maoGlobal: number;
  bb: number;
  saldos: Record<Seat, number>;
}

type Eff = 'aggr' | 'call' | 'check' | 'fold';
function effOf(e: EngineEvent): Eff {
  const c: string = e.dados.classificacao ?? e.dados.tipo;
  if (c.startsWith('bet') || c.startsWith('raise')) return 'aggr';
  if (c.startsWith('call')) return 'call';
  if (c === 'check') return 'check';
  return 'fold';
}

const pct = (x: number) => `${Math.round(x * 100)}%`;
const SHIFT_METRICS: MetricId[] = ['foldToBet', 'agressao', 'rouboAposCheck', 'blefeShowdown', 'pfr'];

interface HandTrack {
  pendingMyAggr: boolean;
  oppChecked: boolean;
  oppCheckedThenIBet: boolean;
  myCheckPending: boolean;
  myBluffPending: boolean;
  lastDecisionBluff: boolean;
  lastAggr: Seat | null;
  oppActedPre: boolean;
  oppVpip: boolean;
  oppPfr: boolean;
}
const freshTrack = (): HandTrack => ({
  pendingMyAggr: false, oppChecked: false, oppCheckedThenIBet: false, myCheckPending: false,
  myBluffPending: false, lastDecisionBluff: false, lastAggr: null, oppActedPre: false, oppVpip: false, oppPfr: false,
});

export class HeuristicAgent {
  readonly id: Seat;
  readonly opp: Seat;
  profileId: string;
  base: Policy;
  model = new OpponentModel();
  ativas = new Set<string>();
  shift: Partial<Record<MetricId, boolean>> = {};
  modoCurto = false;
  /** Mão global da última mudança de cada regra (evita oscilação). */
  ultimaMudanca: Record<string, number> = {};
  private h: HandTrack = freshTrack();
  private ctx: HandCtx = { partida: 0, mao: 0, maoGlobal: 0, bb: 10, saldos: { A: 0, B: 0 } };
  private rng: Rng;
  /** Contadores privados (somente auditoria/operador). */
  categorias: Record<string, number> = {};

  constructor(id: Seat, profileId: string, seed: number) {
    this.id = id;
    this.opp = other(id);
    this.profileId = profileId;
    this.base = { ...(PROFILES.find((p) => p.id === profileId) ?? PROFILES[0]).policy };
    this.rng = new Rng(seed);
  }

  policy(): Policy {
    const p = { ...this.base };
    for (const r of RULES) {
      if (!this.ativas.has(r.id)) continue;
      for (const [k, v] of Object.entries(r.delta)) p[k as PolicyKey] += v as number;
    }
    return clampPolicy(p);
  }

  // ───────────────────────── Observação ─────────────────────────

  observe(e: EngineEvent) {
    const me = this.id;
    const opp = this.opp;
    const { partida, mao } = this.ctx;
    const M = this.model.m;
    switch (e.tipo) {
      case 'inicio_mao':
        this.h = freshTrack();
        break;
      case 'nova_etapa':
        Object.assign(this.h, { pendingMyAggr: false, oppChecked: false, oppCheckedThenIBet: false, myCheckPending: false });
        break;
      case 'acao': {
        const eff = effOf(e);
        if (e.agente === opp) {
          if (this.h.pendingMyAggr) {
            const folded = eff === 'fold';
            this.model.predict('desiste_contra_aposta', this.model.est('foldToBet').p, folded, partida);
            M.foldToBet.add(folded ? 1 : 0, partida, mao);
            if (this.h.myBluffPending) M.meuBlefeSucesso.add(folded ? 1 : 0, partida, mao);
            if (this.h.oppCheckedThenIBet) M.checkRaise.add(eff === 'aggr' ? 1 : 0, partida, mao);
            Object.assign(this.h, { pendingMyAggr: false, oppCheckedThenIBet: false, myBluffPending: false });
          } else if (this.h.myCheckPending) {
            const bet = eff === 'aggr';
            this.model.predict('aposta_apos_check', this.model.est('rouboAposCheck').p, bet, partida);
            M.rouboAposCheck.add(bet ? 1 : 0, partida, mao);
            this.h.myCheckPending = false;
          }
          if (eff === 'aggr' || eff === 'call') M.agressao.add(eff === 'aggr' ? 1 : 0, partida, mao);
          if (e.etapa === 'pre_flop') {
            this.h.oppActedPre = true;
            if (eff === 'aggr' || eff === 'call') this.h.oppVpip = true;
            if (eff === 'aggr') this.h.oppPfr = true;
          }
          if (eff === 'check') this.h.oppChecked = true;
          if (eff === 'aggr') this.h.lastAggr = opp;
        } else if (e.agente === me) {
          if (eff === 'aggr') {
            this.h.pendingMyAggr = true;
            this.h.oppCheckedThenIBet = this.h.oppChecked;
            this.h.myBluffPending = this.h.lastDecisionBluff;
            this.h.lastAggr = me;
          } else if (eff === 'check') {
            this.h.myCheckPending = true;
          }
          this.h.lastDecisionBluff = false;
        }
        break;
      }
      case 'showdown': {
        if (this.h.lastAggr === opp && e.estado.mesa.length === 5) {
          const pctl = handPercentile(e.dados.maos[opp].cartas, e.estado.mesa);
          M.blefeShowdown.add(pctl < 0.5 ? 1 : 0, partida, mao);
        }
        break;
      }
      case 'fim_mao':
        if (this.h.oppActedPre) {
          M.vpip.add(this.h.oppVpip ? 1 : 0, partida, mao);
          M.pfr.add(this.h.oppPfr ? 1 : 0, partida, mao);
        }
        break;
    }
  }

  // ───────────────────────── Decisão ─────────────────────────

  decide(v: AgentView): Decision {
    const pol = this.policy();
    const lg = v.legais;
    const r = this.rng.next();
    const me = this.id;
    const opp = this.opp;
    const toCall = lg.aPagar;
    const pot = v.pote;
    const maior = Math.max(v.contrib.A, v.contrib.B);
    const preflop = v.etapa === 'pre_flop';
    // Faixa provável do oponente: só ações públicas desta mão + taxa de blefe aprendida em showdowns.
    const acoes = v.historicoMao.filter((e) => e.tipo === 'acao');
    const isAggr = (e: EngineEvent) => effOf(e) === 'aggr';
    const oppPre = acoes.filter((e) => e.agente === opp && e.etapa === 'pre_flop' && isAggr(e)).length;
    const oppPos = acoes.filter((e) => e.agente === opp && e.etapa !== 'pre_flop' && isAggr(e)).length;
    const guerra = acoes.filter((e) => e.etapa === v.etapa && isAggr(e)).length;
    const blefeOpp = this.model.est('blefeShowdown').p;
    const agr = this.model.est('agressao').p;
    const faixa = { nivel: preflop ? oppPre : oppPos + (oppPre >= 2 ? 1 : 0), blefe: Math.min(0.6, Math.max(0.05, blefeOpp * (agr > 0.55 ? 1.3 : 1))) };
    const eq = equity(v.minhasCartas, v.mesa, 450, this.rng, faixa);
    const eqAdj = eq;
    const potOdds = toCall > 0 ? toCall / (pot + toCall) : 0;
    const effBB = Math.min(v.saldos[me] + v.contrib[me], v.saldos[opp] + v.contrib[opp]) / v.bb;
    const soBlinds = preflop && maior <= v.bb;
    const foldOpp = this.model.est('foldToBet').p;

    const canRaise = lg.tipos.includes('raise') || lg.tipos.includes('bet') || (lg.tipos.includes('all_in') && lg.maxTotal > maior);
    const base = faixa.nivel > 0
      ? `equidade ${pct(eq)} contra a faixa de ${opp} (${faixa.nivel} aposta${faixa.nivel > 1 ? 's' : ''}, blefa ~${pct(faixa.blefe)})`
      : `equidade ${pct(eq)} contra mão aleatória`;

    const mk = (tipo: ActionType, cat: Decision['categoria'], txt: string, total?: number): Decision => {
      if (cat === 'blefe' || cat === 'roubo' || (cat === 'pressao' && eq < 0.5)) this.h.lastDecisionBluff = true;
      this.categorias[cat] = (this.categorias[cat] ?? 0) + 1;
      return {
        msg: { agente: me, versao: v.versao, tipo, total_etapa: total },
        categoria: cat,
        raciocinio: `${txt} — ${base}${toCall ? `, pot odds ${pct(potOdds)}` : ''}`,
        equidade: eq,
        potOdds,
      };
    };

    const aggressive = (frac: number, cat: Decision['categoria'], txt: string): Decision => {
      if (!canRaise) return toCall ? mk('call', 'call', `${txt}, mas não pode aumentar: paga`) : mk('check', 'check', txt);
      let total: number;
      if (preflop) total = maior <= v.bb ? Math.round(v.bb * (2.2 + pol.agressividade)) : Math.round(maior * 3);
      else if (maior === 0) total = Math.round(pot * frac);
      else total = maior + Math.max(maior, Math.round((pot + toCall) * frac));
      const step = v.bb >= 20 ? 5 : 1;
      total = Math.round(total / step) * step;
      if (lg.minTotal === null || total >= lg.maxTotal * 0.65 || lg.minTotal > lg.maxTotal) {
        return mk('all_in', cat, `${txt} (all-in de ${v.saldos[me]})`);
      }
      total = Math.max(lg.minTotal, Math.min(total, lg.maxTotal));
      const tipo: ActionType = maior === 0 ? 'bet' : 'raise';
      if (!lg.tipos.includes(tipo)) return mk('all_in', cat, `${txt} (all-in)`);
      return mk(tipo, cat, `${txt} (${tipo} para ${total})`, total);
    };

    // Stack curto: modo push/fold no pré-flop.
    if (preflop && effBB <= 12) {
      if (toCall === 0 || soBlinds) {
        const thr = 0.5 - 0.12 * pol.agressividade - 0.25 * (foldOpp - 0.45);
        if (eq >= thr && lg.tipos.includes('all_in'))
          return mk('all_in', eq >= 0.55 ? 'valor' : 'pressao', `Stack curto (${effBB.toFixed(1).replace('.', ',')} BB): all-in porque a equidade supera o limiar ${pct(thr)} e ${opp} desiste ${pct(foldOpp)}`);
        if (toCall === 0) return mk('check', 'check', `Stack curto: mão abaixo do limiar ${pct(thr)}, check`);
        return mk('fold', 'fold', `Stack curto: mão abaixo do limiar ${pct(thr)}, desiste`);
      }
      if (eqAdj >= potOdds + pol.margemCall) return mk(lg.tipos.includes('call') ? 'call' : 'all_in', 'call', 'Stack curto: paga o all-in, a equidade cobre as pot odds');
      return mk('fold', 'fold', 'Stack curto: equidade insuficiente para pagar');
    }

    if (toCall === 0) {
      if (canRaise && eq >= pol.limiarValor) {
        if (eq >= 0.75 && r < pol.freqArmadilha && v.etapa !== 'river')
          return mk('check', 'armadilha', `Mão muito forte: check para induzir ${opp} a apostar (armadilha ${pct(pol.freqArmadilha)})`);
        return aggressive(pol.tamanhoAposta * (0.85 + 0.3 * pol.agressividade), 'valor', 'Aposta por valor');
      }
      if (canRaise && this.h.oppChecked && r < pol.freqRoubo * (eq < 0.5 ? 1 : 0.6))
        return aggressive(0.4, 'roubo', `${opp} deu check: tenta roubar o pote (roubo ${pct(pol.freqRoubo)}, ${opp} desiste ${pct(foldOpp)})`);
      if (canRaise && eq < 0.45 && r < pol.freqBlefe)
        return aggressive(0.55, 'blefe', `Blefe com mão fraca (freq. ${pct(pol.freqBlefe)}, ${opp} desiste ${pct(foldOpp)})`);
      return mk('check', 'check', eq >= 0.45 ? 'Mão média: check para controlar o pote' : 'Mão fraca: check');
    }

    // Diante de valor a pagar.
    if (soBlinds && canRaise && eq >= pol.limiarValor - 0.08 && r < 0.45 + 0.5 * pol.agressividade)
      return aggressive(0, 'valor', 'Abre o pote com aumento');
    if (eqAdj >= pol.limiarValor + 0.12 + 0.08 * Math.max(0, guerra - 1) && canRaise) {
      if (r < pol.freqArmadilha * 0.6 && v.etapa !== 'river')
        return mk('call', 'armadilha', `Mão forte: apenas paga para manter ${opp} apostando`);
      if (r < 0.4 + 0.5 * pol.agressividade) return aggressive(pol.tamanhoAposta, 'valor', 'Aumenta por valor');
      return mk('call', 'valor', 'Mão forte: paga');
    }
    if (eqAdj >= potOdds + pol.margemCall)
      return mk(lg.tipos.includes('call') ? 'call' : 'all_in', 'call', `Paga: equidade cobre pot odds + margem ${pct(pol.margemCall)}`);
    if (canRaise && eq < 0.35 && r < pol.freqBlefe * 0.35)
      return aggressive(0.7, 'blefe', `Re-aumento como blefe (freq. ${pct(pol.freqBlefe)})`);
    return mk('fold', 'fold', `Desiste: equidade abaixo de pot odds + margem ${pct(pol.margemCall)}`);
  }

  // ───────────────────────── Adaptação ─────────────────────────

  beginHand(ctx: HandCtx): Adaptacao[] {
    this.ctx = ctx;
    const out: Adaptacao[] = [];
    const effBB = Math.min(ctx.saldos.A, ctx.saldos.B) / ctx.bb;
    const novo = this.modoCurto ? effBB <= 16 : effBB <= 12;
    if (novo !== this.modoCurto) {
      this.modoCurto = novo;
      out.push({
        agente: this.id, partida: ctx.partida, mao: ctx.mao, maoGlobal: ctx.maoGlobal, tipo: 'contexto',
        observacao: `com blinds de ${ctx.bb / 2}/${ctx.bb}, o menor stack vale ${effBB.toFixed(1).replace('.', ',')} big blinds`,
        resposta: novo ? 'entrou em modo push/fold (all-in ou desistência no pré-flop)' : 'saiu do modo push/fold e voltou a jogar todas as etapas',
        mudancas: [{ param: 'modoCurto', de: novo ? 0 : 1, para: novo ? 1 : 0 }],
      });
    }
    return out;
  }

  endHand(): Adaptacao[] {
    const { partida, mao, maoGlobal } = this.ctx;
    const opp = this.opp;
    const me = this.id;
    const out: Adaptacao[] = [];

    for (const id of SHIFT_METRICS) {
      const est = this.model.est(id);
      if (est.mudou && !this.shift[id]) {
        const dir = est.pRecente > est.pLongo ? 'sobe' : 'desce';
        out.push({
          agente: me, partida, mao, maoGlobal, tipo: 'mudanca_detectada', metrica: id, direcao: dir,
          observacao: `${opp} começou a ${METRICS[id][dir]} — ${METRICS[id].nome.toLowerCase()} foi de ${pct(est.pLongo)} (histórico) para ${pct(est.pRecente)} (recente)`,
          resposta: `passou a confiar na leitura recente em vez do histórico`,
          mudancas: [], estimativa: est.pRecente, amostras: Math.round(est.nRecente),
        });
      }
      this.shift[id] = est.mudou;
    }

    for (const rule of RULES) {
      const est = this.model.est(rule.metrica);
      const ativa = this.ativas.has(rule.id);
      let liga: boolean | null = null;
      if (!ativa && est.n >= rule.minN && rule.ativa(est.p)) liga = true;
      else if (ativa && rule.desativa(est.p)) liga = false;
      if (liga === null) continue;
      if (maoGlobal - (this.ultimaMudanca[rule.id] ?? -99) < 6) continue;
      this.ultimaMudanca[rule.id] = maoGlobal;
      const antes = this.policy();
      if (liga) this.ativas.add(rule.id);
      else this.ativas.delete(rule.id);
      const depois = this.policy();
      const mudancas = (Object.keys(antes) as PolicyKey[])
        .filter((k) => antes[k] !== depois[k])
        .map((k) => ({ param: k, de: antes[k], para: depois[k] }));
      const dir: 'sobe' | 'desce' = rule.ativa(1) ? 'sobe' : 'desce';
      out.push({
        agente: me, partida, mao, maoGlobal,
        tipo: liga ? 'regra_ativada' : 'regra_desativada',
        regra: rule.id, rotulo: rule.rotulo, metrica: rule.metrica, direcao: liga ? dir : dir === 'sobe' ? 'desce' : 'sobe',
        observacao: this.describeObs(rule.metrica, est, liga),
        resposta: liga ? rule.resposta : `abandonou a postura "${rule.rotulo}"`,
        mudancas, estimativa: est.p, amostras: Math.round(est.n),
      });
    }
    return out;
  }

  private describeObs(id: MetricId, est: ReturnType<OpponentModel['est']>, liga: boolean): string {
    const o = this.opp;
    const kn = est.n20 ? ` (${est.k20}/${est.n20} recentes)` : '';
    const base: Record<MetricId, string> = {
      foldToBet: `${o} desiste diante de ${pct(est.p)} das apostas${kn}`,
      agressao: `${o} aposta ou aumenta em ${pct(est.p)} das suas ações${kn}`,
      blefeShowdown: `${o} mostrou mão fraca em ${pct(est.p)} dos showdowns em que apostou${kn}`,
      checkRaise: `${o} dá check-raise em ${pct(est.p)} das oportunidades${kn}`,
      rouboAposCheck: `${o} aposta em ${pct(est.p)} das vezes depois do check de ${this.id}${kn}`,
      meuBlefeSucesso: `os blefes de ${this.id} funcionam em ${pct(est.p)} das vezes${kn}`,
      vpip: `${o} entra em ${pct(est.p)} dos potes`,
      pfr: `${o} aumenta no pré-flop em ${pct(est.p)} das mãos`,
    };
    return liga ? base[id] : `${base[id]}; a leitura que motivou essa postura deixou de valer`;
  }

  /** Estado para o painel (somente operador). */
  snapshot() {
    const est = Object.fromEntries(
      (Object.keys(METRICS) as MetricId[]).map((id) => {
        const e = this.model.est(id);
        return [id, { p: e.p, n: e.n, pLongo: e.pLongo, pRecente: e.pRecente, mudou: e.mudou, nLongo: e.nLongo }];
      }),
    );
    return {
      id: this.id,
      perfil: this.profileId,
      base: this.base,
      politica: this.policy(),
      ativas: [...this.ativas].map((id) => RULES.find((r) => r.id === id)?.rotulo ?? id),
      modoCurto: this.modoCurto,
      leitura: est,
      conhecimento: this.model.conhecimento(),
      precisao: this.model.precisao(),
      categorias: this.categorias,
      labels: POLICY_LABELS,
    };
  }

  toJSON() {
    return { id: this.id, profileId: this.profileId, base: this.base, model: this.model.toJSON(), ativas: [...this.ativas], shift: this.shift, ultimaMudanca: this.ultimaMudanca, categorias: this.categorias };
  }

  static fromJSON(j: any, seed: number): HeuristicAgent {
    const a = new HeuristicAgent(j.id, j.profileId, seed);
    a.base = j.base ?? a.base;
    a.model = OpponentModel.fromJSON(j.model);
    a.ativas = new Set(j.ativas ?? []);
    a.shift = j.shift ?? {};
    a.ultimaMudanca = j.ultimaMudanca ?? {};
    a.categorias = j.categorias ?? {};
    return a;
  }
}
