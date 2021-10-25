// 这里不是属于结构赋值, 能这么是死因为react暴露了不止一个对象或方法
import React, {Component} from 'react'
// 使用index.jsx作为名字的话, 直接找父级文件夹即可自动访问到.jsx, .js
import Hello from './Hello'

export default class App extends Component{
  render() {
    return (
      <div>
        <Hello />
      </div>
    )
  }
}