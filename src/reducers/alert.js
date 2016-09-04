import assign from 'lodash/assign';
import {SHOW_ALERT, HIDE_ALERT} from '../actions/types';

const initialState = {
  isVisible: false
};

export default function alert(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return assign({}, state, {
        isVisible: true,
        message: action.message,
        alertType: action.alertType
      });

    case HIDE_ALERT:
      return assign({}, state, {
        isVisible: false
      });

    default:
      return state;
  }
};
