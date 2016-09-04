import * as types from './types';

/**
 * @param {string} message - text to be displayed on the alert dialog
 * @param {string} alertType - determines alert appearance, can be either "success", "error" or "info"
 * @returns {type} - description
 */
export function showAlert(message, alertType) {
  return {
    type: types.SHOW_ALERT,
    message,
    alertType
  };
}

export function hideAlert() {
  return {
    type: types.HIDE_ALERT
  };
}
