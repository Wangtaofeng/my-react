// 需要引入combineReducers, 每一个reducer初始化一个状态
// 当有多个状态时, 需要多个reducer, 这时候就需要使用combine进行连接成为一个对象
import { createStore, applyMiddleware, combineReducers } from 'redux'
// 引入reducer
import count from './reducers/count'
import person from './reducers/person'
// 引入用于解析异步创建action的函数的中间件
import thunk from 'redux-thunk'

// 连接多个reducer, 生成一个对象返回, key就是store.getstate拿到的
const allReducer = combineReducers({
  count,
  person
})
// 创建store时传递的是最终连接后的reducer
export default createStore(allReducer, applyMiddleware(thunk))