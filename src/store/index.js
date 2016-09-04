import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {isDevelopmentEnvironment} from '../utils/helpers';

let store;

if (isDevelopmentEnvironment()) {
  store = applyMiddleware(thunk)(createStore)(
    rootReducer,
    window.devToolsExtension && window.devToolsExtension()
  );
} else {
  store = applyMiddleware(thunk)(createStore)(rootReducer);
}

export default store;
