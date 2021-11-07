import React, { Component } from 'react'

export default class index extends Component {
  render () {
    // 在props的match的params可以拿到params对象，其中是声明接受的key和传来的alue
    const { id, tittle } = this.props.match.params
    console.log(this.props)
    return (
      <div>
        <h3>这是第{id}</h3>
        <h3>{tittle}</h3>
      </div>
    )
  }
}
