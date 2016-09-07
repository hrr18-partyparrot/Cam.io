import React from 'react';
import ReactDOM from 'react-dom';

//import App from './components/App';
import { Router, browserHistory } from 'react-router'
import routes from './routes'

ReactDOM.render(
  //<App />
  <Router history={browserHistory} routes={routes}>
  </Router>
  ,document.getElementById('app'));