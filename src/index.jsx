import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducers/index';
import 'antd/dist/antd.min.css';
import App from './components/App';

const store = configureStore({ reducer });
store.subscribe(() => {
  console.log(store.getState().checkBoxes);
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
