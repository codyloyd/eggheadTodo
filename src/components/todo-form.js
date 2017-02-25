import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {add_todo_to_list} from '../actions'

const TodoForm = ({ dispatch }) => {
  let input
  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        if (input.value) {
          dispatch(add_todo_to_list(input.value))
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

TodoForm.propTypes = {
  dispatch: PropTypes.func.isRequired
}
export default connect()(TodoForm)