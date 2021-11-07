import React, { Component } from 'react'
import { connect } from 'react-redux'
import { creatIncreaseAction, creatDecreaseAction, createIncrementAsyncAction } from '../../redux/actions/count'

// 将ui组件和容器写在一个组件中, 容器放下面, 不用再引入ui组件, 直接就能拿着用
class Count extends Component {
  incerate = () => {
    // 虽然本质上是dispatch，但是不需要显示调用
    this.props.increase(1)
  }
  decrease = () => {
    this.props.decrease(1)
  }
  incerateOdd = () => {
    const { count } = this.props
    if (count % 2 === 0) return
    this.props.increase(1)
  }
  incerateAsync = () => {
    this.props.increaseAsync(1)
  }
  render () {
    const { incerate, decrease, incerateOdd, incerateAsync } = this
    const { count } = this.props
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={incerate}>+1</button>
        <button onClick={decrease}>-1</button>
        <button onClick={incerateOdd}>奇数+</button>
        <button onClick={incerateAsync}>异步+</button>
      </div>
    )
  }
}
// 多个reducer通过combine连接成的对象, 都在state中存着, 连接时的key就是这里取值是state的key
const mapStateToProps = state => ({ count: state.count })
const mapDispatchToProps = {
  // 这里也可以返回一个对象, 就是一个映射关系, key的值是一个函数, 这里不进行调用
  // 因为在action中可以调用, 这里只是将那里定义的函数传递出去
  // 原来返回函数的形式, 是在回调函数中调用action中的函数, 这里只是传递了函数
  // 当返回的是一个对象时，对象的属性对应着creatAction中的方法。此时不需要显式的dispatch调用，直接执行对象的方法即可
  increase: creatIncreaseAction,
  decrease: creatDecreaseAction,
  increaseAsync: createIncrementAsyncAction
}
export default connect(mapStateToProps, mapDispatchToProps)(Count)