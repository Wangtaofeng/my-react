import React, { Component } from 'react'
import CountContainer from './containers/countContainer'
import store from './redux/store'

export default class App extends Component {
  render () {
    return (
      <div>
        {/*使用react-redux需要在容器上传递store */}
        <CountContainer store={store} />
      </div>
    )
  }
}
