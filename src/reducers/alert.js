import assign from 'lodash/assign';
import {SHOW_ALERT, HIDE_ALERT} from '../types';

const initialState = {
  isVisible: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return assign({}, state, {
        isVisible: true,
        message: action.payload.message,
        type: action.payload.type
      });

    case HIDE_ALERT:
      return assign({}, state, {
        isVisible: false
      });

    default:
      return state;
  }
};
