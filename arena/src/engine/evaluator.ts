import { Card, rankOf, suitOf } from './cards.js';

// Categorias seguindo a hierarquia de mãos (PokerStars Hand Rankings).
export const CATEGORY_NAMES = [
  'Carta alta',
  'Par',
  'Dois pares',
  'Trinca',
  'Sequência',
  'Flush',
  'Full house',
  'Quadra',
  'Straight flush',
];

const RANK_NAMES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valete', 'Dama', 'Rei', 'Ás'];
const RANK_PLURAL = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valetes', 'Damas', 'Reis', 'Ases'];

function encode(cat: number, ranks: number[]): number {
  let v = cat;
  for (let i = 0; i < 5; i++) v = v * 16 + (ranks[i] ?? 0);
  return v;
}

/** Retorna o rank mais alto de uma sequência na máscara de ranks, ou -1. */
function straightHigh(mask: number): number {
  const m = (mask << 1) | ((mask >> 12) & 1); // Ás também vale como 1
  for (let high = 13; high >= 4; high--) {
    if (((m >> (high - 4)) & 0b11111) === 0b11111) return high - 1;
  }
  return -1;
}

function topBits(mask: number, n: number, exclude: number[] = []): number[] {
  const out: number[] = [];
  for (let r = 12; r >= 0 && out.length < n; r--) {
    if (mask & (1 << r) && !exclude.includes(r)) out.push(r);
  }
  return out;
}

/** Avalia 5 a 7 cartas; maior valor = melhor mão. */
export function evaluate(cards: Card[]): number {
  const rc = new Array(13).fill(0);
  const sc = [0, 0, 0, 0];
  const sm = [0, 0, 0, 0];
  let mask = 0;
  for (const c of cards) {
    const r = rankOf(c);
    const s = suitOf(c);
    rc[r]++;
    sc[s]++;
    sm[s] |= 1 << r;
    mask |= 1 << r;
  }
  let flushSuit = -1;
  for (let s = 0; s < 4; s++) if (sc[s] >= 5) flushSuit = s;
  if (flushSuit >= 0) {
    const sf = straightHigh(sm[flushSuit]);
    if (sf >= 0) return encode(8, [sf]);
  }
  const quads: number[] = [];
  const trips: number[] = [];
  const pairs: number[] = [];
  for (let r = 12; r >= 0; r--) {
    if (rc[r] === 4) quads.push(r);
    else if (rc[r] === 3) trips.push(r);
    else if (rc[r] === 2) pairs.push(r);
  }
  if (quads.length) return encode(7, [quads[0], ...topBits(mask, 1, [quads[0]])]);
  if (trips.length && (trips.length > 1 || pairs.length)) {
    const pairRank = Math.max(trips[1] ?? -1, pairs[0] ?? -1);
    return encode(6, [trips[0], pairRank]);
  }
  if (flushSuit >= 0) return encode(5, topBits(sm[flushSuit], 5));
  const st = straightHigh(mask);
  if (st >= 0) return encode(4, [st]);
  if (trips.length) return encode(3, [trips[0], ...topBits(mask, 2, [trips[0]])]);
  if (pairs.length >= 2) return encode(2, [pairs[0], pairs[1], ...topBits(mask, 1, [pairs[0], pairs[1]])]);
  if (pairs.length === 1) return encode(1, [pairs[0], ...topBits(mask, 3, [pairs[0]])]);
  return encode(0, topBits(mask, 5));
}

export function categoryOf(score: number): number {
  return Math.floor(score / 16 ** 5);
}

export function describe(score: number): string {
  const cat = categoryOf(score);
  const r = (i: number) => Math.floor(score / 16 ** (4 - i)) % 16;
  switch (cat) {
    case 0: return `Carta alta (${RANK_NAMES[r(0)]})`;
    case 1: return `Par de ${RANK_PLURAL[r(0)]}`;
    case 2: return `Dois pares (${RANK_PLURAL[r(0)]} e ${RANK_PLURAL[r(1)]})`;
    case 3: return `Trinca de ${RANK_PLURAL[r(0)]}`;
    case 4: return `Sequência até ${RANK_NAMES[r(0)]}`;
    case 5: return `Flush (${RANK_NAMES[r(0)]} alto)`;
    case 6: return `Full house (${RANK_PLURAL[r(0)]} com ${RANK_PLURAL[r(1)]})`;
    case 7: return `Quadra de ${RANK_PLURAL[r(0)]}`;
    case 8: return r(0) === 12 ? 'Royal flush' : `Straight flush até ${RANK_NAMES[r(0)]}`;
    default: return '?';
  }
}

/** Melhor combinação de 5 cartas (para exibição na revelação). */
export function bestFive(cards: Card[]): { score: number; cards: Card[] } {
  let best = { score: -1, cards: [] as Card[] };
  const n = cards.length;
  for (let a = 0; a < n; a++)
    for (let b = a + 1; b < n; b++)
      for (let c = b + 1; c < n; c++)
        for (let d = c + 1; d < n; d++)
          for (let e = d + 1; e < n; e++) {
            const five = [cards[a], cards[b], cards[c], cards[d], cards[e]];
            const s = evaluate(five);
            if (s > best.score) best = { score: s, cards: five };
          }
  return best;
}
