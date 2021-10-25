// 该文件是count的容器, react-redux规定, 组件不能直接操作redux
// 这里通过props与组件连接, 并与store连接
// 在这里不引入store, 下面的state和dispatch也不是本来就有的, 需要在组件挂载时, 在那里将store传递,而且也不用接收
// 这个组件会在根组件挂载, 在那里传递就行, 具体可以去App.js查看

// 引入组件
import Count from '../../components/Count'
// 引入用于连接组件和store的connect
import { connect } from 'react-redux'
// 引入创建action对象的方法, 用于下方操作state
import { creatIncreaseAction, creatDecreaseAction, createIncrementAsyncAction } from '../../redux/countAction'
// connect方法需要传递两个参数, 均为函数, 一个返回状态, 一个返回操作状态的方法

// 第一个参数, 返回store中的状态, 参数为store中的state,该返回值在组件中的props中
function mapStateToProps (state) {
  // 需要返回一个对象
  return { count: state }
}
// 第二个参数, 返回操作store状态的方法, 参数为dispatch, 可以用来通知store去操作状态
function mapDispatchToProps (dispatch) {
  return {
    increase (data) {
      dispatch(creatIncreaseAction(data))
    },
    decrease (data) {
      dispatch(creatDecreaseAction(data))
    },
    increaseAsync (data) {
      dispatch(createIncrementAsyncAction(data))
    }
  }
}
// 暴露一个连接组件和store后的容器
// connect是一个高阶函数, 第一个函数的参数是两个参数, 一个用于将state传给组件, 一个用于将操作传给组件
// 第二个函数参数是组件
export default connect(mapStateToProps, mapDispatchToProps)(Count)