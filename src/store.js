import {applyMiddleware, createStore} from 'redux'
import createLogger from 'redux-logger'
import todoApp from './reducers/'
import cuid from 'cuid'
import throttle from 'lodash/throttle'
import * as db from './db'
import thunk from 'redux-thunk'

const logger = createLogger()
const store = createStore(todoApp, applyMiddleware(thunk, logger)) 
export {store}
