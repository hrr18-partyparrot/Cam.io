var morgan = require('morgan');
var bodyParser = require('body-parser');
var stormpath = require('express-stormpath');
var path = require('path');

module.exports = function (app, express) {
  app.set('views', __dirname + '/../views');
  //app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));
  app.use(stormpath.init(app, {
    application:{
      href: 'https://api.stormpath.com/v1/applications/38BYzfpt1mubNI49Sj9nC4'
    },
    web: {
      spa: {
        enabled: true,
        view: path.join(__dirname, '/../../public', 'index.html')
      }
    }
  }));
};