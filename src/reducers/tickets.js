const initialState = {
  loading: false,
  error: false,
  stop: false,
  items: [],
};

const tickets = (state = initialState, action) => {
  switch (action.type) {
    case 'START_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_TICKETS':
      return {
        loading: false,
        error: false,
        stop: action.stop,
        items: action.items,
      };
    default:
      return state;
  }
};

export default tickets;
