import React from 'react'

import TodoForm from './todo-form'
import VisibleTodoList from './visibile-todo-list'
import Footer from './footer'


export default ({params}) => {
  return (
    <div className='primary-list'>
      <h1 className='title'>TODOAPPP</h1>
      <TodoForm />
      <VisibleTodoList />
      <Footer />
      <style>{`
        .primary-list {
          max-width: 400px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}



