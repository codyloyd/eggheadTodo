import React from 'react'

export default ({active, children, onClick}) => {
  return (
    <a 
      className={'button is-small is-dark' + (active ?  '' : 'is-disabled')}
      href="#"
      onClick={e => {
        e.preventDefault()
        onClick() 
      }}
    >
      {children}
    </a>
  )
}