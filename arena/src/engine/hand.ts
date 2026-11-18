// Motor de uma mão heads-up de Texas Hold'em No Limit, conforme a seção 1.1 e 7 do relatório.
// O motor é a única autoridade sobre cartas e fichas: valida (C2), aplica cada ação uma
// única vez por versão (C3), filtra visões (C1) e confere invariantes após cada evento (C5).
import { Card, Rng, cardToString, fullDeck, parseCard } from './cards.js';
import { bestFive, describe, evaluate } from './evaluator.js';
import {
  ActionMsg,
  AgentView,
  EngineEvent,
  EventType,
  LegalActions,
  Phase,
  SEATS,
  Seat,
  Street,
  Table,
  other,
} from './types.js';

export interface HandSetup {
  mao: number;
  /** Botão = small blind no heads-up; age primeiro no pré-flop. */
  botao: Seat;
  sb: number;
  bb: number;
  /** Saldos antes dos blinds. */
  saldos: Record<Seat, number>;
  rng?: Rng;
  /** Cenário fixo (dados sintéticos do relatório). */
  cartas?: { A: string[]; B: string[]; board: string[] };
}

export interface HandResult {
  vencedor: Seat | 'empate' | null;
  motivo: 'fold' | 'showdown' | 'interrompida';
  saldosFinais: Record<Seat, number>;
  resultado: Record<Seat, number>;
  pote: number;
}

const BETTING: Phase[] = ['PRE_FLOP', 'FLOP', 'TURN', 'RIVER'];
const NEXT: Record<Street, Street | null> = { pre_flop: 'flop', flop: 'turn', turn: 'river', river: null };
const PHASE_OF: Record<Street, Phase> = { pre_flop: 'PRE_FLOP', flop: 'FLOP', turn: 'TURN', river: 'RIVER' };

export class Hand {
  readonly mao: number;
  readonly botao: Seat;
  readonly sb: number;
  readonly bb: number;
  readonly totalFichas: number;
  readonly saldosIniciais: Record<Seat, number>;

  fase: Phase = 'PREPARACAO';
  etapa: Street = 'pre_flop';
  saldos: Record<Seat, number>;
  pote = 0;
  contrib: Record<Seat, number> = { A: 0, B: 0 };
  totalMao: Record<Seat, number> = { A: 0, B: 0 };
  maiorContrib = 0;
  ultimoAumento: number;
  precisaAgir = new Set<Seat>();
  vez: Seat | null = null;
  versao = 0;

  private privadas: Record<Seat, Card[]>;
  private boardFuturo: Card[];
  mesa: Card[] = [];
  events: EngineEvent[] = [];
  result: HandResult | null = null;
  checagensInvariante = 0;

  constructor(setup: HandSetup, private seq: { n: number } = { n: 0 }) {
    this.mao = setup.mao;
    this.botao = setup.botao;
    this.sb = setup.sb;
    this.bb = setup.bb;
    this.ultimoAumento = setup.bb;
    this.saldos = { ...setup.saldos };
    this.saldosIniciais = { ...setup.saldos };
    this.totalFichas = setup.saldos.A + setup.saldos.B;

    // P4: entradas com cartas únicas e saldos coerentes.
    for (const s of SEATS) {
      if (!Number.isInteger(this.saldos[s]) || this.saldos[s] <= 0) throw new Error(`Saldo inválido para ${s}`);
    }
    if (setup.cartas) {
      this.privadas = { A: setup.cartas.A.map(parseCard), B: setup.cartas.B.map(parseCard) };
      this.boardFuturo = setup.cartas.board.map(parseCard);
    } else {
      const deck = (setup.rng ?? new Rng(setup.mao)).shuffle(fullDeck());
      this.privadas = { A: [deck[0], deck[2]], B: [deck[1], deck[3]] };
      this.boardFuturo = deck.slice(4, 9);
    }
    const all = [...this.privadas.A, ...this.privadas.B, ...this.boardFuturo];
    if (all.length !== 9 || new Set(all).size !== 9) throw new Error('Cenário com cartas duplicadas (P4)');

    this.emit('inicio_mao', { botao: this.botao, sb: this.sb, bb: this.bb, saldos: { ...this.saldos } });
    for (const s of SEATS) {
      this.emit('cartas_privadas', { cartas: this.privadas[s].map(cardToString) }, { agente: s, privadoPara: s });
    }
    // Blinds: contam como contribuição da etapa. Se o saldo não cobre o blind, deposita o que tem.
    const bbSeat = other(this.botao);
    this.postBlind(this.botao, this.sb, 'small');
    this.postBlind(bbSeat, this.bb, 'big');
    this.fase = 'PRE_FLOP';
    this.maiorContrib = Math.max(this.contrib.A, this.contrib.B);
    this.precisaAgir = new Set(SEATS.filter((s) => this.saldos[s] > 0));
    this.advance(this.botao);
  }

