import React, { Component } from 'react'

export default class index extends Component {
  state = {
    Error: ''
  }
  // 注意需要static, 而且参数error是子组件错误时传递的错误信息, 该函数也算是一个钩子吧
  static getDeriveStateFromError (Error) {
    // 当子组件出错时, 会执行该函数, 不能捕获自己的
    // 一般是在子组件加载时的生命周期函数调用出错会执行该函数
    // 需要return一个状态对象, 该对象会成为state的值, 同时在state需要声明
    return { Error }
  }
  // 还有一个不常用的生命周期componentDidCatch(), 每次出错时也会调用, 一般用于统计错误次数
  componentDidCatch () {
    console.log('出错了')
  }
  render () {
    return (
      <div>
        <h3>我是父组件</h3>
        {/* 那么这里就可以根据错误状态来判断子组件出错时需要展示什么 */}
        {this.state.Error ? <h1>出错了</h1> : <A />}
      </div>
    )
  }
}
class A extends Component {
  render () {
    return (
      <div>
        <h1>我是A组件</h1>
      </div>
    )
  }
}
