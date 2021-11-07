// 入口文件就是引入 + 挂载App实例
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// history模式
// import { BrowserRouter } from 'react-router-dom'
// hash模式
import { HashRouter } from 'react-router-dom'

// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
// 也可以采用Hsah模式
ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'))
