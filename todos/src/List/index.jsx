import React, { Component } from 'react'
import Item from '../Item'

export default class index extends Component {
  render () {
    const { todos, deleteTodo, changeTodo} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(todo => {
            return <Item key={todo.id} todo={todo} deleteTodo={deleteTodo} changeTodo={changeTodo}/>
          })
        }
      </ul>
    )
  }
}
