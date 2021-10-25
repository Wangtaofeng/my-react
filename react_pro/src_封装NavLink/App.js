import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Hello from './Page/Hello'
import World from './Page/World'
import MyLink from './Page/MyLink'
import './index.css'

export default class App extends Component {

  render () {
    return (
      <div>
        <MyLink className="a" to="/Hello">Hello</MyLink><br />
        <MyLink className="a" to="/World">World</MyLink>
        <Route path="/Hello" component={Hello}></Route>
        <Route path="/World" component={World}></Route>
      </div>
    )
  }
}