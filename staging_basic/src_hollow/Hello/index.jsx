// 样式模块化, 由于很多模块下的样式都是index.css, 而最终都会被引入到app中
// 因此可以给样式加上.module, 前面用一个变量接收, 这样就自动生成了一个类似对象的外壳
// 可以在样式class前加上这个外壳就可
import hello from './index.module.css'
import React, { Component } from 'react'

export default class Hello extends Component {
  render() {
    return (
      // <div className='one'>
      // 在这里加上壳子
      <div className={hello.one}>Hello World!</div>
    )
  }
}
