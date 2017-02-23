import test from 'tape'
import visibilityFilter from './visibility-filter'

test('visibility-filter', assert => {
  const previousState = 'SHOW_ALL'
  const expected = 'FILTERED'
  const action = {
    type: 'SET_VISIBILITY_FILTER',
    visibilityFilter: 'FILTERED'
  }
  const actual = visibilityFilter(previousState, action)
  assert.equal(actual,expected, 'visibility filter should change the name of the filter as expected')
  assert.end()
})

test('visibility-filter', assert => {
  const previousState = 'SHOW_ALL'
  const expected = 'SHOW_ALL'
  const action = {
    type: 'SET_FILTER',
    visibilityFilter: 'FILTERED'
  }
  const actual = visibilityFilter(previousState, action)
  assert.equal(actual,expected, 'visibility filter should not change the name of the filter with wrong type')
  assert.end()
})