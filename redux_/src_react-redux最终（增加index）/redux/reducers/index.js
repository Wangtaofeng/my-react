import { combineReducers } from 'redux'

// 引入reducer
import count from './count'
import person from './person'

export default combineReducers({
  count,
  person
})