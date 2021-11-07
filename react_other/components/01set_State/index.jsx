import React, { Component } from 'react'

export default class set_State extends Component {
  state = {
    num: 1
  }
  add = () => {
    // setState第二个参数可以传递一个函数, 该函数在状态更新后并且页面也更新后执行, 类似于vue中的nextstick
    // 状态更新并不会立即引起页面更新, 状态是同步更新的, 但是页面是异步渲染的
    this.setState({ num: this.state.num + 1 }, () => {
      console.log(this.state.num)
    })

    // 当更新状态时需要状态或者props时, 可以使用这种set方式, 第一个参数是一个函数, 第二个参数不变
    // 第一个参数函数有两个参数, 分别是组件对象的state和props, 需要返回一个状态对象
    this.setState((state, props) => {
      return { num: state.num + 1 }
    })
  }
  render () {
    const { num } = this.state
    return (
      <div>
        <h1>{num}</h1>
        <button onClick={this.add}>+1</button>
      </div>
    )
  }
}
