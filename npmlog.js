const express = require('express');
const app = express();
const logger = require('npmlog');
const port = 3005;

//more docs here - https://github.com/npm/npmlog#basic-usage

app.get('/', (req, res) => {
  res.send('Hello World! - npmlog logged');
});

app.get('/api/test', (req, res) => {
  logger.warn('From Npmlog', 'Npmlog is simple too %j', {'message': 'test'});
  res.json({'message': 'Hello npmlog!'});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
