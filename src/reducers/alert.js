// @flow

import {Map} from 'immutable';
import {SHOW_ALERT, HIDE_ALERT, IAlertAction} from '../types';

const initialState = Map({
  isVisible: false
});

export default function (state: Map = initialState, action: IAlertAction): Map {
  switch (action.type) {
    case SHOW_ALERT:
      return state
        .set('isVisible', true)
        .set('message', action.payload.message)
        .set('type', action.payload.type);

    case HIDE_ALERT:
      return state.set('isVisible', false);

    default:
      return state;
  }
};
