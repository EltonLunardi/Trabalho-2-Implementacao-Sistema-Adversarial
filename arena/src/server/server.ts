import express from 'express';
import { createServer } from 'node:http';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { WebSocketServer } from 'ws';
import { Arena } from '../match/arena.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const PORT = Number(process.env.PORT ?? 3000);
const HOST = process.env.HOST ?? '127.0.0.1';

const arena = new Arena(root, {
  velocidade: (process.env.VELOCIDADE as any) ?? 'normal',
  memoria: process.env.MEMORIA !== '0',
  treinador: {
    ativo: process.env.TREINADOR !== '0',
    url: process.env.OLLAMA_URL ?? 'http://127.0.0.1:11434',
    modelo: process.env.OLLAMA_MODELO ?? 'llama3.1:8b',
    timeoutMs: 120000,
  },
});

// PAUSADO=1 sobe a arena parada (útil para só consultar relatórios e análise).
if (process.env.PAUSADO === '1') arena.running = false;

const app = express();
app.use(express.static(join(root, 'public')));
app.use('/relatorios', express.static(join(root, 'relatorios'), {
  setHeaders: (res, path) => res.setHeader('Content-Type', path.endsWith('.jsonl') ? 'application/x-ndjson; charset=utf-8' : 'text/markdown; charset=utf-8'),
}));
app.use('/vendor/marked', express.static(join(root, 'node_modules', 'marked', 'lib')));
app.use('/vendor', express.static(join(root, 'node_modules', 'chart.js', 'dist')));
app.get('/api/estado', (_req, res) => res.json(arena.snapshot()));

const server = createServer(app);
const wss = new WebSocketServer({ server, path: '/ws' });
wss.on('connection', (ws) => {
  ws.send(JSON.stringify(arena.snapshot()));
  const off = arena.subscribe((m) => {
    if (ws.readyState === ws.OPEN) ws.send(JSON.stringify(m));
  });
  ws.on('message', (data) => {
    try {
      arena.command(JSON.parse(String(data)));
    } catch {
      /* comando malformado é ignorado */
    }
  });
  ws.on('close', off);
});

server.listen(PORT, HOST, () => {
  console.log(`\n  Poker Adversarial — arena ao vivo em http://${HOST}:${PORT}\n`);
  arena.run();
});
