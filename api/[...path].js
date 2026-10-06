import { handle, init } from '../server/server.js';

let ready;

export default async function vercelHandler(req, res) {
  try {
    if (!ready) ready = init();
    await ready;
    await handle(req, res);
  } catch (error) {
    console.error('[Vercel API]', error);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.end(JSON.stringify({ ok: false, error: 'Internal server error.' }));
    }
  }
}
