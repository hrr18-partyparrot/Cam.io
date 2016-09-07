var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var middleware = './middleware/middleware';
var stormpath = require('express-stormpath');
var Eventbrite = require('eventbrite-node');
var config = require('../config/eventbrite');
var client = new Eventbrite(config.clientKey, config.clientSecret);


var PORT = process.env.PORT || 8080;
var db =  process.env.MONGOLAB_IVORY_URI || 'mongodb://localhost/PartyParrot';

mongoose.connect(db);

var app = express();
require('./middleware/middleware')(app, express);
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));

app.get('/secrets',stormpath.loginRequired,function(req,res){
  res.send('Hi ' + req.user.givenName);
})

app.get('*', function (req, res) {
 res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.get('/authentication', function(req, res){
  var authUrl = client.getOAuthUrl();
    res.redirect(authUrl);
client.authorize(req.query.code, function(err, response) {
        if(err) {
            console.log.error(err);
            return;
        }
        console.log(response.access_token);
    });
});

app.on('stormpath.ready', function() {
  app.listen(PORT);
});



module.exports = app;
