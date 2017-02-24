import React from 'react'

import FilterLink from './filter-link'

export default () => {
  return (
    <p>
      <span className='heading'>FILTERS</span>
      {' '}
      <FilterLink filter='all'>
        All
      </FilterLink>
      {' '}
      <FilterLink filter='active'>
        Active
      </FilterLink>
      {' '}
      <FilterLink filter='completed'>
        Completed
      </FilterLink>
    </p>
  )
}