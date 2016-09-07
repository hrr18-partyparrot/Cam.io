import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Logo from './components/Logo';
import Index from './components/Index';
import ReactStormpath, { Router, HomeRoute, LogoutRoute, AuthenticatedRoute } from 'react-stormpath';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <AuthenticatedRoute>
      <LogoutRoute path="/logout" />
      <Route path ="/create" component={Logo} />
    </AuthenticatedRoute>
  </Route>
);