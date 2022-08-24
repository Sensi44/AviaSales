import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import reducer, {
  startRequest,
  testFetch,
  fetchTickets,
  fetchSearchId,
} from './reducers/toolKitSlice';
import 'antd/dist/antd.min.css';
import App from './components/App';

const logger = () => (next) => (action) => {
  console.log('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬');
  console.log(action.type);
  const result = next(action);
  // console.log(store.getState());
  // console.log(store.getState().checkBoxes);
  console.log(store.getState().tickets);
  return result;
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([logger]);
  },
});

// store.dispatch({ type: 'FETCH_TICKETS', stop: true, items: [1, 2, 3] });
// store.dispatch(
//   testFetch({
//     stop: true,
//     items: [1, 2, 3],
//   })
// );

// store.dispatch(fetchTickets());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
