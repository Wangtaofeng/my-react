import React, { Component } from 'react'
import store from '../../redux/store'
import { creatIncreaseAction, creatDecreaseAction, createIncrementAsyncAction } from '../../redux/countAction'

export default class Count extends Component {
  incerate = () => {
    // dispatch一个action对象, 该对象是在create中创建的,返回的是一个action
    store.dispatch(creatIncreaseAction(1))
  }
  decrease = () => {
    store.dispatch(creatDecreaseAction(1))
  }
  incerateOdd = () => {
    const count = store.getState()
    if (count % 2 === 0) return
    store.dispatch(creatIncreaseAction(1))
  }
  incerateAsync = () => {
    // 在store中异步
    store.dispatch(createIncrementAsyncAction(1))
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
