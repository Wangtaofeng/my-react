import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import MyLink from './MyLink'
import './index.css'
// 01
export default class App extends Component {
  render() {
    return (
      <div>
        <MyLink className='a' to='/About'>
          About
        </MyLink>
        <br />
        <MyLink className='a' to='/Home'>
          Home
        </MyLink>
        <Route path='/About' component={About} />
        <Route path='/Home' component={Home} />
        <Redirect to='/About' />
      </div>
    )
  }
}
