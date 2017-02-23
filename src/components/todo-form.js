import React from 'react'
import {add_todo_to_list} from '../reducers/store'

export default props => {
  let input
  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        add_todo_to_list(input.value)
        input.value = ''
        input.focus()        
    }}>
      <p className="control">
        <input className='input' placeholder='todo text' ref={node => {input = node}} autoFocus/>
      </p>
      <input type='submit' className='button is-dark' value='ADD TODO'/>
    </form>
  )
}