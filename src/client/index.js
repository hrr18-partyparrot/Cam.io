import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App';
import { browserHistory } from 'react-router'
import routes from './routes'
import ReactStormpath, { Router } from 'react-stormpath';
ReactStormpath.init();

ReactDOM.render(
  <Router history={browserHistory} routes={routes}>
  </Router>
  ,document.getElementById('app'));