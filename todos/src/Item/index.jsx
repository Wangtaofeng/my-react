import React, { Component } from 'react'
import PropsType from 'prop-types'

export default class index extends Component {
  state = {
    mouse: false
  }
  // 对属性进行限制
  static propsType = {
    deleteTodo: PropsType.func
  }
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }
  handleDelete = (id) => {
    return () => {
      this.props.deleteTodo(id)
    }
  }
  handleChange = (id) => {
    // 这里不能直接改动todo, props接收到的是只读的, 修改并不会影响到state里面的值
    // return (e) => {
    //   this.props.done = e.target.checked
    // }

    // 需要提交给state那里, 在那里提交修改, 结果是在chacked存着, 是否选中, 把id传过去用于对比知道传的是哪一个todo被修改
    return (e) => {
      this.props.changeTodo(id, e.target.checked)
    }
  }

  render () {
    const { todo } = this.props
    return (
      <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{ background: this.state.mouse ? '#ddd' : 'white' }}>
        <label>
          {/* 这里不能再用defalutchecked了, 因为后面的全选与否不会对这里造成影响, 它只会根据todo的状态执行一次, 后续状态改了这里不会修改 */}
          {/* <input type="checkbox" checked={todo.done} onChange={this.handleChange(todo.id)} /> */}
          <input type="checkbox" checked={todo.done} onChange={this.handleChange(todo.id)} />
          <span>{todo.name}</span>
        </label>
        <button onClick={this.handleDelete(todo.id)} className="btn btn-danger" style={{ display: this.state.mouse ? 'inline-block' : 'none' }}>删除</button>
      </li>
    )
  }
}
