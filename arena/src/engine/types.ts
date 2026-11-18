export type Seat = 'A' | 'B';
export const SEATS: Seat[] = ['A', 'B'];
export const other = (s: Seat): Seat => (s === 'A' ? 'B' : 'A');

export type Street = 'pre_flop' | 'flop' | 'turn' | 'river';
export const STREETS: Street[] = ['pre_flop', 'flop', 'turn', 'river'];

export type Phase =
  | 'PREPARACAO'
  | 'PRE_FLOP'
  | 'FLOP'
  | 'TURN'
  | 'RIVER'
  | 'RUNOUT'
  | 'REVELACAO'
  | 'ENCERRADA'
  | 'INTERROMPIDA';

export type ActionType = 'fold' | 'check' | 'call' | 'bet' | 'raise' | 'all_in';

/** Mensagem que o agente envia ao motor (seção 7.1 do relatório). */
export interface ActionMsg {
  agente: Seat;
  versao: number;
  tipo: ActionType;
  /** Total da contribuição na etapa — só em bet/raise. */
  total_etapa?: number;
}

export interface LegalActions {
  tipos: ActionType[];
  aPagar: number;
  /** Valor efetivo do call (limitado ao saldo). */
  valorCall: number;
  /** Mínimo total_etapa para bet/raise (sem all-in). */
  minTotal: number | null;
  /** Máximo total_etapa (= all-in). */
  maxTotal: number;
}

export interface Table {
  saldos: Record<Seat, number>;
  pote: number;
  contrib: Record<Seat, number>;
  mesa: string[];
  fase: Phase;
  etapa: Street;
  vez: Seat | null;
  versao: number;
}

export type EventType =
  | 'inicio_mao'
  | 'blind'
  | 'cartas_privadas'
  | 'acao'
  | 'rejeicao'
  | 'nova_etapa'
  | 'devolucao'
  | 'runout'
  | 'showdown'
  | 'pote'
  | 'fim_mao'
  | 'invariante';

export interface EngineEvent {
  seq: number;
  mao: number;
  tipo: EventType;
  etapa: Street;
  agente?: Seat;
  /** Se definido, o evento só pode ser entregue a este agente (cartas privadas). */
  privadoPara?: Seat;
  /** Só operadores veem (rejeições, invariantes). */
  somenteOperador?: boolean;
  dados: Record<string, any>;
  estado: Table;
}

/** Visão autorizada entregue a um agente (C1): nunca contém cartas do oponente nem futuras. */
export interface AgentView {
  agente: Seat;
  mao: number;
  versao: number;
  etapa: Street;
  minhasCartas: string[];
  mesa: string[];
  saldos: Record<Seat, number>;
  pote: number;
  contrib: Record<Seat, number>;
  botao: Seat;
  sb: number;
  bb: number;
  vez: Seat | null;
  legais: LegalActions;
  historicoMao: EngineEvent[];
}
