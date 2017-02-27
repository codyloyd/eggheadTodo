import React from 'react'

const FetchError = ({message, onRetry}) => (
  <div className='notification is-danger'>
    <p>Could not fetch todos. {message}</p>
    <button className="button is-outlined" onClick={onRetry}>Retry</button>
  </div>
)

export default FetchError