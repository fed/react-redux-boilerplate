// @flow

import {Map} from 'immutable';
import {SHOW_SPINNER, HIDE_SPINNER, ISpinnerAction} from '../types';

const initialState = Map({
  isVisible: false
});

export default function (state: Map = initialState, action: ISpinnerAction): Map {
  switch (action.type) {
    case SHOW_SPINNER:
      return state.set('isVisible', true);

    case HIDE_SPINNER:
      return state.set('isVisible', false);

    default:
      return state;
  }
};
