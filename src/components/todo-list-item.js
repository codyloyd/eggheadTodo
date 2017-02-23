import React from 'react'

export default ({id, completed, text, onTodoClick}) => {
  return (
    <tr>
      <td
        onClick={() => onTodoClick(id)}
        key={id}>
        <span className='subtitle'
          style={completed ? {'color': '#ccc', 'textDecoration': `line-through`}: {}} 
          >
          {text}
        </span>
      </td>
    </tr>
  )
}