import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import TodoApp from './components/todo-app'
import {store} from './reducers/store'

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
)