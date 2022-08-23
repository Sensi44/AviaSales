import { createSlice } from '@reduxjs/toolkit';

import chooseBoxes from './chooseBoxes';

const ticketsSlice = createSlice({
  name: 'test',
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
      console.log(action);
      const result = chooseBoxes(state.checkBoxes, action);
      state.checkBoxes = {
        ...result,
      };
    },
  },
});

const { actions, reducer } = ticketsSlice;
export const { boxToggle } = actions;

// console.log(ticketsSlice.getInitialState());
// console.log(ticketsSlice.actions);
// console.log(reducer);

export default reducer;
