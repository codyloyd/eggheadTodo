import React from 'react'
import TodoList from './todo-list'
import {store, getVisibleTodos, toggle_todo} from '../store'

export default class extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  render() {
    const props = this.props
    const state = store.getState()
    return (
      <TodoList 
        todos={getVisibleTodos(state)}
        onTodoClick={id => store.dispatch(toggle_todo(id))}
      />
    )
  }
}