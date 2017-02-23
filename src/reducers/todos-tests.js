import test from 'tape'
import deepFreeze from 'deep-freeze'
import todos from './todos'

test('addTodos', assert => {
  const stateBefore = []
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  }
  const actual = todos(stateBefore, action)
  const expected = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ]
  deepFreeze(stateBefore)
  deepFreeze(expected)
  assert.deepEqual(actual, expected, "todos reducer should add a todo to the state")
  assert.end()
})

test('toggleTodo', assert => {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'go shopping',
      completed: false
    }
  ]
  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  }
  const actual = todos(stateBefore, action)
  const expected = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'go shopping',
      completed: true
    }
  ]
  deepFreeze(stateBefore)
  deepFreeze(expected)
  assert.deepEqual(actual, expected, 'toggle todo should toggle the todo completed state')
  assert.end()
})