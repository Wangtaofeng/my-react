// 引入创建stroe的方法
// applyMiddleware是redux使用中间件的函数, 调用它并且传入一个中间件即可使用
import { createStore, applyMiddleware } from 'redux'
// 引入reducer
import countReducer from './countReducer'
// 引入用于解析异步创建action的函数的中间件
import thunk from 'redux-thunk'

// 创建store是需要传递第一个参数, 表示使用中间件
export default createStore(countReducer, applyMiddleware(thunk))