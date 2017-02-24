import React from 'react'
import {withRouter} from 'react-router'
import TodoList from './todo-list'
import {store, getVisibleTodos, toggle_todo, fetchTodos} from '../store'

export default withRouter(
  class extends React.Component {
    componentDidMount() {
      this.unsubscribe = store.subscribe(() => this.forceUpdate())
      this.fetchData()
    }
    componentDidUpdate (previousProps) {
      if (this.props.params.filter !== previousProps.params.filter) {
        this.fetchData()
      }
    }
    fetchData () {
      const filter = this.props.params.filter || 'all'
      store.dispatch(fetchTodos(filter))
    }
    componentWillUnmount() {
      this.unsubscribe()
    }
    render() {
      const props = this.props
      const state = store.getState()
      return (
        <TodoList 
          todos={getVisibleTodos(state.todos, this.props.params.filter || 'all')}
          onTodoClick={id => store.dispatch(toggle_todo(id))}
        />
      )
    }
  }
)