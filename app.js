/**
* Demo para Webinar DevOps GBM 2020
*
**/

var express = require('express');

var PORT;
if (process.env.PORT) {
  PORT = process.env.PORT;
} else {
  PORT = 80;
}

var app = express();
app.get('/', function (req, res) {
  res.send('<p>some html</p>');
  res.send('Gracias por participar en el Webinar Devops on Cloud de GBM. Aplicación DEMO JSON en Kubernettes');
});

app.listen(PORT);
console.log(' Application Running on port' + PORT);
