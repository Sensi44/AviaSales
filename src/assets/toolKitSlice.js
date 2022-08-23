import { createSlice } from '@reduxjs/toolkit';

import chooseBoxes from './chooseBoxes';

const ticketsSlice = createSlice({
  name: 'toolkit-tickets',
  initialState: {
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
  },
  reducers: {
    boxToggle(state, action) {
      chooseBoxes(state, action);
    },
    startRequest(state) {
      state.loading = true;
    },
  },
});
console.log(ticketsSlice.getInitialState());

export default ticketsSlice.reducer;
export const { boxToggle, startRequest } = ticketsSlice.actions;
