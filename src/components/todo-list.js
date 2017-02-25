import React, {PropTypes} from 'react'

import TodoListItem from './todo-list-item'

const TodoList = ({todos, onTodoClick}) => {
  return (
    <table className='table is-narrow'>
      <thead><tr><th>TODOS</th></tr></thead>
      <tbody>
      {todos.map(todo => 
        <TodoListItem 
          key={todo.id} 
          {...todo}
          onClick={() => onTodoClick(todo.id)} 
        />)}
      </tbody>
    </table>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

export default TodoList