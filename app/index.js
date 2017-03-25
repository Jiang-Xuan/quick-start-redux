import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/reducers'
import App from './containers/App'
import DevTools from './containers/DevTools'
import { logger } from 'redux-logger'

const enhancer = compose(
  applyMiddleware(thunk, logger),
  DevTools.instrument()
)

const store = createStore(reducers, enhancer)

render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)