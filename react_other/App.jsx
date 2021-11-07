import React, { Component } from 'react'
// import Num from './components/set_State'
// import LazyRouter from './components/lazyRouter'
// import MyHook from './components/myHook'
import ErrorBoundary from './components/ErrorBoundary'


export default class App extends Component {
  render () {
    return (
      <div>
        <ErrorBoundary />
      </div>
    )
  }
}
