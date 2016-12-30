// @flow

// Alerts
export const SHOW_ALERT: string = 'ALERT/SHOW';
export const HIDE_ALERT: string = 'ALERT/HIDE';

// Loading Spinner
export const SHOW_SPINNER: string = 'SPINNER/SHOW';
export const HIDE_SPINNER: string = 'SPINNER/HIDE';

// Redux Action interfaces
// https://github.com/acdlite/flux-standard-action
export type IBaseAction = {
  type: string
};

export type ISpinnerAction = IBaseAction;

export type IAlertAction = {
  type: string,
  payload: {
    type: string,
    message: string
  }
};

