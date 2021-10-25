import React, { Component } from 'react'
// 一般组件是不能使用history对象的方法的, 也就是不能对路由进行操作
// 使用的话需要借助react-router-dom下的withRouter, 并且将这个组件向外暴露为处理过的
import { withRouter } from 'react-router-dom'

// 不能这么暴露组件, 需要暴露一个被withRouter处理过后的组件才能操作路由
// export default class index extends Component {
//   goback = () => {
//     this.props.history.goBack()
//   }
//   render () {
//     return (
//       <div>
//         <button onClick={this.goback}>后退</button>
//       </div>
//     )
//   }
// }
class Header extends Component {
  goback = () => {
    this.props.history.goBack()
  }
  render () {
    return (
      <div>
        <button onClick={this.goback}>后退</button>
      </div>
    )
  }
}
export default withRouter(Header)