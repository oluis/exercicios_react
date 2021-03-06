import React from 'react'
import ReactDOM from 'react-dom'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'

import BoasVindas from './boasVindas'
import usuarioReducer from './usuarioReducer'

const reducers = combineReducers({
  usuario: usuarioReducer
})

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <BoasVindas></BoasVindas>
  </Provider>
, document.getElementById('app'))
