// 该文件用于创建action, 可以有异步和同步, 同步返回的是action对象
// 异步返回的是一个函数, 函数执行后也必须dispatch(action)
// 组件中dispatch的是这里, 随后这里返回一个action
/* 
  该文件专门为Count组件生成action对象, 它不是action, 是用于创建action
  同步的action在组件中调用这里传递给store, 异步的store执行函数, 并在函数中dispatch一个action对象
*/
// 引入常量, 常量用于后期维护, 改变常量值即可
import { INCREASE, DECREASE } from './constCount'
export const creatIncreaseAction = data => ({ type: INCREASE, data })
export const creatDecreaseAction = data => ({ type: DECREASE, data })
// 异步创建action, 本身创建action就是一个函数, 但是在异步创建需要返回一个函数, 在函数中写异步代码
// 然而store只认识返回的action,但是这里并没有返回action, 函数它不认识
// 因此需要借助一个中间件reduc-thunk, 并在createStore时进行操作
export const createIncrementAsyncAction = data => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: INCREASE, data })
    }, 500)
  }
}