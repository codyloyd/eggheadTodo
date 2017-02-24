import {applyMiddleware, createStore} from 'redux'
import createLogger from 'redux-logger'
import todoApp from './reducers/todo-app'
import cuid from 'cuid'
import throttle from 'lodash/throttle'
import * as db from './db'

const logger = createLogger()

const addPromiseSupportToDispatch = (store) => {
  const rawDispatch = store.dispatch
  return (action) => {
    if (typeof action.then == 'funciton') {
      return action.then(rawDispatch)
    }
    return rawDispatch
  }
}

const store = createStore(todoApp, applyMiddleware(logger)) 
store.dispatch = addPromiseSupportToDispatch(store)
export {store}

const receive_todos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
})

export const fetchTodos = (filter) =>
  db.fetchTodos(filter).then(response => 
    receive_todos(filter, response)
  )

export const add_todo_to_list = (text, id) => 
  ({type: 'ADD_TODO', text, id: cuid()})

export const toggle_todo = (id) => 
  ({type: 'TOGGLE_TODO', id})

const getAllTodos = (state) => 
  state.allIds.map(id => state.byId[id])

export const getVisibleTodos = (state, visibilityFilter) => {
  const todos = getAllTodos(state)
  switch (visibilityFilter) {
    case 'all':
      return todos
    case 'completed':
      return todos.filter(todo => todo.completed)
    case 'active':
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}