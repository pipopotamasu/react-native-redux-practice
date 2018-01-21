import { combineReducers } from 'redux'
import { COUNT_UP, COUNT_DOWN, INPUT_COUNT } from '../actions/counter'

function count(state = 0, action) {
  switch (action.type) {
    case COUNT_UP:
      return ++state
    case COUNT_DOWN:
      return --state
    case INPUT_COUNT:
      return action.count
    default:
      return state
  }
}

// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// })

export default count
