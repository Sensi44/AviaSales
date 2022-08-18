const initialState = {
  SHOW_ALL: false,
  SHOW_NON: false,
  SHOW_1: false,
  SHOW_2: false,
  SHOW_3: false,
};

const chooseBoxes = (state, action) => {
  let temp = {
    ...state,
    [action.filter]: !state[action.filter],
  };
  if (temp.SHOW_ALL) {
    temp = {
      SHOW_ALL: true,
      SHOW_NON: true,
      SHOW_1: true,
      SHOW_2: true,
      SHOW_3: true,
    };
  }
  return temp;
};

const checkBoxes = (state = initialState, action) => {
  switch (action.type) {
    case 'BOX_TOGGLE':
      return {
        ...chooseBoxes(state, action),
      };
    default:
      return state;
  }
};

export default checkBoxes;
