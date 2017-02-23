import todos from './todos'
import visibilityFilter from './visibility-filter'
import {combineReducers} from 'redux'

export default combineReducers({todos, visibilityFilter})