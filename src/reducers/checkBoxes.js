const initialState = {
  SHOW_ALL: false,
  SHOW_NON: false,
  SHOW_1: false,
  SHOW_2: false,
  SHOW_3: false,
};

const chooseBoxes = (state, action) => {
  if ()
  if (state.SHOW_ALL) {
    return {
      SHOW_ALL: true,
      SHOW_NON: true,
      SHOW_1: true,
      SHOW_2: true,
      SHOW_3: true,
    };
  }
  return state;
};

const checkBoxes = (state = initialState, action) => {
  switch (action.type) {
    case 'BOX_TOGGLE':
      return {
        ...chooseBoxes(state),
        [action.filter]: !state[action.filter],
      };
    default:
      return state;
  }
};

export default checkBoxes;
