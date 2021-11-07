import React, { Component } from 'react'
// 组件不能直接读取和操作store，而是通过容器的方法
export default class Count extends Component {
  incerate = () => {
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
