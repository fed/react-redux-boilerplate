import {SHOW_SPINNER, HIDE_SPINNER} from 'types';

/**
 * Displays a loading spinner in the middle of the screen
 * @return {object} Redux action
 */
export function showSpinner() {
  return {
    type: SHOW_SPINNER
  };
}

/**
 * Hides the loading spinner so that the user can interact with the page again
 * @return {object} Redux action
 */
export function hideSpinner() {
  return {
    type: HIDE_SPINNER
  };
}
