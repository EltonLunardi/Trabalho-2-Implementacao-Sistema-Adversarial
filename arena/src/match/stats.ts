// Estatísticas do operador (visão completa, separada das entradas dos agentes).
import type { Decision } from '../agents/agent.js';
import { EngineEvent, SEATS, Seat, other } from '../engine/types.js';

export interface SeatStats {
  maos: number;
  maosGanhas: number;
  vpip: number;
  pfr: number;
  apostas: number; // bet + raise
  calls: number;
  folds: number;
  checks: number;
  enfrentouAposta: number;
  desistiuAposta: number;
  blefes: number;
  blefesSucesso: number;
  armadilhas: number;
  showdowns: number;
  showdownsGanhos: number;
  allIns: number;
  maiorPoteGanho: number;
  fichasGanhas: number;
}

const empty = (): SeatStats => ({
  maos: 0, maosGanhas: 0, vpip: 0, pfr: 0, apostas: 0, calls: 0, folds: 0, checks: 0, enfrentouAposta: 0,
  desistiuAposta: 0, blefes: 0, blefesSucesso: 0, armadilhas: 0, showdowns: 0, showdownsGanhos: 0, allIns: 0,
  maiorPoteGanho: 0, fichasGanhas: 0,
});

export class MatchStats {
  s: Record<Seat, SeatStats> = { A: empty(), B: empty() };
  private pendingAggr: Seat | null = null;
  private pendingBluff: Seat | null = null;
  private lastDecision: Record<Seat, Decision | null> = { A: null, B: null };
  private hv: Record<Seat, boolean> = { A: false, B: false };
  private hp: Record<Seat, boolean> = { A: false, B: false };

  onDecision(seat: Seat, d: Decision) {
    this.lastDecision[seat] = d;
  }

  onEvent(e: EngineEvent) {
    switch (e.tipo) {
      case 'inicio_mao':
        for (const s of SEATS) this.s[s].maos++;
        this.hv = { A: false, B: false };
        this.hp = { A: false, B: false };
        this.pendingAggr = null;
        this.pendingBluff = null;
        break;
      case 'nova_etapa':
        this.pendingAggr = null;
        this.pendingBluff = null;
        break;
      case 'acao': {
        const a = e.agente as Seat;
        const st = this.s[a];
        const c: string = e.dados.classificacao;
        const aggr = c.startsWith('bet') || c.startsWith('raise');
        const call = c.startsWith('call');
        if (this.pendingAggr === other(a)) {
          st.enfrentouAposta++;
          if (c === 'fold') st.desistiuAposta++;
          if (this.pendingBluff === other(a) && c === 'fold') this.s[other(a)].blefesSucesso++;
          this.pendingAggr = null;
          this.pendingBluff = null;
        }
        if (aggr) {
          st.apostas++;
          this.pendingAggr = a;
          const d = this.lastDecision[a];
          if (d && (d.categoria === 'blefe' || d.categoria === 'roubo' || (d.categoria === 'pressao' && d.equidade < 0.5))) {
            st.blefes++;
            this.pendingBluff = a;
          }
        } else if (call) st.calls++;
        else if (c === 'fold') st.folds++;
        else if (c === 'check') st.checks++;
        if (this.lastDecision[a]?.categoria === 'armadilha') st.armadilhas++;
        if (e.dados.tipo === 'all_in' || c.includes('all-in')) st.allIns++;
        if (e.etapa === 'pre_flop') {
          if (aggr || call) this.hv[a] = true;
          if (aggr) this.hp[a] = true;
        }
        this.lastDecision[a] = null;
        break;
      }
      case 'showdown':
        for (const s of SEATS) {
          this.s[s].showdowns++;
          if (e.dados.vencedor === s) this.s[s].showdownsGanhos++;
        }
        break;
      case 'fim_mao':
        for (const s of SEATS) {
          if (this.hv[s]) this.s[s].vpip++;
          if (this.hp[s]) this.s[s].pfr++;
          const r = e.dados.resultado[s];
          if (r > 0) this.s[s].fichasGanhas += r;
        }
        if (e.dados.vencedor === 'A' || e.dados.vencedor === 'B') {
          const w = this.s[e.dados.vencedor as Seat];
          w.maosGanhas++;
          w.maiorPoteGanho = Math.max(w.maiorPoteGanho, e.dados.pote);
        }
        break;
    }
  }

  /** Indicadores derivados para o painel. */
  view() {
    const out: Record<string, any> = {};
    for (const s of SEATS) {
      const x = this.s[s];
      const r = (a: number, b: number) => (b ? a / b : null);
      out[s] = {
        ...x,
        vpipPct: r(x.vpip, x.maos),
        pfrPct: r(x.pfr, x.maos),
        agressaoPct: r(x.apostas, x.apostas + x.calls),
        foldToBetPct: r(x.desistiuAposta, x.enfrentouAposta),
        blefeSucessoPct: r(x.blefesSucesso, x.blefes),
        showdownPct: r(x.showdownsGanhos, x.showdowns),
      };
    }
    return out;
  }
}
