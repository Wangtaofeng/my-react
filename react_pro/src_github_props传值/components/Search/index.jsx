import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
  search = () => {
    // 连续解构赋值
    // 适用于多层解构, 用来中转的将不会被赋值, 最里层可以重命名
    const { KayElement: { vaule: keyWord } } = this
    // 请求前需要设置为等待状态
    this.props.setObj({ isFirst: false, Error: '', isLoadding: true })
    axios.get(`/search/users2?q=${keyWord}`).then(res => {
      // 请求成功设置渲染页面
      this.props.setObj({ isFirst: false, Error: '', isLoadding: false, users: res.data.items })
    }).catch(err => {
      this.props.setObj({ isFirst: false, Error: err.message, isLoadding: false, })
    })
  }
  render () {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" ref={c => this.KayElement = c} placeholder="enter the name you search" />&nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
