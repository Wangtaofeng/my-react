// 入口文件就是引入 + 挂载App实例
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// history模式
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
