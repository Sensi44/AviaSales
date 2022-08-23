import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

import toolKitSlice from '../assets/toolKitSlice';

import checkBoxes from './checkBoxes';
import tickets from './tickets';

export default combineReducers({
  tickets,
  checkBoxes,
});
