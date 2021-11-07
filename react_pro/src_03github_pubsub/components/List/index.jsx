import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class index extends Component {
  state = {
    users: [],
    isLoadding: false,//是否正在搜索中
    Error: '',// 是否异常
    isFirst: true // 是否第一次打开页面
  }
  setObj = (obj) => {
    this.setState(obj)
  }
  // 在这里监听其他组件触发事件, 并发布消息, 传来值, 在这里处理
  componentDidMount () {
    // 两个参数, 订阅时返回一个对象, 可以在组件关闭时取消订阅
    this.token = PubSub.subscribe('ADD', (_, data) => {
      this.setObj(data)
    })
  }
  componentWillUnmount () {
    PubSub.unsubscribe(this.token)
  }
  render () {
    const { users, isLoadding, isFirst, Error } = this.state
    return (
      isFirst ? <h1>欢迎,点击搜索</h1> :
        isLoadding ? <h1>Loading</h1> :
          Error ? <h1>Error</h1> :
            <div className="row">
              {
                users.map((userObj) => {
                  return (
                    <div key={userObj.id} className="card">
                      <a rel="noreferrer" href={userObj.html_url} target="_blank">
                        <img alt="head_portrait" src={userObj.avatar_url} style={{ width: '100px' }} />
                      </a>
                      <p className="card-text">{userObj.login}</p>
                    </div>
                  )
                })
              }

            </div>
    )
  }
}


