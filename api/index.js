import { handle } from '../server/server.js';

export default async function handler(req, res) {
  try {
    const incoming = new URL(req.url || '/', 'http://localhost');
    const routedPath = incoming.searchParams.get('__msix_path');

    if (routedPath) {
      incoming.searchParams.delete('__msix_path');
      const query = incoming.searchParams.toString();
      req.url = '/api/' + routedPath + (query ? '?' + query : '');
    }

    await handle(req, res);
  } catch (error) {
    console.error('[Vercel API]', error);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.setHeader('Cache-Control', 'no-store');
      res.end(JSON.stringify({ ok: false, error: 'Internal server error.' }));
    }
  }
}
