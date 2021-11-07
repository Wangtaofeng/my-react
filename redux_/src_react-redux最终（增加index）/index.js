import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
// 引入Provider, 用于给所有容器传递store, 组件里就可以使用了, 不要每次都在组件中传
import { Provider } from 'react-redux'
ReactDOM.render(
  // 在Provider中传递store, 就会给所有容器传递
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// 使用react-redux后就不需要监听变化重新渲染了

// store.subscribe(() => {
//   ReactDOM.render(<App />, document.getElementById('root'))
// })