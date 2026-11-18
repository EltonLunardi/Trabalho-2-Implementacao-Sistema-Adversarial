import { MetricId } from './model.js';

export interface Policy {
  /** Probabilidade de aumentar/apostar por valor em vez de só pagar. */
  agressividade: number;
  /** Frequência de blefe com mão fraca. */
  freqBlefe: number;
  /** Frequência de apostar quando o oponente dá check (roubo de pote). */
  freqRoubo: number;
  /** Frequência de dar check/call com mão forte para induzir aposta (armadilha). */
  freqArmadilha: number;
  /** Margem sobre as pot odds para pagar (negativa = paga mais leve). */
  margemCall: number;
  /** Equidade mínima para apostar por valor. */
  limiarValor: number;
  /** Tamanho base da aposta em fração do pote. */
  tamanhoAposta: number;
}

export type PolicyKey = keyof Policy;

export const POLICY_LABELS: Record<PolicyKey, string> = {
  agressividade: 'Agressividade',
  freqBlefe: 'Frequência de blefe',
  freqRoubo: 'Roubo após check',
  freqArmadilha: 'Armadilha (induzir)',
  margemCall: 'Margem para pagar',
  limiarValor: 'Limiar de valor',
  tamanhoAposta: 'Tamanho da aposta',
};

const LIMITS: Record<PolicyKey, [number, number]> = {
  agressividade: [0, 1],
  freqBlefe: [0, 0.8],
  freqRoubo: [0, 0.9],
  freqArmadilha: [0, 0.8],
  margemCall: [-0.2, 0.25],
  limiarValor: [0.45, 0.8],
  tamanhoAposta: [0.3, 1.2],
};

export function clampPolicy(p: Policy): Policy {
  const out = { ...p };
  for (const k of Object.keys(LIMITS) as PolicyKey[]) {
    const [lo, hi] = LIMITS[k];
    out[k] = Math.round(Math.min(hi, Math.max(lo, out[k])) * 1000) / 1000;
  }
  return out;
}

export interface Profile {
  id: string;
  nome: string;
  descricao: string;
  policy: Policy;
}

// Perfis iniciais. A e B partem dos perfis descritos no relatório (seção 4.1).
export const PROFILES: Profile[] = [
  {
    id: 'pressionador',
    nome: 'Pressionador',
    descricao: 'Testa pressão com mãos fracas, blefa e rouba potes (política inicial de A no relatório).',
    policy: { agressividade: 0.7, freqBlefe: 0.3, freqRoubo: 0.5, freqArmadilha: 0.05, margemCall: 0.0, limiarValor: 0.56, tamanhoAposta: 0.6 },
  },
  {
    id: 'valor',
    nome: 'Valor e indução',
    descricao: 'Valoriza mãos fortes; ao ver iniciativa do oponente, paga ou dá check para induzir (política inicial de B).',
    policy: { agressividade: 0.55, freqBlefe: 0.08, freqRoubo: 0.25, freqArmadilha: 0.3, margemCall: 0.02, limiarValor: 0.6, tamanhoAposta: 0.7 },
  },
  {
    id: 'conservador',
    nome: 'Conservador',
    descricao: 'Entra em poucos potes, quase não blefa e só aposta com mão forte.',
    policy: { agressividade: 0.4, freqBlefe: 0.04, freqRoubo: 0.15, freqArmadilha: 0.1, margemCall: 0.08, limiarValor: 0.66, tamanhoAposta: 0.55 },
  },
  {
    id: 'equilibrado',
    nome: 'Equilibrado',
    descricao: 'Mistura valor e blefe em proporções moderadas.',
    policy: { agressividade: 0.55, freqBlefe: 0.15, freqRoubo: 0.35, freqArmadilha: 0.15, margemCall: 0.03, limiarValor: 0.6, tamanhoAposta: 0.65 },
  },
];

export interface Rule {
  id: string;
  metrica: MetricId;
  minN: number;
  ativa: (p: number) => boolean;
  desativa: (p: number) => boolean;
  delta: Partial<Policy>;
  /** Resposta do agente, em linguagem natural. */
  resposta: string;
  /** Rótulo curto da regra. */
  rotulo: string;
}

