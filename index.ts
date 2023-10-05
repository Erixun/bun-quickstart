import figlet from 'figlet';
import Express from 'express';

const app = Express();

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const body = figlet.textSync('Bun');
    return new Response(body);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);