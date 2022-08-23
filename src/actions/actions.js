export const boxToggle = (filter) => ({
  type: 'BOX_TOGGLE',
  filter,
});

export const VisibilityCheckBoxes = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_NON: 'SHOW_NON',
  SHOW_1: 'SHOW_1',
  SHOW_2: 'SHOW_2',
  SHOW_3: 'SHOW_3',
};

export const startRequest = () => ({
  type: 'START_REQUEST',
});

export const recieveTickets = () => {
  return (dispatch) => {
    dispatch(startRequest());
  };
};
