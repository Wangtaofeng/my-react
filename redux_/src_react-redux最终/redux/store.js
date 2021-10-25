// 需要引入combineReducers, 每一个reducer初始化一个状态
// 当有多个状态时, 需要多个reducer, 这时候就需要使用combine进行连接成为一个对象
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// 引入reducer
import reducer from './reducers'
// 引入用于解析异步创建action的函数的中间件
import thunk from 'redux-thunk'
// 创建store时传递的是最终连接后的reducer
// 使用开发者工具composeWithDevTools时, 作为第二个参数调用, 如果第二个参数本身存在, 那原有的作为composeWithDevTools的参数
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))