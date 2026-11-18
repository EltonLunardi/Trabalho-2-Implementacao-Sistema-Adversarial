import { Card, RANKS, Rng, parseCard, rankOf, suitOf } from '../engine/cards.js';
import { categoryOf, evaluate } from '../engine/evaluator.js';

const preflopCache = new Map<string, number>();

function holeKey(a0: Card, b0: Card): string {
  const [a, b] = rankOf(a0) >= rankOf(b0) ? [a0, b0] : [b0, a0];
  const suited = suitOf(a) === suitOf(b);
  return RANKS[rankOf(a)] + RANKS[rankOf(b)] + (rankOf(a) === rankOf(b) ? '' : suited ? 's' : 'o');
}

/** Equidade pré-flop de uma mão contra uma mão aleatória (cache por classe de mão). */
export function preflopStrength(a: Card, b: Card): number {
  const key = holeKey(a, b);
  let v = preflopCache.get(key);
  if (v === undefined) {
    v = simulate([a, b], [], 2500, new Rng(a * 53 + b), null);
    preflopCache.set(key, v);
  }
  return v;
}

/**
 * Faixa provável do oponente, inferida das ações PÚBLICAS dele nesta mão.
 * nivel = quantidade de apostas/aumentos do oponente; blefe = parcela de mãos fracas que ainda apostariam.
 */
export interface Faixa {
  nivel: number;
  blefe: number;
}

/** Equidade estimada (Monte Carlo) contra uma mão aleatória ou contra a faixa inferida. */
export function equity(holeS: string[], boardS: string[], iters: number, rng: Rng, faixa: Faixa | null = null): number {
  const hole = holeS.map(parseCard);
  const board = boardS.map(parseCard);
  if (board.length === 0 && (!faixa || faixa.nivel === 0)) return preflopStrength(hole[0], hole[1]);
  return simulate(hole, board, iters, rng, faixa && faixa.nivel > 0 ? faixa : null);
}

function isStrong(opp: Card[], board: Card[], f: Faixa): boolean {
  let forte: boolean;
  if (board.length === 0) {
    const s = preflopStrength(opp[0], opp[1]);
    const lim = f.nivel === 1 ? 0.5 : f.nivel === 2 ? 0.58 : 0.64;
    forte = s >= lim;
  } else {
    const sc = evaluate(opp.concat(board));
    const cat = categoryOf(sc);
    if (f.nivel === 1) forte = cat >= 1;
    else if (f.nivel === 2) {
      const topBoard = Math.max(...board.map(rankOf));
      const parAlto = cat === 1 && Math.floor(sc / 16 ** 4) % 16 >= topBoard;
      forte = cat >= 2 || parAlto;
    } else forte = cat >= 2;
  }
  return forte;
}

function simulate(hole: Card[], board: Card[], iters: number, rng: Rng, faixa: Faixa | null): number {
  const used = new Set([...hole, ...board]);
  const deck: Card[] = [];
  for (let c = 0; c < 52; c++) if (!used.has(c)) deck.push(c);
  const need = 5 - board.length;
  let score = 0;
  let n = 0;
  const maxTries = iters * 15;
  // Mistura: com probabilidade `blefe` a mão do oponente é fraca; caso contrário, forte para a pressão feita.
  const blefe = faixa ? faixa.blefe * (faixa.nivel >= 3 ? 0.6 : faixa.nivel === 2 ? 0.8 : 1) : 0;
  let querForte = faixa ? rng.next() >= blefe : true;
  for (let t = 0; t < maxTries && n < iters; t++) {
    for (let k = 0; k < need + 2; k++) {
      const j = k + rng.int(deck.length - k);
      [deck[k], deck[j]] = [deck[j], deck[k]];
    }
    const opp = [deck[0], deck[1]];
    if (faixa) {
      if (isStrong(opp, board, faixa) !== querForte) continue;
      querForte = rng.next() >= blefe;
    }
    const full = board.concat(deck.slice(2, 2 + need));
    const me = evaluate(hole.concat(full));
    const op = evaluate(opp.concat(full));
    score += me > op ? 1 : me === op ? 0.5 : 0;
    n++;
  }
  return n ? score / n : 0.5;
}

/** Percentil de uma mão revelada no showdown contra todas as combinações possíveis (mesa completa). */
export function handPercentile(holeS: string[], boardS: string[]): number {
  const hole = holeS.map(parseCard);
  const board = boardS.map(parseCard);
  const used = new Set([...hole, ...board]);
  const deck: Card[] = [];
  for (let c = 0; c < 52; c++) if (!used.has(c)) deck.push(c);
  const me = evaluate(hole.concat(board));
  let beat = 0;
  let total = 0;
  for (let i = 0; i < deck.length; i++)
    for (let j = i + 1; j < deck.length; j++) {
      const op = evaluate([deck[i], deck[j], ...board]);
      beat += me > op ? 1 : me === op ? 0.5 : 0;
      total++;
    }
  return beat / total;
}
