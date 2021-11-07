// 引入常量
import { INCREASE, DECREASE } from './constCount'
// 创建一个变量用于初始化state中的count
const initCount = 0
export default function countReducer (prestate = initCount, action) {
  // 从action中取出type, data, type用于判断如何操作state
  const { type, data } = action
  switch (type) {
    // 需要返回一个状态值, 作为prestate新的值
    case INCREASE: return prestate + data
    case DECREASE: return prestate - data
    default: return prestate
  }
}