/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './App';
import HomePage from './home/HomeContainer';

const routes = {
  "HOME": "/",
  "COUNTER": "/counter"
}

export default () => (
  <App>
    <Switch>
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
