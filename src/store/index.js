import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import rootReducer from '../reducers';
import {isDevelopmentEnvironment} from '../utils/helpers';

// Router Middleware (to dispatch redirects within actions)
const router = routerMiddleware(browserHistory);

// Redux DevTools Extension only on dev environment
const devToolsExtension = window.devToolsExtension && window.devToolsExtension();
const preloadedState = isDevelopmentEnvironment() ? devToolsExtension : {};

// Instantiate Redux Store
const store = applyMiddleware(thunk, router)(createStore)(rootReducer, preloadedState);

export default store;
