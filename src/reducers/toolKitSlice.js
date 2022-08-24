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
  tickets: {
    loading: false,
    error: false,
    stop: true,
    items: [],
    searchId: null,
  },
};

export const fetchTickets = createAsyncThunk(
  'user/fetchTickets',
  async (yourData) => {
    const { searchId } = yourData;
    startRequest();
    const response = await getTickets(searchId);
    return response;
  }
);

export const fetchSearchId = createAsyncThunk(
  'user/fetchSearchId',
  async (id, thunkAPI) => {
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
    startRequest(state) {
      state.tickets.loading = true;
    },
    asyncSearchId(state, action) {
      console.log(action.payload);
    },
  },
  extraReducers: {
    [fetchTickets.fulfilled]: (state, action) => {
      state.tickets.loading = false;
      // console.log(action.payload.stop);
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
export const { boxToggle, startRequest, testFetch } = actions;

export default reducer;
