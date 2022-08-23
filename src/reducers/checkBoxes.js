import { createReducer } from '@reduxjs/toolkit';

import chooseBoxes from '../assets/chooseBoxes';

const initialState = {
  SHOW_ALL: true,
  SHOW_NON: true,
  SHOW_1: true,
  SHOW_2: true,
  SHOW_3: true,
};

const checkBoxes = createReducer(initialState, (builder) => {
  builder.addCase('BOX_TOGGLE', (state, action) => {
    return chooseBoxes(state, action);
  });
});

// Старый вариант, иммутабельный
// const checkBoxes = (state = initialState, action) => {
//   switch (action.type) {
//     case 'BOX_TOGGLE':
//       return {
//         ...chooseBoxes(state, action),
//       };
//     default:
//       return state;
//   }
// };

export default checkBoxes;
