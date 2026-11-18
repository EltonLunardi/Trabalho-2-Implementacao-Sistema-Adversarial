// Requisitos do Trabalho 2 sobre os agentes: informação parcial (C1), rodadas conectadas e adaptação não roteirizada.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { HeuristicAgent } from '../src/agents/agent.js';
import { Rng } from '../src/engine/cards.js';
import { Hand } from '../src/engine/hand.js';
import { Arena } from '../src/match/arena.js';
import type { Seat } from '../src/engine/types.js';

test('C1: nenhum agente recebe cartas do oponente antes da revelação permitida', () => {
  const ag: Record<Seat, HeuristicAgent> = { A: new HeuristicAgent('A', 'pressionador', 1), B: new HeuristicAgent('B', 'valor', 2) };
  for (let m = 1; m <= 60; m++) {
    const h = new Hand({ mao: m, botao: m % 2 ? 'A' : 'B', sb: 5, bb: 10, saldos: { A: 500, B: 500 }, rng: new Rng(m) });
    const secret = h.spectatorCards();
    let i = 0;
    let guard = 0;
    while (guard++ < 200) {
      for (; i < h.events.length; i++) {
        const e = h.events[i];
        for (const s of ['A', 'B'] as Seat[]) {
          if (!Hand.visibleTo(e, s)) continue;
          if (e.tipo !== 'showdown' && e.tipo !== 'runout') {
            const o = s === 'A' ? 'B' : 'A';
            const txt = JSON.stringify(e);
            for (const c of secret[o]) assert.ok(!txt.includes(`"${c}"`), `mão ${m}: ${s} viu ${c} em ${e.tipo}`);
          }
          ag[s].observe(e);
        }
      }
      if (!h.emAndamento || !h.vez) break;
      const v = h.view(h.vez);
      const o = h.vez === 'A' ? 'B' : 'A';
      for (const c of secret[o]) assert.ok(!JSON.stringify(v).includes(`"${c}"`), 'visão vazou carta');
      for (const c of secret.boardFuturo.slice(h.mesa.length)) assert.ok(!v.mesa.includes(c), 'visão vazou carta futura');
      assert.equal(h.submit(ag[h.vez].decide(v).msg).ok, true, 'agente enviou ação ilegal');
    }
    assert.ok(h.result, `mão ${m} não terminou`);
  }
});

test('adaptação: rodadas conectadas geram mudanças de política com causa observada', async () => {
  const arena = new Arena(mkdtempSync(join(tmpdir(), 'arena-test-')), { seed: 7, velocidade: 'turbo', treinador: { ativo: false } as any });
  await arena.simular(4);
  const regras = arena.adaptacoes.filter((a) => a.tipo === 'regra_ativada');
  assert.ok(regras.length >= 1, 'nenhuma adaptação ocorreu');
  for (const a of regras) {
    assert.ok(a.observacao.length > 0 && a.mudancas.length > 0, 'adaptação sem observação ou sem mudança');
  }
  assert.ok(arena.partidas.every((p) => p.maos >= 1));
  assert.equal(arena.invariantes.violacoes, 0);
  assert.equal(arena.invariantes.rejeicoes, 0, 'agentes enviaram ações rejeitadas');
  // memória: o conhecimento ao fim da última partida supera o da primeira
  assert.ok(arena.partidas.at(-1)!.conhecimento.A[1] > arena.partidas[0].conhecimento.A[0]);
});
