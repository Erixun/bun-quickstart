import figlet from 'figlet';
import Express from 'express';

const app = Express();

//serve static files from client folder
app.use(Express.static('client/dist'));

//serve index.html on any route
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'client/dist' });
});


const server = app.listen(3000, () => {
  const body = figlet.textSync('Bun');
  console.log(body);
  console.log(`Listening on port ${3000}`);
});

// const server = Bun.serve({
//   port: 3000,
//   fetch(req) {
//     const body = figlet.textSync('Bun');
//     return new Response(body);
//   },
// });

// console.log(`Listening on http://localhost:${server.port} ...`);
