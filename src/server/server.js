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
var db =  process.env.MONGODB_URI || 'mongodb://localhost/PartyParrot';
mongoose.connect(db);
//mongoose's promise library is depricated.
mongoose.Promise = global.Promise;
var app = express();
app.use(stormpath.init(app, {
  application:{
    href: 'https://api.stormpath.com/v1/applications/38BYzfpt1mubNI49Sj9nC4'
  },
  website: true
}));

// require('./middleware/middleware')(app, express);
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));
var Event = require('./models/event');

app.post('/create',stormpath.loginRequired, function(req,res){
  var event = new Event({
  name: req.body.event.name.text,
  desc: req.body.event.description.text,
  promoters: [req.user.fullName],
  owner: req.user.username,
  gPoint: req.body.gPoint,
  gReward: req.body.gReward,
  sPoint: req.body.sPoint,
  sReward: req.body.gReward,
  bPoint: req.body.bPoint,
  bReward: req.body.gReward
  })
  event.save(function (err, post) {
    if (err) {console.error(err)}
    res.status(201).json('Hey I posted ' + post);
  });
});

app.get('/events', function (req, res, next) {
  Event.find(function(err, events) {
    if (err) { console.error(err) }
    res.json(events);
  })
})

app.get('/userEvents', stormpath.loginRequired, function(req,res) {
  Event.find({'owner': req.user.username}, function(err, event) {
    if (err) console.error(err);
    res.json(event);
  })
})

app.get('/secrets', stormpath.loginRequired, function(req,res){
  res.send('Hi ' + req.user.givenName);
})

app.get('*', function (req, res) {
 res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.get('/authentication', function(req, res){
  var authUrl = client.getOAuthUrl();
  res.redirect(authUrl);
  client.authorize(req.query.code, function(err, response) {
    if (err) {
      console.log.error(err);
      return;
    }
    console.log(response.access_token);
  });
});

//test abc 123
app.on('stormpath.ready', function() {
  app.listen(PORT);
});

module.exports = app;
