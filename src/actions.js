import * as db from './db'
import {getIsFetching} from './reducers'

const request_todos = (filter) => ({
  type: 'REQUEST_TODOS',
  filter
})

const receive_todos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
})

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) return Promise.resolve()
  dispatch(request_todos(filter))

  return db.fetchTodos(filter).then(response => 
    dispatch(receive_todos(filter, response))
  )
}

export const add_todo_to_list = (text, id) => 
  ({type: 'ADD_TODO', text, id: cuid()})

export const toggle_todo = (id) => 
  ({type: 'TOGGLE_TODO', id})