var express = require('express');
var PORT = process.env.PORT || 8080;
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '../public'));


app.get('/', function(req, res) {
  res.send("Hellooooo World!")
});


app.listen(PORT);