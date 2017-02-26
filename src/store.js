import {applyMiddleware, createStore} from 'redux'
import createLogger from 'redux-logger'
import promise from 'redux-promise'
import todoApp from './reducers/todo-app'
import cuid from 'cuid'
import throttle from 'lodash/throttle'
import * as db from './db'

const logger = createLogger()
const store = createStore(todoApp, applyMiddleware(promise, logger)) 
export {store}
