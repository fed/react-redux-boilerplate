import {SHOW_ALERT, HIDE_ALERT} from 'types';

/**
 * Displays a sticky alert on the top of the page
 * @param  {string} message Alert message
 * @param  {string} type    Alert type, can be either "success", "error" or "info"
 * @return {object}         Redux action
 */
export function showAlert(message, type) {
  return {
    type: SHOW_ALERT,
    payload: {
      message,
      type
    }
  };
}

/**
 * Hides the alert
 * @return {object} Redux action
 */
export function hideAlert() {
  return {
    type: HIDE_ALERT
  };
}
