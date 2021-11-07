import React, { Component } from 'react'
// 引入需要的ui组件
import { Button } from 'antd';
// 需要引入组件对应的样式
// 但是一次引入太冗余, yarn eject打开配置文件目录根据官网进行配置
// import 'antd/dist/antd.css'

export default class App extends Component {
  render () {
    return (
      <div>
        <Button type="danger">按钮</Button>
      </div>
    )
  }
}