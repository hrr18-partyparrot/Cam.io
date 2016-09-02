var express = require('express');
var PORT = process.env.PORT || 8080;
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var db =  process.env.MONGOLAB_IVORY_URI || 'mongodb://localhost/PartyParrot';
mongoose.connect(db);

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));


app.get('/', function(req, res) {
  res.send("Hellooooo World!")
});


app.listen(PORT);

<<<<<<< 636a7e8bb965bca4c20c74c04616e4dd8ab16ec5
app.listen(PORT);
=======

module.exports = app;
>>>>>>> Seperated files and cleaned up server.js
