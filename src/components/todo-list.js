import React from 'react'

import TodoListItem from './todo-list-item'

export default props => {
  return (
    <table className='table is-narrow'>
      <thead><tr><th>TODOS</th></tr></thead>
      <tbody>
      {props.todos.map(todo => 
        <TodoListItem 
          key={todo.id} 
          onTodoClick={props.onTodoClick} 
          text={todo.text}
          completed={todo.completed}
          id={todo.id}
        />)}
      </tbody>
    </table>
  )
}
