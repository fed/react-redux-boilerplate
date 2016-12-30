// @flow

import {SHOW_SPINNER, HIDE_SPINNER} from '../types';
import type {ISpinnerAction} from '../types';

/**
 * Displays a loading spinner in the middle of the screen
 * @return {object} Redux action
 */
export function showSpinner(): ISpinnerAction {
  return {
    type: SHOW_SPINNER
  };
}

/**
 * Hides the loading spinner so that the user can interact with the page again
 * @return {object} Redux action
 */
export function hideSpinner(): ISpinnerAction {
  return {
    type: HIDE_SPINNER
  };
}
