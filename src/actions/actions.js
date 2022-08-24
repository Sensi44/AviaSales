import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

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

export const fetchId = async () => {
  const url = 'https://front-test.dev.aviasales.ru/search';
  const result = await axios.get(url).then((resp) => resp.data);
  return result.searchId;
};

export const getTickets = async (id) => {
  // console.log(id);
  const url = `https://front-test.dev.aviasales.ru/tickets?searchId=${id}`;
  const result = await axios.get(url).then((resp) => resp.data);
  return result;
};
