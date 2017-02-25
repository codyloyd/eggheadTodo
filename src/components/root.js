import React, {PropTypes} from 'react'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import TodoApp from './todo-app'

const Root  = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/(:filter)' component={TodoApp} />
      </Router>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root