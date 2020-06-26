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
   res.send('</H1> Gracias por participar en el Webinar Devops on Cloud de GBM. Aplicación DEMO JSON en Kubernettes</H1>');
});

app.listen(PORT);
console.log(' Application Running on port' + PORT);
