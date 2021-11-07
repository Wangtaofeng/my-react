import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {
  // 虽然更改了Redux的state, 但是不会引起组件的重新执行render
  // 每次redux一旦改变, 就会触发store.subscribe，执行其中的回调函数,可以在这个方法里更新一个空state
  // componentDidMount () {
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }
  // 只要state改变就会重新执行render

  // 也可以在index.js中执行这个统一监视, 具体可以去那里看
  // 因此可以在生命周期开始利用store.subscribe进行监视,

  incerate = () => {
    // 向store传递action对象, store再将preState和action对象传给reducer
    store.dispatch({ type: 'increase', data: 1 })
  }
  decrease = () => {
    store.dispatch({ type: 'decrease', data: 1 })
  }
  incerateOdd = () => {
    const count = store.getState()
    if (count % 2 === 0) return
    store.dispatch({ type: 'increase', data: 1 })
  }
  incerateAsync = () => {
    setTimeout(() => {
      store.dispatch({ type: 'increase', data: 1 })
    }, 500)
  }
  render () {
    const { incerate, decrease, incerateOdd, incerateAsync } = this
    return (
      <div>
        <h1>{store.getState()}</h1>
        <button onClick={incerate}>+1</button>
        <button onClick={decrease}>-1</button>
        <button onClick={incerateOdd}>奇数+</button>
        <button onClick={incerateAsync}>异步+</button>
      </div>
    )
  }
}
