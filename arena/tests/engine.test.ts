// Critérios de sucesso da seção 7.3 do relatório, verificados contra os dados sintéticos.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { Hand } from '../src/engine/hand.js';
import { evaluate, describe } from '../src/engine/evaluator.js';
import { parseCard } from '../src/engine/cards.js';
import type { ActionType, Seat } from '../src/engine/types.js';

const cenario = JSON.parse(readFileSync(new URL('../dados/cenario.json', import.meta.url), 'utf8'));
const allIn = JSON.parse(readFileSync(new URL('../dados/cenario-all-in.json', import.meta.url), 'utf8'));
const cartas = { A: cenario.cartas_privadas.A, B: cenario.cartas_privadas.B, board: [...cenario.comunitarias.flop, cenario.comunitarias.turn, cenario.comunitarias.river] };

function play(h: Hand, agente: Seat, tipo: ActionType, total?: number) {
  const r = h.submit({ agente, versao: h.versao, tipo, total_etapa: total });
  assert.equal(r.ok, true, r.erro);
}
const total = (h: Hand) => h.saldos.A + h.saldos.B + h.pote;

test('critério 1/2/9: percurso principal termina 50/170, conserva 220 e distingue total de raise', () => {
  const h = new Hand({ mao: 1, botao: 'A', sb: 5, bb: 10, saldos: { A: 110, B: 110 }, cartas });
  assert.deepEqual({ A: h.saldos.A, B: h.saldos.B, pote: h.pote }, cenario.inicial);
  for (const ev of cenario.eventos) {
    play(h, ev.agente, ev.acao, ['bet', 'raise'].includes(ev.acao) ? ev.total_etapa : undefined);
    const last = h.events.filter((e) => e.tipo === 'acao').at(-1)!;
    assert.equal(last.dados.valor, ev.valor, `transferência de ${ev.acao}`);
    assert.equal(last.estado.saldos.A, ev.apos.A);
    assert.equal(last.estado.saldos.B, ev.apos.B);
    assert.equal(last.estado.pote, ev.apos.pote);
    assert.equal(total(h), 220);
  }
  assert.equal(h.result?.vencedor, 'B');
  assert.deepEqual(h.saldos, { A: 50, B: 170 });
  assert.equal(h.pote, 0);
});

test('critério 10: ramos all-in 120/100, 0/220 e devolução de 40 (180 fichas)', () => {
  const [fold, call, desigual] = allIn.ramos;
  let h = new Hand({ mao: 1, botao: 'A', sb: 5, bb: 10, saldos: { A: fold.antes_blinds.A, B: fold.antes_blinds.B }, cartas });
  play(h, 'A', 'all_in'); play(h, 'B', 'fold');
  assert.deepEqual(h.saldos, { A: fold.final.A, B: fold.final.B });
  assert.equal(h.events.some((e) => e.tipo === 'showdown'), false, 'fold não revela cartas');

  h = new Hand({ mao: 1, botao: 'A', sb: 5, bb: 10, saldos: { A: 110, B: 110 }, cartas });
  play(h, 'A', 'all_in'); play(h, 'B', 'call');
  assert.deepEqual(h.saldos, { A: 0, B: 220 });
  assert.ok(h.events.some((e) => e.tipo === 'runout'));

  h = new Hand({ mao: 1, botao: 'A', sb: 5, bb: 10, saldos: { A: desigual.antes_blinds.A, B: desigual.antes_blinds.B }, cartas });
  play(h, 'A', 'all_in'); play(h, 'B', 'call');
  const dev = h.events.find((e) => e.tipo === 'devolucao')!;
  assert.equal(dev.agente, 'A'); assert.equal(dev.dados.valor, 40);
  assert.deepEqual(dev.estado.saldos, { A: 40, B: 0 }); assert.equal(dev.estado.pote, 140);
  assert.deepEqual(h.saldos, { A: 40, B: 140 });
});