  // ───────────────────────── Visões e regras ─────────────────────────

  get emAndamento() {
    return BETTING.includes(this.fase);
  }

  legal(s: Seat): LegalActions {
    const o = other(s);
    const stack = this.saldos[s];
    const aPagar = Math.max(0, this.maiorContrib - this.contrib[s]);
    const oppAllIn = this.saldos[o] === 0;
    const maxTotal = this.contrib[s] + stack;
    const tipos: LegalActions['tipos'] = [];
    let minTotal: number | null = null;

    if (aPagar === 0) {
      tipos.push('check');
      if (!oppAllIn && stack > 0) {
        if (this.maiorContrib === 0) {
          if (stack >= this.bb) {
            tipos.push('bet');
            minTotal = this.bb;
          }
        } else {
          // Opção do big blind no pré-flop sem aumento.
          const min = this.maiorContrib + this.ultimoAumento;
          if (maxTotal >= min) {
            tipos.push('raise');
            minTotal = min;
          }
        }
        tipos.push('all_in');
      }
    } else {
      tipos.push('fold', 'call');
      if (!oppAllIn && stack > aPagar) {
        const min = this.maiorContrib + this.ultimoAumento;
        if (maxTotal >= min) {
          tipos.push('raise');
          minTotal = min;
        }
        tipos.push('all_in');
      } else if (stack <= aPagar && stack > 0) {
        tipos.push('all_in'); // equivale a call total/parcial
      }
    }
    return { tipos, aPagar, valorCall: Math.min(aPagar, stack), minTotal, maxTotal };
  }

  table(): Table {
    return {
      saldos: { ...this.saldos },
      pote: this.pote,
      contrib: { ...this.contrib },
      mesa: this.mesa.map(cardToString),
      fase: this.fase,
      etapa: this.etapa,
      vez: this.vez,
      versao: this.versao,
    };
  }

  /** C1: visão específica por agente — cartas próprias, nunca as do oponente ou futuras. */
  view(s: Seat): AgentView {
    return {
      agente: s,
      mao: this.mao,
      versao: this.versao,
      etapa: this.etapa,
      minhasCartas: this.privadas[s].map(cardToString),
      mesa: this.mesa.map(cardToString),
      saldos: { ...this.saldos },
      pote: this.pote,
      contrib: { ...this.contrib },
      botao: this.botao,
      sb: this.sb,
      bb: this.bb,
      vez: this.vez,
      legais: this.legal(s),
      historicoMao: this.events.filter((e) => Hand.visibleTo(e, s)),
    };
  }

  static visibleTo(e: EngineEvent, s: Seat): boolean {
    if (e.somenteOperador) return false;
    if (e.privadoPara && e.privadoPara !== s) return false;
    return true;
  }

  /** Visão do operador (espectador): tudo, inclusive cartas privadas. */
  spectatorCards() {
    return {
      A: this.privadas.A.map(cardToString),
      B: this.privadas.B.map(cardToString),
      boardFuturo: this.boardFuturo.map(cardToString),
    };
  }

  // ───────────────────────── Validação e aplicação ─────────────────────────

  /** C2 + C3: validação sintática e semântica antes de qualquer alteração de fichas. */
  validate(msg: ActionMsg): string | null {
    if (!this.emAndamento) return 'a mão não aceita ações neste estado';
    if (msg.agente !== this.vez) return `ação fora da vez (vez de ${this.vez})`;
    if (msg.versao !== this.versao) return `versão ${msg.versao} difere da atual ${this.versao} (repetida ou atrasada)`;
    const lg = this.legal(msg.agente);
    if (!lg.tipos.includes(msg.tipo)) return `ação ${msg.tipo} não permitida (legais: ${lg.tipos.join(', ')})`;
    if (msg.tipo === 'bet' || msg.tipo === 'raise') {
      const t = msg.total_etapa;
      if (typeof t !== 'number' || !Number.isInteger(t)) return 'total_etapa deve ser inteiro';
      if (t > lg.maxTotal) return `total ${t} excede o saldo disponível (máx ${lg.maxTotal})`;
      if (t < (lg.minTotal ?? Infinity) && t !== lg.maxTotal) return `total ${t} abaixo do mínimo ${lg.minTotal}`;
    }
    return null;
  }

