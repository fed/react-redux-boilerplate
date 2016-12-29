// @flow

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import routes from './routes';
import store from './store';

// Global Styles
import './styles/main.css';

const name: string = 'blah';

function sum(a: number, b:number) {
  return a + b;
}

console.log(sum(1, 4));

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
