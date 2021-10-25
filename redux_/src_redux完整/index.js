import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
// 正常渲染, 注意这里是两次, 一次正常, 一次是放在回调里的
ReactDOM.render(<App />, document.getElementById('root'))
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById('root'))
})