import assign from 'lodash/assign';
import {SHOW_SPINNER, HIDE_SPINNER} from '../actions/types';

const initialState = {
  loading: false
};

export default function alert(state = initialState, action) {
  switch (action.type) {
    case SHOW_SPINNER:
      return assign({}, state, {
        loading: true
      });

    case HIDE_SPINNER:
      return assign({}, state, {
        loading: false
      });

    default:
      return state;
  }
};