  /** Ação padrão legal para rejeição ou timeout: check se possível, senão fold. */
  defaultAction(s: Seat): ActionMsg {
    const lg = this.legal(s);
    return { agente: s, versao: this.versao, tipo: lg.tipos.includes('check') ? 'check' : 'fold' };
  }

  submit(msg: ActionMsg): { ok: boolean; erro?: string } {
    const erro = this.validate(msg);
    if (erro) {
      this.emit('rejeicao', { erro, mensagem: msg }, { agente: msg.agente, somenteOperador: true });
      return { ok: false, erro };
    }
    this.apply(msg);
    return { ok: true };
  }

  private apply(msg: ActionMsg) {
    const s = msg.agente;
    const o = other(s);
    const aPagar = Math.max(0, this.maiorContrib - this.contrib[s]);
    let valor = 0;
    let classificacao: string = msg.tipo;

    if (msg.tipo === 'fold') {
      this.versao++;
      this.emit('acao', { tipo: 'fold', valor: 0, total_etapa: this.contrib[s], classificacao }, { agente: s });
      this.finishFold(o);
      return;
    }
    if (msg.tipo === 'check') {
      this.precisaAgir.delete(s);
    } else if (msg.tipo === 'call') {
      valor = Math.min(aPagar, this.saldos[s]);
      this.move(s, valor);
      this.precisaAgir.delete(s);
      if (this.saldos[s] === 0) classificacao = valor < aPagar ? 'call parcial (all-in)' : 'call (all-in)';
    } else {
      const total = msg.tipo === 'all_in' ? this.contrib[s] + this.saldos[s] : (msg.total_etapa as number);
      valor = total - this.contrib[s];
      const eraAberta = this.maiorContrib > 0;
      this.move(s, valor);
      const allIn = this.saldos[s] === 0;
      if (total > this.maiorContrib) {
        const inc = total - this.maiorContrib;
        const completo = inc >= this.ultimoAumento;
        if (completo) this.ultimoAumento = inc;
        this.maiorContrib = total;
        this.precisaAgir = new Set([o]);
        if (!eraAberta) classificacao = allIn ? 'bet (all-in)' : 'bet';
        else if (completo) classificacao = allIn ? 'raise (all-in)' : 'raise';
        else classificacao = 'raise incompleto (all-in) — não reabre aumento';
      } else {
        this.precisaAgir.delete(s);
        classificacao = total < this.maiorContrib ? 'call parcial (all-in)' : 'call (all-in)';
      }
    }
    this.versao++;
    this.emit('acao', { tipo: msg.tipo, valor, total_etapa: this.contrib[s], classificacao }, { agente: s });
    if (!this.checkInvariants()) return;
    this.advance(o);
  }

  // ───────────────────────── Transições ─────────────────────────

  private move(s: Seat, v: number) {
    this.saldos[s] -= v;
    this.contrib[s] += v;
    this.totalMao[s] += v;
    this.pote += v;
  }

  private postBlind(s: Seat, valor: number, tipo: 'small' | 'big') {
    const v = Math.min(valor, this.saldos[s]);
    this.move(s, v);
    this.emit('blind', { blind: tipo, valor: v, allIn: this.saldos[s] === 0 }, { agente: s });
  }

  private advance(prefer: Seat) {
    for (const s of [...this.precisaAgir]) if (this.saldos[s] === 0) this.precisaAgir.delete(s);
    for (const s of [...this.precisaAgir]) {
      if (this.saldos[other(s)] === 0 && this.contrib[s] >= this.maiorContrib) this.precisaAgir.delete(s);
    }
    if (this.precisaAgir.size === 0) {
      this.vez = null;
      this.closeStreet();
      return;
    }
    this.vez = this.precisaAgir.has(prefer) ? prefer : other(prefer);
  }

  private closeStreet() {
    if (this.contrib.A !== this.contrib.B) {
      const hi: Seat = this.contrib.A > this.contrib.B ? 'A' : 'B';
      const lo = other(hi);
      const diff = this.contrib[hi] - this.contrib[lo];
      if (this.saldos[lo] !== 0) return this.interrupt('contribuições desiguais sem all-in ao fechar a etapa');
      // Devolve a parte não coberta da contribuição maior (não é pote paralelo).
      this.saldos[hi] += diff;
      this.contrib[hi] -= diff;
      this.totalMao[hi] -= diff;
      this.pote -= diff;
      this.emit('devolucao', { valor: diff, motivo: 'parcela não coberta pelo all-in' }, { agente: hi });
      if (!this.checkInvariants()) return;
    }
    if (this.etapa === 'river') return this.showdown();
    if (this.saldos.A === 0 || this.saldos.B === 0) return this.runout();
    this.nextStreet();
  }

