import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {
  search = () => {
    const { KayElement: { vaule: keyWord } } = this
    // 请求前需要设置为等待状态
    PubSub.publish('ADD', { isFirst: false, Error: '', isLoadding: true })
    axios.get(`/search/users2?q=${keyWord}`).then(res => {
      // 请求成功设置渲染页面
      PubSub.publish('ADD', { isFirst: false, Error: '', isLoadding: false, users: res.data.items })
    }).catch(err => {
      PubSub.publish('ADD', { isFirst: false, Error: err.message, isLoadding: false, })
    })

    // 测试发布消息, 附带可以传值 
    // PubSub.publish('ADD', 'HELLO')
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
