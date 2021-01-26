const winston = require('winston');
const expressWinston = require('express-winston');
const express = require('express');
const app = express();
const port = 3001;

//more options here - https://github.com/bithavoc/express-winston#request-logging
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  meta: false,
  msg: "HTTP {{req.method}} {{req.url}}",
  expressFormat: true,
  colorize: false,
  ignoreRoute: function (req, res) { return false; }
}));

app.get('/', (req, res) => {
  res.send('Hello World! - Winston logged');
});


app.get('/api/test', (req, res) => {
  res.json({'message': 'Hello winston!'});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
