import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'

import reducer from './reducers'

// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import initialState from './initialState'

import App from './routes/App'

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancers())

const ROOT = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  ROOT
)
