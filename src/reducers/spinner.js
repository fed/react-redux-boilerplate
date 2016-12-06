import {SHOW_SPINNER, HIDE_SPINNER} from 'types';

const initialState = false;

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_SPINNER:
      return true;

    case HIDE_SPINNER:
      return false;

    default:
      return state;
  }
};
