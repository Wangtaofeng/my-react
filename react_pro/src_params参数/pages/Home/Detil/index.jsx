import React, { Component } from 'react'

export default class index extends Component {
  render () {
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
