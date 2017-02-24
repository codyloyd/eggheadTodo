import {combineReducers} from 'redux'
import todo from './todo'

const byId = (state={}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {...state, [action.id]: todo(state[action.id], action)}
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.id]
    default:
      return state
  }
}

const todos = combineReducers({byId, allIds})

export default todos
