import React from 'react'
import {store, add_todo_to_list} from '../store'

export default props => {
  let input
  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        if (input.value) {
          store.dispatch(add_todo_to_list(input.value))
          input.value = ''
        }
          input.focus()        
    }}>
      <p className="control">
        <input className='input' placeholder='todo text' ref={node => {input = node}} autoFocus/>
      </p>
      <input type='submit' className='button is-dark' value='ADD TODO'/>
    </form>
  )
}