// Regras de adaptação: observação pública → mudança de política (com histerese).
export const RULES: Rule[] = [
  {
    id: 'explorar_desistencia', metrica: 'foldToBet', minN: 6,
    ativa: (p) => p >= 0.55, desativa: (p) => p <= 0.45,
    delta: { freqBlefe: +0.18, freqRoubo: +0.25 },
    rotulo: 'Explorar desistências', resposta: 'passou a blefar e a roubar potes com mais frequência',
  },
  {
    id: 'valor_contra_pagador', metrica: 'foldToBet', minN: 6,
    ativa: (p) => p <= 0.32, desativa: (p) => p >= 0.4,
    delta: { freqBlefe: -0.15, freqRoubo: -0.2, limiarValor: -0.06 },
    rotulo: 'Valor contra pagador', resposta: 'cortou blefes e passou a apostar por valor com mãos médias',
  },
  {
    id: 'pagar_blefador', metrica: 'blefeShowdown', minN: 3,
    ativa: (p) => p >= 0.4, desativa: (p) => p <= 0.28,
    delta: { margemCall: -0.08 },
    rotulo: 'Pagar o blefador', resposta: 'passou a pagar apostas com mãos mais fracas',
  },
  {
    id: 'respeitar_passivo', metrica: 'agressao', minN: 8,
    ativa: (p) => p <= 0.3, desativa: (p) => p >= 0.38,
    delta: { margemCall: +0.07, freqRoubo: +0.1 },
    rotulo: 'Respeitar o passivo', resposta: 'passou a desistir quando ele aposta e a roubar potes quando ele não aposta',
  },
  {
    id: 'induzir_agressor', metrica: 'agressao', minN: 8,
    ativa: (p) => p >= 0.55, desativa: (p) => p <= 0.45,
    delta: { freqArmadilha: +0.25, agressividade: -0.1 },
    rotulo: 'Induzir o agressor', resposta: 'passou a dar check e pagar com mãos fortes para induzir apostas',
  },
  {
    id: 'evitar_check_raise', metrica: 'checkRaise', minN: 4,
    ativa: (p) => p >= 0.3, desativa: (p) => p <= 0.18,
    delta: { freqRoubo: -0.2, freqBlefe: -0.05 },
    rotulo: 'Evitar check-raise', resposta: 'deixou de apostar automaticamente depois do check dele',
  },
  {
    id: 'armadilha_contra_roubo', metrica: 'rouboAposCheck', minN: 5,
    ativa: (p) => p >= 0.6, desativa: (p) => p <= 0.45,
    delta: { freqArmadilha: +0.2, margemCall: -0.04 },
    rotulo: 'Armadilha contra roubo', resposta: 'passou a dar check com mãos fortes esperando a aposta dele',
  },
  {
    id: 'corrigir_blefe', metrica: 'meuBlefeSucesso', minN: 5,
    ativa: (p) => p <= 0.35, desativa: (p) => p >= 0.5,
    delta: { freqBlefe: -0.12, freqRoubo: -0.1 },
    rotulo: 'Corrigir blefes', resposta: 'reduziu os próprios blefes',
  },
];

/**
 * Parâmetros do oponente que influenciam cada métrica observada, com o sinal do efeito
 * (+1: aumentar o parâmetro faz a métrica subir). Usado no encadeamento causal do relatório.
 */
export const METRIC_DRIVERS: Record<MetricId, Partial<Record<PolicyKey | 'modoCurto', 1 | -1>>> = {
  foldToBet: { margemCall: 1, modoCurto: 1 },
  agressao: { agressividade: 1, freqBlefe: 1, freqRoubo: 1, freqArmadilha: -1, modoCurto: 1 },
  vpip: { margemCall: -1, modoCurto: -1 },
  pfr: { agressividade: 1, modoCurto: 1 },
  checkRaise: { freqArmadilha: 1 },
  rouboAposCheck: { freqRoubo: 1, modoCurto: 1 },
  blefeShowdown: { freqBlefe: 1, freqRoubo: 1 },
  meuBlefeSucesso: { margemCall: 1 },
};
