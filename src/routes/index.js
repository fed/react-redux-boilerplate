import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// Components
import App from 'containers/app';
import Dashboard from 'containers/dashboard';
import NoMatch from 'components/noMatch';

// Route Definition
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
);

export default routes;
