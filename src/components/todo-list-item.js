import React from 'react'

export default ({id, completed, text, onClick}) => {
  return (
    <tr>
      <td
        onClick={onClick}
      >
        <span className='subtitle'
          style={completed ? {'color': '#ccc', 'textDecoration': `line-through`}: {}} 
        >
          {text}
        </span>
      </td>
    </tr>
  )
}