// Arena: executa partidas completas (heads-up até um agente quebrar) com blinds crescentes,
// memória entre partidas, treinador Llama opcional e transmissão ao vivo dos eventos.
import { appendFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { Adaptacao, Decision, HeuristicAgent } from '../agents/agent.js';
import { PROFILES, Policy } from '../agents/policy.js';
import { Rng, hashSeed } from '../engine/cards.js';
import { Hand } from '../engine/hand.js';
import { EngineEvent, SEATS, Seat, other } from '../engine/types.js';
import { CoachConfig, CoachResult, coachStatus, treinar } from '../llm/coach.js';
import { HandRow, MatchSummary, generalReport, matchReport } from '../report/markdown.js';
import { Narrada, narrar } from '../report/narrative.js';
import { MatchStats } from './stats.js';

export const BLINDS: [number, number][] = [
  [5, 10], [10, 20], [15, 30], [20, 40], [30, 60], [40, 80], [50, 100], [75, 150], [100, 200],
  [150, 300], [200, 400], [300, 600], [400, 800], [500, 1000], [750, 1500], [1000, 2000],
];
export function blindsFor(nivel: number): [number, number] {
  if (nivel < BLINDS.length) return BLINDS[nivel];
  const f = 2 ** (nivel - BLINDS.length + 1);
  const [s, b] = BLINDS[BLINDS.length - 1];
  return [s * f, b * f];
}

export type Velocidade = 'lenta' | 'normal' | 'rapida' | 'turbo';
const BASE_MS: Record<Velocidade, number> = { lenta: 1300, normal: 700, rapida: 220, turbo: 6 };

export interface ArenaConfig {
  stackInicial: number;
  maosPorNivel: number;
  perfilA: string;
  perfilB: string;
  seed: number;
  velocidade: Velocidade;
  memoria: boolean;
  autoProxima: boolean;
  treinador: CoachConfig;
}

export const DEFAULT_CONFIG: ArenaConfig = {
  stackInicial: 1000,
  maosPorNivel: 8,
  perfilA: 'pressionador',
  perfilB: 'valor',
  seed: 2026,
  velocidade: 'normal',
  memoria: true,
  autoProxima: true,
  treinador: { ativo: true, url: 'http://127.0.0.1:11434', modelo: 'llama3.1:8b', timeoutMs: 120000 },
};

export type Msg = Record<string, any> & { t: string };

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export class Arena {
  cfg: ArenaConfig;
  agents!: Record<Seat, HeuristicAgent>;
  running = true;
  private stepReq = false;

  partida = 0;
  maoNaPartida = 0;
  maoGlobal = 0;
  emPartida = false;
  botao: Seat = 'A';
  saldos: Record<Seat, number> = { A: 0, B: 0 };
  hand: Hand | null = null;
  private seq = { n: 0 };
  private processed = 0;

  stats = new MatchStats();
  rows: HandRow[] = [];
  chips: { mao: number; A: number; B: number; nivel: number }[] = [];
  adaptacoes: Narrada[] = [];
  private adaptId = 0;
  partidas: MatchSummary[] = [];
  private inicioPartida = '';
  maoGlobalInicio = 1;
  private politicaInicial: Record<Seat, Policy> = {} as any;
  private conhecimentoInicio: Record<Seat, number> = { A: 0, B: 0 };
  invariantes = { checagens: 0, violacoes: 0, rejeicoes: 0 };

  private coachPend: Partial<Record<Seat, Promise<CoachResult>>> = {};
  private coachDone: Partial<Record<Seat, CoachResult>> = {};
  coachInfo = { online: false, modelos: [] as string[], emAndamento: false, ultimos: [] as (CoachResult & { agente: Seat; partida: number })[] };

  private recent: Msg[] = [];
  private listeners = new Set<(m: Msg) => void>();
  private lastTable: Msg | null = null;

  constructor(private dir: string, cfg: Partial<ArenaConfig> = {}) {
    this.cfg = { ...DEFAULT_CONFIG, ...cfg, treinador: { ...DEFAULT_CONFIG.treinador, ...(cfg.treinador ?? {}) } };
    mkdirSync(join(dir, 'relatorios'), { recursive: true });
    mkdirSync(join(dir, 'dados'), { recursive: true });
    this.freshAgents();
    if (this.cfg.memoria) this.load();
  }

  /** Evidências: cada evento, decisão e adaptação da partida, uma linha JSON por registro. */
  private get evidFile() {
    return join(this.dir, 'relatorios', `partida-${String(this.partida).padStart(3, '0')}.jsonl`);
  }

  private evid(tipo: string, dados: Record<string, any>) {
    appendFileSync(this.evidFile, JSON.stringify({ t: new Date().toISOString(), partida: this.partida, maoGlobal: this.maoGlobal, tipo, ...dados }) + '\n');
  }

  private get memFile() {
    return join(this.dir, 'dados', 'memoria.json');
  }

  private freshAgents() {
    this.agents = {
      A: new HeuristicAgent('A', this.cfg.perfilA, hashSeed(this.cfg.seed, 'A')),
      B: new HeuristicAgent('B', this.cfg.perfilB, hashSeed(this.cfg.seed, 'B')),
    };
  }

  private load() {
    if (!existsSync(this.memFile)) return;
    try {
      const j = JSON.parse(readFileSync(this.memFile, 'utf8'));
      this.partida = j.partida ?? 0;
      this.maoGlobal = j.maoGlobal ?? 0;
      this.partidas = j.partidas ?? [];
      this.adaptacoes = j.adaptacoes ?? [];
      this.adaptId = this.adaptacoes.reduce((m, a) => Math.max(m, a.id), 0);
      this.agents = {
        A: HeuristicAgent.fromJSON(j.agentes.A, hashSeed(this.cfg.seed, 'A', this.partida)),
        B: HeuristicAgent.fromJSON(j.agentes.B, hashSeed(this.cfg.seed, 'B', this.partida)),
      };
      console.log(`[arena] memória carregada: ${this.partidas.length} partidas anteriores`);
    } catch (e) {
      console.warn('[arena] memória ilegível, começando do zero', e);
    }
  }

  private save() {
    if (!this.cfg.memoria) return;
    const j = {
      versao: 1,
      salvoEm: new Date().toISOString(),
      partida: this.partida,
      maoGlobal: this.maoGlobal,
      partidas: this.partidas,
      adaptacoes: this.adaptacoes.slice(-2000),
      agentes: { A: this.agents.A.toJSON(), B: this.agents.B.toJSON() },
    };
    writeFileSync(this.memFile, JSON.stringify(j));
  }

  // ───────────────────────── Transmissão ─────────────────────────

  subscribe(fn: (m: Msg) => void) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  private send(m: Msg, keep = true) {
    if (keep) {
      this.recent.push(m);
      if (this.recent.length > 160) this.recent.shift();
    }
    for (const fn of this.listeners) fn(m);
  }

  snapshot(): Msg {
    return {
      t: 'snapshot',
      config: this.cfg,
      perfis: PROFILES,
      running: this.running,
      partida: this.partida,
      mesa: this.lastTable,
      painel: this.painel(),
      adaptacoes: this.adaptacoes.slice(-150),
      recentes: this.recent,
    };
  }

  painel() {
    const [sb, bb] = blindsFor(this.nivel());
    return {
      partida: this.partida,
      mao: this.maoNaPartida,
      maoGlobal: this.maoGlobal,
      maoGlobalInicio: this.maoGlobalInicio,
      nivel: this.nivel(),
      blinds: [sb, bb],
      proximoNivel: blindsFor(this.nivel() + 1),
      maosParaSubir: this.cfg.maosPorNivel - ((Math.max(1, this.maoNaPartida) - 1) % this.cfg.maosPorNivel) - 1,
      saldos: this.saldos,
      stats: this.stats.view(),
      agentes: { A: this.agents.A.snapshot(), B: this.agents.B.snapshot() },
      chips: this.chips,
      partidas: this.partidas,
      invariantes: this.invariantes,
      treinador: { ...this.coachInfo, config: this.cfg.treinador },
      emPartida: this.emPartida,
      running: this.running,
    };
  }

  // ───────────────────────── Comandos ─────────────────────────

  command(c: any) {
    switch (c?.cmd) {
      case 'play': this.running = true; break;
      case 'pause': this.running = false; break;
      case 'step': this.running = false; this.stepReq = true; break;
      case 'velocidade':
        if (c.valor in BASE_MS) this.cfg.velocidade = c.valor;
        break;
      case 'config': {
        const v = c.valor ?? {};
        const n = (x: any, lo: number, hi: number, d: number) => (Number.isInteger(Number(x)) ? Math.min(hi, Math.max(lo, Number(x))) : d);
        this.cfg.stackInicial = n(v.stackInicial, 100, 100000, this.cfg.stackInicial);
        this.cfg.maosPorNivel = n(v.maosPorNivel, 1, 100, this.cfg.maosPorNivel);
        this.cfg.seed = n(v.seed, 0, 2 ** 31, this.cfg.seed);
        if (PROFILES.some((p) => p.id === v.perfilA)) this.cfg.perfilA = v.perfilA;
        if (PROFILES.some((p) => p.id === v.perfilB)) this.cfg.perfilB = v.perfilB;
        if (typeof v.autoProxima === 'boolean') this.cfg.autoProxima = v.autoProxima;
        if (typeof v.treinadorAtivo === 'boolean') this.cfg.treinador.ativo = v.treinadorAtivo;
        if (typeof v.modelo === 'string' && /^[\w.:-]{1,64}$/.test(v.modelo)) this.cfg.treinador.modelo = v.modelo;
        break;
      }
      case 'nova_partida':
        this.abortMatch();
        break;
      case 'relatorio_agora':
        this.partialReport();
        break;
      case 'apagar_memoria':
        this.abortMatch();
        rmSync(this.memFile, { force: true });
        this.partida = 0;
        this.maoGlobal = 0;
        this.partidas = [];
        this.adaptacoes = [];
        this.adaptId = 0;
        this.coachPend = {};
        this.coachDone = {};
        this.coachInfo.ultimos = [];
        this.freshAgents();
        this.send({ t: 'memoria_apagada' }, false);
        break;
    }
    this.send({ t: 'config', config: this.cfg, running: this.running }, false);
    this.send({ t: 'painel', painel: this.painel() }, false);
  }

  private abortMatch() {
    this.hand = null;
    this.emPartida = false;
    this.processed = 0;
    this.recent = [];
  }

  // ───────────────────────── Laço principal ─────────────────────────

  async run() {
    this.refreshCoachStatus();
    setInterval(() => this.refreshCoachStatus(), 15000);
    for (;;) {
      if (!this.running && !this.stepReq) {
        await sleep(80);
        continue;
      }
      let ms = 0;
      try {
        ms = await this.tick();
      } catch (e) {
        console.error('[arena] erro no tick', e);
        this.abortMatch();
        ms = 1000;
      }
      if (this.stepReq && ms > 0) this.stepReq = false;
      await sleep(ms);
    }
  }

  /** Executa N partidas sem pausas (simulação em lote, sem servidor). */
  async simular(n: number, onPartida?: (r: MatchSummary) => void) {
    const alvo = this.partidas.length + n;
    while (this.partidas.length < alvo) {
      const antes = this.partidas.length;
      await this.tick();
      if (this.partidas.length > antes) onPartida?.(this.partidas.at(-1)!);
    }
  }

  private nivel() {
    return Math.floor((Math.max(1, this.maoNaPartida) - 1) / this.cfg.maosPorNivel);
  }

  private base() {
    return BASE_MS[this.cfg.velocidade];
  }

  /** Executa uma unidade de trabalho e devolve a pausa (ms) antes da próxima. */
  private async tick(): Promise<number> {
    const b = this.base();
    if (!this.emPartida) return this.startMatch();
    if (!this.hand) return this.startHand();

    // 1. Entregar eventos pendentes (observação).
    if (this.processed < this.hand.events.length) {
      const e = this.hand.events[this.processed++];
      this.dispatch(e);
      const mult: Partial<Record<EngineEvent['tipo'], number>> = {
        acao: 1, nova_etapa: 1.4, showdown: 3.2, pote: 1.6, fim_mao: 1.2, runout: 1.6, devolucao: 1.2, inicio_mao: 0.6, blind: 0.3, cartas_privadas: 0.4,
      };
      return Math.round(b * (mult[e.tipo] ?? 0.5));
    }
    // 2. Decisão do agente da vez (somente com a visão autorizada).
    if (this.hand.emAndamento && this.hand.vez) {
      const s = this.hand.vez;
      const d = this.agents[s].decide(this.hand.view(s));
      this.stats.onDecision(s, d);
      this.send({ t: 'pensamento', agente: s, partida: this.partida, mao: this.hand.mao, etapa: this.hand.etapa, categoria: d.categoria, raciocinio: d.raciocinio, equidade: d.equidade, acao: d.msg });
      this.evid('decisao', { agente: s, mao: this.hand.mao, etapa: this.hand.etapa, categoria: d.categoria, raciocinio: d.raciocinio, equidade: d.equidade, potOdds: d.potOdds, mensagem: d.msg, politica: this.agents[s].policy() });
      const r = this.hand.submit(d.msg);
      if (!r.ok) {
        this.evid('rejeicao', { agente: s, erro: r.erro });
        this.invariantes.rejeicoes++;
        this.hand.submit(this.hand.defaultAction(s));
      }
      return Math.round(b * 0.6);
    }
    // 3. Mão encerrada.
    return this.endHand();
  }

  private dispatch(e: EngineEvent) {
    for (const s of SEATS) if (Hand.visibleTo(e, s)) this.agents[s].observe(e);
    this.stats.onEvent(e);
    if (e.tipo === 'invariante') this.invariantes.violacoes++;
    const h = this.hand!;
    const msg: Msg = {
      t: 'evento',
      ev: e,
      info: {
        partida: this.partida,
        mao: h.mao,
        botao: h.botao,
        sb: h.sb,
        bb: h.bb,
        nivel: this.nivel(),
        cartas: { A: h.spectatorCards().A, B: h.spectatorCards().B },
      },
    };
    this.lastTable = msg;
    this.send(msg);
    this.evid('evento', { evento: e });
  }

  private startMatch(): number {
    this.partida++;
    this.emPartida = true;
    this.inicioPartida = new Date().toISOString();
    this.maoGlobalInicio = this.maoGlobal + 1;
    this.maoNaPartida = 0;
    this.saldos = { A: this.cfg.stackInicial, B: this.cfg.stackInicial };
    this.botao = this.partida % 2 === 1 ? 'A' : 'B';
    this.stats = new MatchStats();
    this.rows = [];
    this.chips = [{ mao: 0, A: this.saldos.A, B: this.saldos.B, nivel: 0 }];
    this.recent = [];
    rmSync(this.evidFile, { force: true });
    if (!this.cfg.memoria) this.freshAgents();
    for (const s of SEATS) {
      if (this.agents[s].profileId !== (s === 'A' ? this.cfg.perfilA : this.cfg.perfilB)) {
        const p = PROFILES.find((x) => x.id === (s === 'A' ? this.cfg.perfilA : this.cfg.perfilB))!;
        this.agents[s].profileId = p.id;
        this.agents[s].base = { ...p.policy };
      }
    }
    this.applyCoach();
    this.politicaInicial = { A: this.agents.A.policy(), B: this.agents.B.policy() };
    this.conhecimentoInicio = { A: this.agents.A.model.conhecimento(), B: this.agents.B.model.conhecimento() };
    this.evid('partida_inicio', { config: this.cfg, politica: this.politicaInicial, conhecimento: this.conhecimentoInicio, regrasAtivas: { A: [...this.agents.A.ativas], B: [...this.agents.B.ativas] } });
    this.send({
      t: 'partida_inicio',
      partida: this.partida,
      conhecimento: this.conhecimentoInicio,
      ativas: { A: this.agents.A.snapshot().ativas, B: this.agents.B.snapshot().ativas },
    });
    this.send({ t: 'painel', painel: this.painel() }, false);
    return this.base() * 2;
  }

  private startHand(): number {
    this.maoNaPartida++;
    this.maoGlobal++;
    const nivel = Math.floor((this.maoNaPartida - 1) / this.cfg.maosPorNivel);
    const [sb, bb] = blindsFor(nivel);
    this.applyCoach();
    const ctx = { partida: this.partida, mao: this.maoNaPartida, maoGlobal: this.maoGlobal, bb, saldos: { ...this.saldos } };
    const novas: Adaptacao[] = [];
    for (const s of SEATS) novas.push(...this.agents[s].beginHand(ctx));
    this.hand = new Hand(
      { mao: this.maoNaPartida, botao: this.botao, sb, bb, saldos: { ...this.saldos }, rng: new Rng(hashSeed(this.cfg.seed, this.partida, this.maoNaPartida)) },
      this.seq,
    );
    this.processed = 0;
    this.publishAdaptations(novas);
    if (nivel > 0 && (this.maoNaPartida - 1) % this.cfg.maosPorNivel === 0) {
      this.send({ t: 'nivel', partida: this.partida, mao: this.maoNaPartida, nivel, sb, bb });
    }
    return 0;
  }

  private endHand(): number {
    const h = this.hand!;
    this.invariantes.checagens += h.checagensInvariante;
    const res = h.result;
    if (!res || res.motivo === 'interrompida') {
      this.send({ t: 'alerta', texto: `Mão ${h.mao} interrompida por inconsistência; partida anulada.` });
      this.abortMatch();
      return 2000;
    }
    this.saldos = { ...res.saldosFinais };
    this.rows.push(this.buildRow(h));
    this.chips.push({ mao: this.maoNaPartida, A: this.saldos.A, B: this.saldos.B, nivel: Math.floor((this.maoNaPartida - 1) / this.cfg.maosPorNivel) });
    const novas: Adaptacao[] = [];
    for (const s of SEATS) novas.push(...this.agents[s].endHand());
    this.publishAdaptations(novas);
    this.hand = null;
    this.botao = other(this.botao);
    this.send({ t: 'painel', painel: this.painel() }, false);
    if (this.saldos.A === 0 || this.saldos.B === 0) return this.endMatch();
    return Math.round(this.base() * 1.5);
  }

  private publishAdaptations(list: Adaptacao[]) {
    for (const a of list) {
      const n = narrar({ ...a, id: ++this.adaptId }, this.adaptacoes);
      this.adaptacoes.push(n);
      if (this.adaptacoes.length > 3000) this.adaptacoes.shift();
      if (this.emPartida) this.evid('adaptacao', { adaptacao: n });
      this.send({ t: 'adaptacao', a: n });
    }
  }

  private buildRow(h: Hand): HandRow {
    const parts: string[] = [];
    let etapa = '';
    const nome: Record<string, string> = { pre_flop: 'pré', flop: 'flop', turn: 'turn', river: 'river' };
    for (const e of h.events) {
      if (e.tipo !== 'acao') continue;
      if (e.etapa !== etapa) {
        etapa = e.etapa;
        parts.push(`**${nome[etapa]}:**`);
      }
      const c: string = e.dados.classificacao;
      const v = c.startsWith('bet') || c.startsWith('raise') ? ` ${e.dados.total_etapa}` : '';
      parts.push(`${e.agente} ${c.replace(' — não reabre aumento', '')}${v}`);
    }
    const sd = h.events.find((e) => e.tipo === 'showdown');
    return {
      partida: this.partida,
      mao: h.mao,
      maoGlobal: this.maoGlobal,
      nivel: Math.floor((h.mao - 1) / this.cfg.maosPorNivel),
      sb: h.sb,
      bb: h.bb,
      botao: h.botao,
      vencedor: String(h.result!.vencedor),
      motivo: h.result!.motivo,
      pote: h.result!.pote,
      saldos: { ...h.result!.saldosFinais },
      acoes: parts.join(' '),
      showdown: sd ? { A: sd.dados.maos.A.descricao, B: sd.dados.maos.B.descricao } : undefined,
    };
  }

  private endMatch(): number {
    const vencedor: Seat = this.saldos.A > 0 ? 'A' : 'B';
    const daPartida = this.adaptacoes.filter((a) => a.partida === this.partida);
    const nivelFinal = Math.floor((this.maoNaPartida - 1) / this.cfg.maosPorNivel);
    const [sb, bb] = blindsFor(nivelFinal);
    const file = `partida-${String(this.partida).padStart(3, '0')}.md`;
    const resumo: MatchSummary = {
      partida: this.partida,
      vencedor,
      maos: this.maoNaPartida,
      nivelFinal,
      blindsFinais: `${sb}/${bb}`,
      inicio: this.inicioPartida,
      fim: new Date().toISOString(),
      conhecimento: {
        A: [this.conhecimentoInicio.A, this.agents.A.model.conhecimento()],
        B: [this.conhecimentoInicio.B, this.agents.B.model.conhecimento()],
      },
      precisao: {
        A: this.agents.A.model.precisao(this.partida)?.acerto ?? null,
        B: this.agents.B.model.precisao(this.partida)?.acerto ?? null,
      },
      adaptacoes: daPartida.filter((a) => a.tipo !== 'contexto').length,
      cadeiaMax: daPartida.reduce((m, a) => Math.max(m, a.cadeia), 0),
      relatorio: file,
      maoGlobalInicio: this.maoGlobalInicio,
      maoGlobalFim: this.maoGlobal,
    };
    this.partidas.push(resumo);
    this.evid('partida_fim', { resumo });
    const painel = this.painel();
    resumo.evidencias = file.replace('.md', '.jsonl');
    const md = matchReport({
      resumo,
      config: this.cfg,
      stats: painel.stats,
      rows: this.rows,
      adaptacoes: daPartida,
      agentes: painel.agentes,
      politicaInicial: this.politicaInicial,
      partidas: this.partidas,
    });
    writeFileSync(join(this.dir, 'relatorios', file), md);
    writeFileSync(join(this.dir, 'relatorios', 'geral.md'), generalReport(this.partidas, this.adaptacoes));
    this.save();
    this.send({ t: 'partida_fim', resumo, relatorio: `/relatorios/${file}` });
    this.send({ t: 'painel', painel: this.painel() }, false);
    this.startCoach(resumo, painel.stats);
    this.emPartida = false;
    if (!this.cfg.autoProxima) this.running = false;
    return this.cfg.velocidade === 'turbo' ? 400 : 6000;
  }

  /** Relatório da partida em andamento (até a última mão concluída), sem encerrá-la. */
  private partialReport() {
    if (!this.emPartida) return;
    const file = `partida-${String(this.partida).padStart(3, '0')}-parcial.md`;
    const nivel = Math.floor((Math.max(1, this.maoNaPartida) - 1) / this.cfg.maosPorNivel);
    const [sb, bb] = blindsFor(nivel);
    const resumo: MatchSummary = {
      partida: this.partida,
      vencedor: `em andamento (A ${this.saldos.A} × ${this.saldos.B} B)`,
      maos: this.rows.length,
      nivelFinal: nivel,
      blindsFinais: `${sb}/${bb}`,
      inicio: this.inicioPartida,
      fim: new Date().toISOString(),
      conhecimento: {
        A: [this.conhecimentoInicio.A, this.agents.A.model.conhecimento()],
        B: [this.conhecimentoInicio.B, this.agents.B.model.conhecimento()],
      },
      precisao: {
        A: this.agents.A.model.precisao(this.partida)?.acerto ?? null,
        B: this.agents.B.model.precisao(this.partida)?.acerto ?? null,
      },
      adaptacoes: this.adaptacoes.filter((a) => a.partida === this.partida && a.tipo !== 'contexto').length,
      cadeiaMax: this.adaptacoes.filter((a) => a.partida === this.partida).reduce((m, a) => Math.max(m, a.cadeia), 0),
      relatorio: file,
      evidencias: `partida-${String(this.partida).padStart(3, '0')}.jsonl`,
    };
    const painel = this.painel();
    const md = matchReport({
      resumo,
      config: this.cfg,
      stats: painel.stats,
      rows: this.rows,
      adaptacoes: this.adaptacoes.filter((a) => a.partida === this.partida),
      agentes: painel.agentes,
      politicaInicial: this.politicaInicial,
      partidas: this.partidas,
    }).replace(/^# Relatório da partida (\d+)/, '# Relatório parcial da partida $1');
    writeFileSync(join(this.dir, 'relatorios', file), md);
    writeFileSync(join(this.dir, 'relatorios', 'geral.md'), generalReport(this.partidas, this.adaptacoes));
    this.save();
    this.send({ t: 'relatorio_parcial', partida: this.partida, relatorio: file }, false);
  }

  // ───────────────────────── Treinador Llama ─────────────────────────

  private async refreshCoachStatus() {
    const st = await coachStatus(this.cfg.treinador);
    const mudou = st.online !== this.coachInfo.online;
    this.coachInfo.online = st.online;
    this.coachInfo.modelos = st.modelos;
    if (mudou) this.send({ t: 'painel', painel: this.painel() }, false);
  }

  private startCoach(resumo: MatchSummary, stats: any) {
    if (!this.cfg.treinador.ativo || !this.coachInfo.online || !this.cfg.memoria) return;
    // Uma análise por vez: em turbo as partidas acabam mais rápido que o modelo responde.
    if (this.coachInfo.emAndamento || Object.keys(this.coachPend).length) return;
    this.coachInfo.emAndamento = true;
    const partida = resumo.partida;
    for (const s of SEATS) {
      const adaps = this.adaptacoes.filter((a) => a.partida === partida && a.agente === s).map((a) => a.texto);
      const p = treinar(this.cfg.treinador, this.agents[s], {
        partida,
        venceu: resumo.vencedor === s,
        maos: resumo.maos,
        stats: stats[s],
        adaptacoes: adaps,
      });
      this.coachPend[s] = p;
      p.then((r) => {
        this.coachDone[s] = r;
        this.coachInfo.ultimos.unshift({ ...r, agente: s, partida });
        this.coachInfo.ultimos = this.coachInfo.ultimos.slice(0, 10);
        if (!Object.keys(this.coachPend).some((k) => !this.coachDone[k as Seat])) this.coachInfo.emAndamento = false;
        this.send({ t: 'treinador', agente: s, partida, r });
      });
    }
  }

  /** Aplica (no início de uma mão) as sugestões do treinador que já chegaram. */
  private applyCoach() {
    for (const s of SEATS) {
      const r = this.coachDone[s];
      if (!r) continue;
      delete this.coachDone[s];
      delete this.coachPend[s];
      if (!r.ok || !Object.keys(r.ajustes).length) continue;
      const antes = this.agents[s].policy();
      this.agents[s].base = { ...r.depois };
      const depois = this.agents[s].policy();
      const mudancas = (Object.keys(antes) as (keyof Policy)[])
        .filter((k) => antes[k] !== depois[k])
        .map((k) => ({ param: k, de: antes[k], para: depois[k] }));
      this.publishAdaptations([{
        agente: s, partida: this.partida, mao: Math.max(1, this.maoNaPartida), maoGlobal: this.maoGlobal, tipo: 'treinador',
        observacao: r.justificativa, resposta: `ajustou a política base (${r.modelo}, ${(r.ms / 1000).toFixed(1)} s)`, mudancas,
      }]);
    }
  }
}
