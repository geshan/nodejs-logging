const express = require('express');
const app = express();
const logger = require('loglevel');
const port = 3004;

//more docs here - https://github.com/pimterry/loglevel#documentation

app.get('/', (req, res) => {
  res.send('Hello World! - loglevel logged');
});

app.get('/api/test', (req, res) => {
  logger.warn('Loglevel is simple');
  res.json({'message': 'Hello loglevel!'});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
