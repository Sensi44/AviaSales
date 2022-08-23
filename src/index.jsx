import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducers/index';
import 'antd/dist/antd.min.css';
import App from './components/App';

const logger = () => (next) => (action) => {
  console.log('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬');
  console.group(action.type);
  const result = next(action);
  console.log(store.getState().checkBoxes);
  console.log(store.getState().tickets);
  return result;
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});

store.dispatch({ type: 'START_REQUEST' });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
