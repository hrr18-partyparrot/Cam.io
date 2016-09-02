var express = require('express');
var PORT = process.env.PORT || 8080;
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var db =  process.env.MONGOLAB_IVORY_URI || 'mongodb://localhost:27017/PartyParrot';
mongoose.connect(db);
require('./models/models.js')
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '../public'));


app.get('/', function(req, res) {
  res.send("Hellooooo World!")
});


app.listen(PORT);