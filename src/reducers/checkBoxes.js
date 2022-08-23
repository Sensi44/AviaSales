import chooseBoxes from '../assets/chooseBoxes';

const initialState = {
  SHOW_ALL: true,
  SHOW_NON: true,
  SHOW_1: true,
  SHOW_2: true,
  SHOW_3: true,
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
