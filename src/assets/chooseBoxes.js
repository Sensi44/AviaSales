// Логика переключения чекбоксов
const chooseBoxes = (state, action) => {
  let temp = {
    ...state,
    [action.filter]: !state[action.filter],
  };
  if (action.filter === 'SHOW_ALL' && temp.SHOW_ALL) {
    temp = {
      SHOW_ALL: true,
      SHOW_NON: true,
      SHOW_1: true,
      SHOW_2: true,
      SHOW_3: true,
    };
  }
  if (action.filter === 'SHOW_ALL' && !temp.SHOW_ALL) {
    temp = {
      SHOW_ALL: false,
      SHOW_NON: false,
      SHOW_1: false,
      SHOW_2: false,
      SHOW_3: false,
    };
  }
  if (temp.SHOW_ALL && action.filter !== 'SHOW_ALL' && !temp[action.filter]) {
    temp = {
      ...temp,
      SHOW_ALL: false,
    };
  }

  if (
    !temp.SHOW_ALL &&
    action.filter !== 'SHOW_ALL' &&
    temp.SHOW_NON &&
    temp.SHOW_1 &&
    temp.SHOW_2 &&
    temp.SHOW_3
  ) {
    temp = {
      ...temp,
      SHOW_ALL: true,
    };
  }

  return temp;
};

export default chooseBoxes;
