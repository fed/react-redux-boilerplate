import * as types from './types';

export function showSpinner() {
  return {
    type: types.SHOW_SPINNER
  };
}

export function hideSpinner() {
  return {
    type: types.HIDE_SPINNER
  };
}
