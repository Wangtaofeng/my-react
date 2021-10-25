import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import MyLink from './MyLink'
import Header from './Header'
import './index.css'

export default class App extends Component {

  render () {
    return (
      <div>
        <Header />
        <MyLink className="a" to="/About">About</MyLink><br />
        <MyLink className="a" to="/Home">Home</MyLink>
        <Route path="/About" component={About} />
        {/* 精准匹配模式不能随便开启, 这种当有子路由并且子路由重定向时, 就会匹配不到子路由
        因为这里点击home后, 此时的匹配模式是home/message(因为home路由下子路由的重定向)
        但是此时home组件里的路由还未注册, 只能在这里匹配, 这里只能匹配到home, 但是因为精准匹配
        home不会被匹配 */}
        <Route path="/Home" component={Home} />
        {/* 当匹配不到任何路由时, 可以用这个兜底 */}
        <Redirect to="/About" />
      </div>
    )
  }
}