test('critério 3: visões não expõem cartas do oponente nem futuras', () => {
  const h = new Hand({ mao: 1, botao: 'A', sb: 5, bb: 10, saldos: { A: 110, B: 110 }, cartas });
  const v = JSON.stringify(h.view('A'));
  for (const c of [...cartas.B, ...cartas.board]) assert.ok(!v.includes(`"${c}"`), `vazou ${c}`);
});

test('critério 4/5: rejeita ações ilegais e versões antigas sem alterar fichas', () => {
  const h = new Hand({ mao: 1, botao: 'A', sb: 5, bb: 10, saldos: { A: 110, B: 110 }, cartas });
  const antes = JSON.stringify(h.table());
  const bad = [
    { agente: 'B' as Seat, versao: h.versao, tipo: 'call' as ActionType },
    { agente: 'A' as Seat, versao: h.versao + 1, tipo: 'call' as ActionType },
    { agente: 'A' as Seat, versao: h.versao, tipo: 'raise' as ActionType, total_etapa: 15 },
    { agente: 'A' as Seat, versao: h.versao, tipo: 'raise' as ActionType, total_etapa: 500 },
    { agente: 'A' as Seat, versao: h.versao, tipo: 'raise' as ActionType, total_etapa: 20.5 },
    { agente: 'A' as Seat, versao: h.versao, tipo: 'check' as ActionType },
  ];
  for (const m of bad) assert.equal(h.submit(m).ok, false, JSON.stringify(m));
  assert.equal(JSON.stringify(h.table()), antes);
  const v = h.versao; play(h, 'A', 'call');
  assert.equal(h.submit({ agente: 'A', versao: v, tipo: 'call' }).ok, false, 'repetição rejeitada');
});

test('critério 11: opção do big blind após call simples no pré-flop', () => {
  const h = new Hand({ mao: 1, botao: 'A', sb: 5, bb: 10, saldos: { A: 110, B: 110 }, cartas });
  play(h, 'A', 'call');
  assert.equal(h.vez, 'B'); assert.equal(h.etapa, 'pre_flop');
  assert.ok(h.legal('B').tipos.includes('raise'));
  play(h, 'B', 'check');
  assert.equal(h.etapa, 'flop'); assert.equal(h.vez, 'B');
});

test('critério 12: all-in abaixo do mínimo não reabre aumento; empate divide com ficha ímpar para quem não é botão', () => {
  const h = new Hand({ mao: 1, botao: 'A', sb: 5, bb: 10, saldos: { A: 200, B: 35 }, cartas });
  play(h, 'A', 'raise', 30); // B tem 25 após o blind; all-in total 35 < mínimo 50
  play(h, 'B', 'all_in');
  const ev = h.events.filter((e) => e.tipo === 'acao').at(-1)!;
  assert.match(ev.dados.classificacao, /incompleto/);
  assert.equal(h.vez, 'A');
  assert.deepEqual(h.legal('A').tipos, ['fold', 'call']);

  const t = new Hand({ mao: 1, botao: 'A', sb: 5, bb: 10, saldos: { A: 101, B: 100 },
    cartas: { A: ['2c', '3d'], B: ['2h', '3s'], board: ['Ah', 'Kd', 'Qs', 'Jc', '9h'] } });
  play(t, 'A', 'raise', 21); play(t, 'B', 'call'); // pote 42
  for (let i = 0; i < 3; i++) { play(t, 'B', 'check'); play(t, 'A', 'check'); }
  assert.equal(t.result?.vencedor, 'empate');
  assert.deepEqual(t.saldos, { A: 101, B: 100 });
});

test('avaliador de mãos', () => {
  const ev = (s: string) => evaluate(s.split(' ').map(parseCard));
  assert.equal(describe(ev('Ah Ad As Kc 9h 7c 2d')), 'Trinca de Ases');
  assert.ok(ev('Ah 2d 3s 4c 5h') > ev('Kh Kd Ks 2c 3h'));
  assert.ok(ev('2h 4h 6h 8h Th') > ev('Ah 2d 3s 4c 5h'));
  assert.equal(describe(ev('Ah Kh Qh Jh Th 2c 3d')), 'Royal flush');
  assert.ok(ev('Kh Kd Ks 2c 2h') > ev('Ah Kh Qh Jh 9h'));
});
