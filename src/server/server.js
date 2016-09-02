var express = require('express');
var PORT = process.env.PORT || 8080;
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/PartyParrot');
require('./models/models.js')
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));

app.listen(PORT);
