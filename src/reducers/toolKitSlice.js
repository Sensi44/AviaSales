import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import chooseBoxes from '../assets/chooseBoxes';
import { fetchId, getTickets } from '../actions/actions';

const initialState = {
  checkBoxes: {
    SHOW_ALL: true,
    SHOW_NON: true,
    SHOW_1: true,
    SHOW_2: true,
    SHOW_3: true,
  },
  filters: {
    fastest: false,
    cheapest: false,
  },
  tickets: {
    error: false,
    stop: false,
    items: [],
    searchId: null,
  },
};

export const fetchTickets = createAsyncThunk(
  'user/fetchTickets',
  async (yourData) => {
    const { searchId } = yourData;
    const response = await getTickets(searchId);
    return response;
  }
);

export const fetchSearchId = createAsyncThunk(
  'user/fetchSearchId',
  async () => {
    const response = await fetchId();
    return response;
  }
);

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
    chooseFilter(state, action) {
      if (action.payload === 'fast') {
        state.filters.fastest = true;
        state.filters.cheapest = false;
      }
      if (action.payload === 'cheap') {
        state.filters.fastest = false;
        state.filters.cheapest = true;
      }
    },
  },
  extraReducers: {
    [fetchTickets.fulfilled]: (state, action) => {
      state.tickets.stop = action.payload.stop;
      for (const ticket of action.payload.tickets) {
        state.tickets.items.push(ticket);
      }
    },
    [fetchTickets.rejected]: (state, action) => {
      console.log('ОШЫБКА');
    },
    [fetchSearchId.fulfilled]: (state, action) => {
      state.tickets.searchId = action.payload;
    },
  },
});

const { actions, reducer } = ticketsSlice;
export const { boxToggle, chooseFilter } = actions;

export default reducer;
