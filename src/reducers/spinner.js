// @flow

import {Map} from 'immutable';
import {SHOW_SPINNER, HIDE_SPINNER} from '../types';
import type {ISpinnerAction} from '../types';

const initialState = Map({
  isVisible: false
});

export default function (state: any = initialState, action: ISpinnerAction): any {
  switch (action.type) {
    case SHOW_SPINNER:
      return state.set('isVisible', true);

    case HIDE_SPINNER:
      return state.set('isVisible', false);

    default:
      return state;
  }
};
