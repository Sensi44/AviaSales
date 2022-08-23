import { combineReducers } from 'redux';

import checkBoxes from './checkBoxes';
import tickets from './tickets';

export default combineReducers({
  tickets,
  checkBoxes,
});
