import React from 'react'
import ReactDOM from 'react-dom'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import App from './App.js'

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);