import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Landing from './containers/Landing';
import NoMatch from './containers/NoMatch';

export default (
  <Route component={App}>
    <Route path='/' component={Landing} />
    <Route path="*" component={NoMatch} />
  </Route>
);
