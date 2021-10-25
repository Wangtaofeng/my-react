import React, { Component } from 'react'

export default class index extends Component {
  render () {
    return (
      <div>
        {/* 给A组件的props传了一个render函数, 该函数执行会返回一个组件的引用, 同时给该组件传了name
        注意这里的name并不是在这里传递, 在哪里调用render则会在哪里传递, 这里只是定义了形参, 下面调用时需要传递
        */}
        <A render={name => <B name={name} />} />
      </div>
    )
  }
}
class A extends Component {
  state = { name: '111' }
  render () {
    console.log(this.props)
    return (
      <div>
        <h3>我是A组件</h3>
        {/* 此时A组件的props中收到了函数, 该函数执行后, 会生成一个组件标签, 即组件的引用, 同时在这里传入实参
        这个实参, 在上面定义的时候就已经将这个值通过props传给子组件
        */}
        {this.props.render(this.state.name)}
        {/* 这样的话这里相当于定义了一个插槽, 在这里空着, 需要什么组件, 在上面使用时传递不同的render函数即可 */}
      </div>
    )
  }
}

class B extends Component {
  render () {
    return (
      <div>
        <h3>我是B组件</h3>
        <h4>我的名字是{this.props.name}</h4>
      </div>
    )
  }
}