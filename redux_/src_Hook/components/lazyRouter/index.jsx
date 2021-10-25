import React, { Component, lazy, Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'
import MyLink from './MyLink'
import './index.css'
import Loading from './Loading'

// 路由的懒加载, 直接使用下面这种方式的话, 会在一开始不管有没有选中路由组件, 都会进行加载
// 使用react中的lazy可以实现懒加载, lazy()是个函数, 执行时里面传递一个函数, 需要return一个import()
// import Hello from './Hello'
// import World from './World'
const Hello = lazy(() => import('./Hello'))
const World = lazy(() => import('./World'))
export default class index extends Component {
  render () {
    return (
      <div>
        <MyLink className="a" to="/About">About</MyLink><br />
        <MyLink className="a" to="/Home">Home</MyLink>
        {/* // 直接使用路由懒加载的话, 需要使用一个未加载时的组件来用于加载时的显示, 传递fallback属性, 值为{组件} */}
        <Suspense fallback={<Loading />}>
          <Route path="/About" component={Hello} />
          <Route path="/Home" component={World} />
        </Suspense>
        <Redirect to="/About" />
      </div>
    )
  }
}