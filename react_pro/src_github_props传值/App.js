// 这里不是属于结构赋值, 能这么是死因为react暴露了不止一个对象或方法
import React, { Component } from 'react'
// 使用index.jsx作为名字的话, 直接找父级文件夹即可自动访问到.jsx, .js
import List from './components/List'
import Search from './components/Search'

export default class App extends Component {
  state = {
    users: [],
    // 因为要根据搜索的状态来决定list展示的
    // 所以判断相关的也要放在这里
    isLoadding: false,//是否正在搜索中
    Error: '',// 是否异常
    isFirst: true // 是否第一次打开页面
  }
  // 接下来是不止设置一个状态, 因此需要一个方法直接传来一个状态对象
  // addUsers = (value) => {
  //   this.setState({ users: value })
  // }
  setObj = (obj) => {
    this.setState(obj)
  }

  render () {
    return (
      <div>
        <Search setObj={this.setObj} />
        {/* 扩展运算符传值 */}
        <List {...this.state} />
      </div>
    )
  }
}