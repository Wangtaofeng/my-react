import React, { Component } from 'react'
// 想要限制props需要安装prop-types库
import PropType from 'prop-types'
// 用于生成唯一id, 解构赋值接收暴露出的nanoid方法, 直接调用即可
import { nanoid } from 'nanoid'

export default class index extends Component {
  // 注意这个静态属性是prosTypes, 不要写错了
  static propTypes = {
    addTodo: PropType.func,
  }
  handleAdd = (e) => {
    const { target, keyCode } = e
    if (keyCode !== 13) return
    let todo = {
      id: nanoid(),
      name: target.value,
      done: false,
    }
    this.props.addTodo(todo)
    target.value = ''
  }
  render() {
    return (
      <div className='todo-header'>
        <input
          type='text'
          onKeyUp={this.handleAdd}
          placeholder='请输入你的任务名称，按回车键确认'
        />
      </div>
    )
  }
}
