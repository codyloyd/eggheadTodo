import React from 'react'

import FilterLink from './filter-link'

export default () => {
  return (
    <p>
      <span className='heading'>FILTERS</span>
      {' '}
      <FilterLink filter='SHOW_ALL'>
        All
      </FilterLink>
      {' '}
      <FilterLink filter='SHOW_ACTIVE'>
        Active
      </FilterLink>
      {' '}
      <FilterLink filter='SHOW_COMPLETED'>
        Completed
      </FilterLink>
    </p>
  )
}