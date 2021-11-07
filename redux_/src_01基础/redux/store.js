// 引入创建stroe的方法
import { createStore } from 'redux'
// 引入reducer
import countReducer from './countReducer'

export default createStore(countReducer)