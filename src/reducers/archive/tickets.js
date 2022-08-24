import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: false,
  stop: false,
  items: [],
};

const tickets = createReducer(initialState, (builder) => {
  builder
    .addCase('START_REQUEST', (state, action) => {
      state.loading = true;
    })
    .addCase('FETCH_TICKETS', (state, action) => {
      const data = state;
      data.loading = false;
      data.error = false;
      data.stop = action.stop;
      data.items = action.items;
    });
});

// Старый вариант без использования createReducer из тулкита, иммутабельный
// const tickets = (state = initialState, action) => {
//   switch (action.type) {
//     case 'START_REQUEST':
//       return {
//         ...state,
//         loading: true,
//       };
//     case 'FETCH_TICKETS':
//       return {
//         loading: false,
//         error: false,
//         stop: action.stop,
//         items: action.items,
//       };
//     default:
//       return state;
//   }
// };

export default tickets;
