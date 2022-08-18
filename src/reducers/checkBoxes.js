import chooseBoxes from '../assets/chooseBoxes';

const initialState = {
  SHOW_ALL: false,
  SHOW_NON: false,
  SHOW_1: false,
  SHOW_2: false,
  SHOW_3: false,
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
