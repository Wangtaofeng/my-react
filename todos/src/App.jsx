import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import List from './List'

export default class App extends Component {
  state = {
    todos: [
      { id: 'sadasd', name: 'tongtong', done: true },
      { id: 'sadasdrgt', name: 'tongtong2', done: true },
      { id: 'sadasdasd', name: 'tongtong3', done: true },
    ]
  }
  addTodo = (todo) => {
    this.setState({ todos: [todo, ...this.state.todos] })
  }
  deleteTodo = (id) => {
    let todos = this.state.todos.filter(item => {
      return item.id !== id
    })
    this.setState({ todos: todos })
  }
  changeTodo = (id, done) => {
    // map函数对数组的每一个值执行回调函数, return的值作为数组新的值, 并且会返回处理过后的数组
    // 需要如果回调函数不return, 那么处理后的数组不会改变
    const newTodos = this.state.todos.map(value => {
      if (value.id === id) {
        // 对象的拓展运算符后面跟着其他属性时, 如果对象中有这个属性, 后面的值将会覆盖, 如果没有, 会添加为新的值
        // 返回的结果是一个新的对象(原对象的浅拷贝)
        return { ...value, done }
      }
      return value
    })
    this.setState({ todos: newTodos })
  }
  isAllDone = (done) => {
    let newTodos = this.state.todos.map(v => {
      return { ...v, done }
    })
    this.setState({ todos: newTodos })
  }
  deleteCheck = () => {
    let newTodo = this.state.todos.filter(v => {
      // 返回条件的, 即为false的留下
      // filter函数返回结果为ture的留下, 为false的过滤掉
      return !v.done
    })
    this.setState({ todos: newTodo })
  }



  render () {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} deleteTodo={this.deleteTodo} changeTodo={this.changeTodo} />
          <Footer todos={todos} isAllDone={this.isAllDone} deleteCheck={this.deleteCheck} />
        </div>
      </div>
    )
  }
}
