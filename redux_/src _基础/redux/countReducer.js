// 创建一个为count状态服务的reducer, 用于处理和操作state
// 一个reducer操作状态中的一个data
// 本质是一个函数, 接收两个参数, 一个是prestate, 一个是action对象

// 创建一个变量用于初始化state中的count
const initCount = 0
export default function countReducer (prestate = initCount, action) {
  // 从action中取出type, data, type用于判断如何操作state
  const { type, data } = action
  switch (type) {
    // 需要返回一个状态值, 作为prestate新的值
    case 'increase': return prestate + data
    case 'decrease': return prestate - data
    default: return prestate
  }
}