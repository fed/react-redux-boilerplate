import {combineReducers} from 'redux';

import alert from './alert';
import spinner from './spinner';

const rootReducer = combineReducers({
  alert,
  loading: spinner
});

export default rootReducer;
