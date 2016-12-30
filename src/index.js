import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import routes from './routes';
import store from './store';

// Global Styles
import './styles/main.css';

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
