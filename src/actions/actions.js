import { createAction } from '@reduxjs/toolkit';

// Так было без createAction
// export const boxToggle = (filter) => ({
//   type: 'BOX_TOGGLE',
//   filter,
// });
export const boxToggle = createAction('BOX_TOGGLE');

export const startRequest = createAction('START_REQUEST');

export const recieveTickets = () => {
  return (dispatch) => {
    dispatch(startRequest());
  };
};

export const VisibilityCheckBoxes = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_NON: 'SHOW_NON',
  SHOW_1: 'SHOW_1',
  SHOW_2: 'SHOW_2',
  SHOW_3: 'SHOW_3',
};
