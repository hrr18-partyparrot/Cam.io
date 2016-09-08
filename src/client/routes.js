import React from 'react';
import App from './components/App';
import CreateEvent from './components/CreateEvent';
import Index from './components/Index';
import { Route, IndexRoute } from 'react-router';
import { LogoutRoute, AuthenticatedRoute } from 'react-stormpath';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <AuthenticatedRoute>
      <LogoutRoute path="/logout" />
      <Route path ="/create" component={CreateEvent} />
    </AuthenticatedRoute>
  </Route>
);