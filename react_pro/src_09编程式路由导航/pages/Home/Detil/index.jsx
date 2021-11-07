import React, { Component } from 'react'
// import qs from 'querystring'

export default class index extends Component {
  render () {
    // const query = qs.parse(this.props.location.search.slice(1))
    // 打印一下看看路由组件的this.props究竟有什么
    console.log(this.props)
    /*
      this.props里面有三个属性，history,location,match
      history是路由的实例对象，拥有一些成员方法，push，replace等
      还有一个location属性，该属性对应着外层的loaction，就是一个引用
      loaction属性的中的search参数就是query请求传递的数据，但是是一个字符串
      match属性中的params属性就是params传来的数据
    */
    return (
      <div>
        {/* <h3>这是第{query.id}</h3>
        <h3>{query.tittle}</h3> */}
      </div>
    )
  }
}
