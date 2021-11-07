import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {
  // 封装xhr对象
  setXhr = (url) => {
    let xhr = new XMLHttpRequest()
    // 配置请求
    xhr.open('GET', url)
    // 配置响应为json格式
    xhr.responseType = 'json'
    // 请求成功的回调
    xhr.onload = (res) => {
      console.log(res)
    }
    // 失败的回调
    xhr.onerror = (err) => {
      console.log(err)
    }
    // 发送请求
    xhr.send()
  }
  search = async () => {
    const { KayElement: { vaule: keyWord } } = this
    // 封装xhr正常
    // this.setXhr(`/search/users2?q=heel`)

    //未优化
    // // 第一步连接服务器
    // fetch(`http://localhost:5000/search/r2?q=${keyWord}`).then(
    //   res => {
    //     console.log("连接成功")
    //     // 这一步只表示连接服务器成功, 至于能不能返回数据成功, 是下一个promise的事
    //     // 在res.json()里封装了一个promise对象, 可能为成功或者失败
    //     // 里面保存的是下一步获取数据的promise
    //     // 这里将这个promise return出去, 进行下一步调用
    //     return res.json()
    //   }, err => {
    //     // 走到这里时, 第一个promise就已经到了异常的地方, 这里可以结束了
    //     // 但是如果不return一个promise的话, 这里返回的就是undefined
    //     // 只要不是reject, 就会被下一个.then继续调用
    //     // 合适的方法是在这里就return一个空的promise, 直接就会终止下面的调用
    //     console.log("连接失败")
    //     return new Promise(() => { })
    //   })
    //   .then(res => {
    //     console.log("获取数据成功了", res)
    //   }, err => {
    //     console.log("获取失败", err)
    //   })

    //初步优化
    // fetch(`http://localhost:5000/search/r2?q=${keyWord}`).then(
    //   res => {
    //     console.log("连接成功")
    //     return res.json()
    //   })
    //   .then(res => {
    //     console.log("获取数据成功了", res)
    //   })
    //   // 也可以把所有的失败都放在底部catch
    //   .catch(err => {
    //     console.log("失败")
    //     return new Promise(() => {})
    //   })

    // 使用await 优化
    // 只接受成功的返回结果, 对于失败的结果, 这里需要使用try catch
    try {
      // 这里是第一步成功返回的结果
      const res = await fetch(`/search/users2?q=heel`)
      // data在第一个返回的结果的json()里, 同样也是promise对象, 也需要await
      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }

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
