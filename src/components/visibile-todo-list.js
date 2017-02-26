import React, {Component}from 'react'
import { connect } from 'react-redux'
import {  withRouter } from 'react-router'
import TodoList from './todo-list'
import { getVisibleTodos} from '../reducers/todos'
import * as actions from '../actions'

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
    const { toggle_todo, ...rest} = this.props
    return <TodoList {...rest} onTodoClick={toggle_todo}/>
  }
}

const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all'
  return {
    todos: getVisibleTodos(state.todos, filter),
    filter
  }
}

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList))

export default VisibleTodoList
