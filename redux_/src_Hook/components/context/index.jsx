import React, { Component } from 'react'

const MyContext = React.createContext()
const { Provider, Consumer } = MyContext
// 父组件
export default class index extends Component {
  state = {
    name: '我是给后代元素的数据'
  }
  render () {
    return (
      <div>
        <h1>我是index组件</h1>
        <Provider value={{ name: this.state.name }}>
          <A />
        </Provider>
      </div>
    )
  }
}
// 子组件
class A extends Component {
  render () {
    return (
      <div>
        <h2>我是A组件</h2>
        <B />
        <C />
      </div>
    )
  }
}
// 后代组件1
class B extends Component {
  static contextType = MyContext
  render () {
    console.log(this.context)
    return (
      <div>
        <h3>我是B组件</h3>
      </div>
    )
  }
}
// 后代组件2
function C () {
  return (
    <div>
      <h3>我是C组件</h3>
      <Consumer>
        {value => console.log(value)}
      </Consumer>
    </div>
  )
}