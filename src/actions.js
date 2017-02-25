import * as db from './db'

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