import React, { Component } from 'react'
// import qs from 'querystring'

export default class index extends Component {
  render () {
    // const query = qs.parse(this.props.location.search.slice(1))
    console.log(this.props)
    return (
      <div>
        {/* <h3>这是第{query.id}</h3>
        <h3>{query.tittle}</h3> */}
      </div>
    )
  }
}
