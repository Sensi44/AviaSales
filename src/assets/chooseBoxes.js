// Логика переключения чекбоксов
const chooseBoxes = (state, action) => {
  console.log(action);
  let currentState = {
    ...state,
    [action.payload]: !state[action.payload],
  };
  if (action.payload === 'SHOW_ALL' && currentState.SHOW_ALL) {
    currentState = {
      SHOW_ALL: true,
      SHOW_NON: true,
      SHOW_1: true,
      SHOW_2: true,
      SHOW_3: true,
    };
  }
  if (action.payload === 'SHOW_ALL' && !currentState.SHOW_ALL) {
    currentState = {
      SHOW_ALL: false,
      SHOW_NON: false,
      SHOW_1: false,
      SHOW_2: false,
      SHOW_3: false,
    };
  }
  if (
    currentState.SHOW_ALL &&
    action.payload !== 'SHOW_ALL' &&
    !currentState[action.payload]
  ) {
    currentState = {
      ...currentState,
      SHOW_ALL: false,
    };
  }

  if (
    !currentState.SHOW_ALL &&
    action.payload !== 'SHOW_ALL' &&
    currentState.SHOW_NON &&
    currentState.SHOW_1 &&
    currentState.SHOW_2 &&
    currentState.SHOW_3
  ) {
    currentState = {
      ...currentState,
      SHOW_ALL: true,
    };
  }

  return currentState;
};

export default chooseBoxes;
