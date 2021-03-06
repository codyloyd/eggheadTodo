import React from 'react'
import ReactDOM from 'react-dom'
import {store} from './store'
import Root from './components/root'
import {fetchTodos, addTodo, toggleTodo} from './db'

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
)