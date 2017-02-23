import {createStore} from 'redux'
import todoApp from './todo-app'
import cuid from 'cuid'

export const store = createStore(todoApp) 

export const add_todo_to_list = (text, id) => {
  if (text) {
    store.dispatch({type: 'ADD_TODO', text, id: cuid()})
  }
}

export const toggle_todo = (id) =>
  store.dispatch({type: 'TOGGLE_TODO', id})

export const set_visibility_filter = (visibilityFilter) =>
  store.dispatch({type: 'SET_VISIBILITY_FILTER', visibilityFilter})

export const getVisibleTodos = ({todos, visibilityFilter}) => {
  switch (visibilityFilter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}