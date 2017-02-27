import React, {Component}from 'react'
import { connect } from 'react-redux'
import {  withRouter } from 'react-router'
import TodoList from './todo-list'
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers/'
import * as actions from '../actions'
import FetchError from './fetchError'

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData()
  }
  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) 
      this.fetchData()
  }
  fetchData() {
    const {filter, fetchTodos} = this.props
    fetchTodos(filter)
  }
  render() {
    const { toggle_todo, errorMessage, todos, isFetching, ...rest} = this.props
    if (isFetching && !todos.length) {
      return <p className='title'>Loading...</p>
    }
    if (errorMessage && !todos.length) {
      return (
        <FetchError 
          message={errorMessage}
          onRetry={() => this.fetchData()}
        />
      )
    }
    return <TodoList todos={todos} onTodoClick={toggle_todo}/>
  }
}

const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all'
  return {
    todos: getVisibleTodos(state, filter),
    errorMessage: getErrorMessage(state, filter),
    isFetching: getIsFetching(state, filter),
    filter
  }
}

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList))

export default VisibleTodoList
