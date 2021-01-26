const express = require('express');
const app = express();
const pino = require('express-pino-logger')();
const port = 3003;

//more options here - https://github.com/pinojs/express-pino-logger#example
app.use(pino)

app.get('/', (req, res) => {
  res.send('Hello World! - Pino logged');
});

app.get('/api/test', (req, res) => {
  req.log.info('Yo from pino');
  res.json({'message': 'Hello Pino!'});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
