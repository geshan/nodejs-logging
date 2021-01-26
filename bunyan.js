
const express = require('express');
const app = express();
const port = 3002;

//more options here - https://github.com/villadora/express-bunyan-logger#usage
app.use(require('express-bunyan-logger')({
  name: 'logger',
  format: ":remote-address - :user-agent[major] custom logger",
  streams: [{
      level: 'info',
      stream: process.stdout
  }]
}));

app.get('/', (req, res) => {
  res.send('Hello World! - Bunyan logged');
});


app.get('/api/test', (req, res) => {
  res.json({'message': 'Hello bunyan!'});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
