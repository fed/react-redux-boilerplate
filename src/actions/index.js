import assign from 'lodash/assign';

import * as alert from './alert';
import * as spinner from './spinner';

const actionCreators = assign(
  {},
  alert,
  spinner
);

export default actionCreators;
