import React from 'react'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import TodoApp from './todo-app'

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path='/(:filter)' component={TodoApp} />
    </Router>
  )
}