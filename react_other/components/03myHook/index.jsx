import React from 'react'
import ReactDOM from 'react-dom'

function Deom () {
  // 注意这里是数组里按照下标取值, 前两个索引的值对应的一个是state, 一个setState, 这里的state是可以改变的名称
  // useState(init), 里面的init里面传递是初始状态, 如果有多个, 可以设置为一个对象
  const [state, setState] = React.useState({ count: 0 })
  // 使用useEffect可以是函数式组件也可以使用生命周期函数
  // useEffect其实是componentDidMount, componentDidUpdate, componentWillUmount三个钩子的集成,
  // 第一个参数是一个函数, 该函数就是生命周期函数内需要写的,return一个函数时, 这个函数就是componentWillUmount
  // 在return函数之前的函数体具体是前两个钩子的哪一个, 还是要看第二个参数, 第二个参数是一个数组
  // 里面存放的是监视的state, 不传值就不会监视, 就只会像componentDidMount一样只执行一次
  // 如果直接不传第二个参数, 就全部监视, 就是update钩子, 任意一个state改变都会引起执行函数体
  // 或者传递某个状态值, 也是起到了update钩子的作用, 但是只是监视的state变化才会执行函数体
  React.useEffect(() => {
    console.log('执行')
    return () => {
      console.log('要被卸载了')
    }
  }, [])

  // useRef可以实现createRef()的功能, 返回一个容器, 在dom中可以使用
  // 像正常类组件一样, dom使用该容器后, 元素对象会存在容器的current中
  const inputRef = React.useRef()
  function add () {
    setState({ count: state.count + 1 })
  }
  function unmount () {
    // 卸载组件, 可以直接调用ReactDOM的方法
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  function show () {
    console.log(inputRef.current.value)
  }
  return (
    <div>
      {/* 函数组件中没有this, 直接声明变量存值后使用变量即可 */}
      <input type="text" ref={inputRef} />
      <h2>当前求和为：{state.count}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点我提示数据</button>
    </div>
  )
}
export default Deom
