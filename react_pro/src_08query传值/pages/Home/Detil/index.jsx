import React, { Component } from 'react'
import qs from 'querystring'

export default class index extends Component {
  render () {
    // 并不是在match中，是在location的search参数中，并且是一个querystring字符串，需要使用qs解析一下才能得到对象
    const query = qs.parse(this.props.location.search.slice(1))
    return (
      <div>
        <h3>这是第{query.id}</h3>
        <h3>{query.tittle}</h3>
      </div>
    )
  }
}
