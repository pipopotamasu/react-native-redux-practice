import { combineReducers } from 'redux'
import { COUNT_UP } from '../actions/counter'

function counter(state = 0, action) {
  switch (action.type) {
    case COUNT_UP:
      console.log(action)
      return ++state
    default:
      return state
  }
}

// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// })

export default counter
