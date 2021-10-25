import React, { Component } from 'react'
import CountContainer from './containers/countContainer'
import store from './redux/store'

export default class App extends Component {
  render () {
    return (
      <div>
        <CountContainer store={store} />
      </div>
    )
  }
}
