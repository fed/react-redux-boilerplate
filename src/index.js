import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {isDevelopmentEnvironment} from './utils/helpers';
import store from './store';

// Global Styles
import './styles/main.css';

// Container Components
import App from './containers/app';
import Dashboard from './containers/dashboard/dashboard';
import Styleguide from './docs/styleguide';
import NoMatch from './containers/noMatch/noMatch';

// Route Definition
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="dashboard" component={Dashboard} />
      {isDevelopmentEnvironment() && <Route path="docs" component={Styleguide} />}
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
);

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
