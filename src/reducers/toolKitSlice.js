import { createSlice } from '@reduxjs/toolkit';

import chooseBoxes from '../assets/chooseBoxes';

const initialState = {
  checkBoxes: {
    SHOW_ALL: true,
    SHOW_NON: true,
    SHOW_1: true,
    SHOW_2: true,
    SHOW_3: true,
  },
  tickets: {
    loading: false,
    error: false,
    stop: false,
    items: [],
  },
};

const ticketsSlice = createSlice({
  name: 'toolkit',
  initialState,
  reducers: {
    boxToggle(state, action) {
      const result = chooseBoxes(state.checkBoxes, action);
      state.checkBoxes = {
        ...result,
      };
    },
    startRequest(state) {
      state.tickets.loading = true;
    },
    testFetch(state, action) {
      console.log(action.payload);
      state.tickets.loading = false;
      state.tickets.error = false;
      state.tickets.stop = action.payload.stop;
      state.tickets.items = action.payload.items;
    },
  },
});

const { actions, reducer } = ticketsSlice;
export const { boxToggle, startRequest, testFetch } = actions;

export default reducer;
