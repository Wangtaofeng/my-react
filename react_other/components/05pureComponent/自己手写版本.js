import React, { Component } from 'react'

export default class index extends Component {
  state = {
    num: '111',
    age: 18
  }
  // 只要setState执行, 不管state状态是否发生改变, 都会引起组件执行render
  // 同时, 其相应的子组件也会执行render
  change = () => {
    this.setState({ num: '222' })
  }
  // 按照常理来说, state状态如果未发生改变, 不应该执行render函数
  // 同样, 如果传给子组件的props没有更新, 也不应该仔细子组件的render
  // 可以借助生命周期的shouldComponentUpdate控制阀门, 接收两个参数, 分别是即将变化的state和props
  shouldComponentUpdate (nextProps, nextState) {
    // 这样我们就可以在这里控制父组件的状态如果未更新, 那么父组件就不会调用render
    if (nextState.num === this.state.num) return false
    return true
  }
  render () {
    console.log("父组件render")
    return (
      <div>
        <h3>{this.state.car}</h3>
        <button onClick={this.change}>改变</button>
        <C age={this.state.age} />
      </div>
    )
  }
}
class C extends Component {
  // 上述虽然根据状态前后判断了父组件是否需要调用render, 但是对于子组件来说, 父组件render子组件也会
  // 有时候虽然父组件更新了, 但是仅仅是因为父组件需要数据更新了, 子组件的并未变化, 那么子组件就不必更新
  // 因此可以利用同样的方法来判断子组件的props
  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.age === this.props.age) return false
    return true
  }
  render () {
    console.log('子组件render')
    return (
      <h2>我是子组件</h2>
    )
  }
}

// 虽然可以自己实现, 但是当状态很多的时候, 什么时候改变哪一个值需要更新或者不更新, 判断起来很麻烦