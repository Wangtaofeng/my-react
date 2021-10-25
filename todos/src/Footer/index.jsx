import React, { Component } from 'react'

export default class index extends Component {
  // 设置是否全选
  handleAllDone = (e) => {
    this.props.isAllDone(e.target.checked)
  }
  handleDeleteCheck = () => {
    this.props.deleteCheck()
  }

  render() {
    const { todos } = this.props
    // get是否全选
    const allDnoe = todos.reduce((proValsue, value) => {
      return proValsue + (value.done ? 1 : 0)
    }, 0)
    return (
      <div className='todo-footer'>
        <label>
          {/* <input type="checkbox" defaultChecked={allDnoe === todos.length ? true : false} /> */}
          {/* defaultChecked只能默认显示一次, 后面更改不会受影响了
          因此需要用checked, 但是使用这个需要定义onchange方法, 不然checked设置了就等于定死了, 只会根据规则得到值, 自己本身不能被修改 */}
          <input
            type='checkbox'
            checked={
              allDnoe === todos.length && todos.length !== 0 ? true : false
            }
            onChange={this.handleAllDone}
          />
        </label>
        <span>
          <span>已完成{allDnoe}</span> / 全部{todos.length}
        </span>
        <button onClick={this.handleDeleteCheck} className='btn btn-danger'>
          清除已完成任务
        </button>
      </div>
    )
  }
}
