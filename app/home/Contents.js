/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';

const routes = {
  FORM: '/form',
  INVOICES: '/invoices',
  CONTACTS: '/contacts',
  SETTINGS: '/settings'
};

export default () => (
  <Switch>
    <Route
      path={routes.INVOICES}
      component={() => <div>this is a invoices</div>}
    />
    <Route
      path={routes.CONTACTS}
      component={() => <div>this is a contacts</div>}
    />
    <Route
      path={routes.SETTINGS}
      component={() => <div>this is a settings</div>}
    />
    <Route path={routes.HOME} component={() => <div>this is a form</div>} />
  </Switch>
);
