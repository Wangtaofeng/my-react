import React, { PureComponent } from 'react'

// 使用纯组件PureComponent, 会自动帮我们判断上述的变化是否需要执行render
// 注意这里之所以叫做纯组件, 和纯函数类似, 不得修改原参数(原状态), 否则监听不到修改
// 如果是一个数组, 直接修改数组里面的值, 或者修改对象的某个属性, 是不会被监听到的
// 可参照下面采用重新赋值的方法
export default class index extends PureComponent {
  state = {
    num: '111',
    age: 18,
    arr: [1, 2, 3],
    obj: {
      num: '23',
      age: 18
    }
  }
  change = () => {
    // --错误写法, 得到arr的引用值, 实际操作的还是arr, setState时, 还是那个地址并未变化
    // let arr = this.state.arr
    // arr.push(4)
    // this.setState({ arr: arr })

    // 正确写法是设置一个新的数组
    let arr = this.state.arr
    this.setState({ arr: [...arr, 4] })

    // --对象也不能直接修改
    // let obj = this.state.obj
    // obj.name = '11'
    // this.setState({ obj })

    // 正确写法, 拷贝一个新的对象
    let obj = this.state.obj
    obj.name = '11'
    this.setState({ obj: { ...obj } })
  }
  render () {
    console.log("父组件render")
    return (
      <div>
        <h3>{this.state.car}</h3>
        <button onClick={this.change}>改变</button>
        <C age={this.state.age} />
      </div>
    )
  }
}
class C extends PureComponent {
  render () {
    console.log('子组件render')
    return (
      <h2>我是子组件</h2>
    )
  }
}
