import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers';

import initialState from './initialState';

import App from './routes/App';

const store = createStore(reducer, initialState);

const ROOT = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  ROOT
);
