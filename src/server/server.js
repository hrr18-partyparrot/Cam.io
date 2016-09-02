var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var middleware = './middleware/middleware';
var stormpath = require('express-stormpath');



var PORT = process.env.PORT || 8080;
var db =  process.env.MONGOLAB_IVORY_URI || 'mongodb://localhost/PartyParrot';
mongoose.connect(db);

var app = express();


require('./middleware/middleware')(app, express);

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));


// app.get('/', function(req, res) {
//   res.send("Hellooooo World!")
// });

// app.get('*', function(request,response){
//   response.sendFile(path.resolve(__dirname, '../public', 'index.html'));
// });
app.get('/secrets',stormpath.loginRequired,function(req,res){
  res.send('Hi ' + req.user.givenName);
})

app.on('stormpath.ready', function() {
  app.listen(PORT);
});

module.exports = app;