  private dealStreet(): Street {
    const next = NEXT[this.etapa] as Street;
    const n = next === 'flop' ? 3 : 1;
    const novas = this.boardFuturo.slice(this.mesa.length, this.mesa.length + n);
    this.mesa.push(...novas);
    this.etapa = next;
    this.contrib = { A: 0, B: 0 };
    this.maiorContrib = 0;
    this.ultimoAumento = this.bb;
    return next;
  }

  private nextStreet() {
    const next = this.dealStreet();
    this.fase = PHASE_OF[next];
    this.emit('nova_etapa', { cartas: this.mesa.slice(next === 'flop' ? 0 : -1).map(cardToString) });
    this.precisaAgir = new Set(SEATS.filter((s) => this.saldos[s] > 0));
    this.advance(other(this.botao)); // pós-flop age primeiro quem não está no botão
  }

  private runout() {
    this.fase = 'RUNOUT';
    this.contrib = { A: 0, B: 0 };
    this.emit('runout', {
      cartas: { A: this.privadas.A.map(cardToString), B: this.privadas.B.map(cardToString) },
    });
    while (this.etapa !== 'river') {
      const next = this.dealStreet();
      this.emit('nova_etapa', { cartas: this.mesa.slice(next === 'flop' ? 0 : -1).map(cardToString), runout: true });
    }
    this.showdown();
  }

  private showdown() {
    this.fase = 'REVELACAO';
    this.vez = null;
    const maos: Record<string, any> = {};
    const scores: Record<Seat, number> = { A: 0, B: 0 };
    for (const s of SEATS) {
      const cards = [...this.privadas[s], ...this.mesa];
      scores[s] = evaluate(cards);
      const best = bestFive(cards);
      maos[s] = { cartas: this.privadas[s].map(cardToString), melhor: best.cards.map(cardToString), descricao: describe(scores[s]) };
    }
    const vencedor: Seat | 'empate' = scores.A === scores.B ? 'empate' : scores.A > scores.B ? 'A' : 'B';
    this.emit('showdown', { maos, vencedor });
    const dist: Record<Seat, number> = { A: 0, B: 0 };
    if (vencedor === 'empate') {
      const metade = Math.floor(this.pote / 2);
      dist.A = metade;
      dist.B = metade;
      dist[other(this.botao)] += this.pote - 2 * metade; // ficha indivisível: primeiro a agir após o flop
    } else dist[vencedor] = this.pote;
    this.distribute(dist, vencedor, 'showdown');
  }

  private finishFold(vencedor: Seat) {
    this.vez = null;
    const dist: Record<Seat, number> = { A: 0, B: 0 };
    dist[vencedor] = this.pote;
    this.distribute(dist, vencedor, 'fold');
  }

  private distribute(dist: Record<Seat, number>, vencedor: Seat | 'empate', motivo: 'fold' | 'showdown') {
    const pote = this.pote;
    for (const s of SEATS) this.saldos[s] += dist[s];
    this.pote = 0;
    this.contrib = { A: 0, B: 0 };
    this.fase = 'ENCERRADA';
    this.emit('pote', { distribuicao: dist, pote });
    if (!this.checkInvariants()) return;
    const resultado = { A: this.saldos.A - this.saldosIniciais.A, B: this.saldos.B - this.saldosIniciais.B };
    this.result = { vencedor, motivo, saldosFinais: { ...this.saldos }, resultado, pote };
    this.emit('fim_mao', { vencedor, motivo, saldosFinais: { ...this.saldos }, resultado, pote });
  }

  /** C5: conservação de fichas e saldo não negativo após cada evento. */
  private checkInvariants(): boolean {
    this.checagensInvariante++;
    const soma = this.saldos.A + this.saldos.B + this.pote;
    if (soma !== this.totalFichas || this.saldos.A < 0 || this.saldos.B < 0) {
      this.interrupt(`invariante violada: A+B+pote=${soma}, esperado ${this.totalFichas}`);
      return false;
    }
    return true;
  }

  private interrupt(motivo: string) {
    this.fase = 'INTERROMPIDA';
    this.vez = null;
    this.emit('invariante', { ok: false, motivo }, { somenteOperador: true });
    this.result = { vencedor: null, motivo: 'interrompida', saldosFinais: { ...this.saldos }, resultado: { A: 0, B: 0 }, pote: this.pote };
  }

  private emit(tipo: EventType, dados: Record<string, any>, extra: Partial<EngineEvent> = {}) {
    const e: EngineEvent = { seq: ++this.seq.n, mao: this.mao, tipo, etapa: this.etapa, dados, estado: this.table(), ...extra };
    this.events.push(e);
  }
}
