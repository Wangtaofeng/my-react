import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

// 自己封装NavLink主要是统一激活样式添加
export default class MyLink extends Component {
  render () {
    return (
      <NavLink activeClassName="b" {...this.props} />
    )
  }
}
