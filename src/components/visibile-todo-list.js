import React, {Component}from 'react'
import { connect } from 'react-redux'
import {  withRouter } from 'react-router'
import TodoList from './todo-list'
import { getVisibleTodos, toggle_todo, receive_todos} from '../store'
import {fetchTodos} from '../db'

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData()
  }
  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) 
      this.fetchData()
  }
  fetchData() {
    const {filter, receive_todos} = this.props
    fetchTodos(filter).then(todos => 
      receive_todos(filter, todos)
    )
  }
  render() {
    return <TodoList {...this.props}/>
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
  {onTodoClick: toggle_todo, receive_todos}
)(VisibleTodoList))

export default VisibleTodoList
