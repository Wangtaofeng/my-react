import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

// 自己封装NavLink主要是同一激活样式添加
export default class MyLink extends Component {
  render () {
    return (
      // 这里...this.props能收到使用这个组件传来的所有属性, 也包括children(非自闭合标签里面的内容)
      // 调用时可能是这样, 里面的标签体World也会作为标签的属性(children)传递进来
      // 同样, 自闭合标签里写上children也会渲染成标签体
      // <MyRouter className="a" to="/World">World</MyRouter>
      <NavLink activeClassName="b" {...this.props} />
    )
  }
}
