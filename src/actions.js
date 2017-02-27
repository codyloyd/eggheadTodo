import * as db from './db'
import {getIsFetching} from './reducers'
import {normalize} from 'normalizr'
import * as schema from './schema'

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) return Promise.resolve()
  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter
  })

  return db.fetchTodos(filter).then(
    response => {
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        filter,
        response: normalize(response, schema.arrayOfTodos)
      })
    },
    error => {
      dispatch({
        type: 'FETCH_TODOS_FAILURE',
        filter,
        message: error.message || 'Something went wrong'
      })
    })
}

export const add_todo_to_list = (text) => (dispatch) =>
  db.addTodo(text).then(response => {
    dispatch({
      type: 'ADD_TODO_SUCCESS',
      response: normalize(response, schema.todo)
    })
  })

export const toggle_todo = (id) => (dispatch) =>
  db.toggleTodo(id).then(response => {
    dispatch({
      type: 'TOGGLE_TODO_SUCCESS',
      response: normalize(response, schema.todo)
    })
  })