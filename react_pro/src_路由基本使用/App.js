import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import Hello from './components/Hello'
import World from './components/World'
import './index.css'

export default class App extends Component {

  render () {
    return (
      <div>
        {/* Link以及Route需要包含在Router里面, 有两种Router, 一个是BrowserRouter, 一个是HashRouter
        分别对应history和hash模式, 可以在这里包裹, 也可以在index.js中挂载时就包裹 */}

        {/* link不用多说 */}
        {/* 使用link不会在对应的路由自动加上类名 */}
        {/* <Link className="a" to="/Hello">Hello</Link><br />
        <Link className="a" to="/World">World</Link> */}

        {/* 可以使用NavLink, 在对应路由会默认加上active类, 可以定义这个类对应的样式以区别
        也可以自定义根据路由加上什么类名, 采用activeClassName=""来定义 */}
        <NavLink activeClassName="b" className="a" to="/Hello">Hello</NavLink><br />
        <NavLink activeClassName="b" className="a" to="/World">World</NavLink>
        {/* 这里不是view什么的, 就是一个路由, 有对应的(path, component) */}
        <Route path="/Hello" component={Hello}></Route>
        <Route path="/World" component={World}></Route>
      </div>
    )
  }
}