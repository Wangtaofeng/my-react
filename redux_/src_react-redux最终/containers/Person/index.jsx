import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'
import { nanoid } from 'nanoid'

class Person extends Component {
  addP = () => {
    const { nameInpt, ageInpt } = this
    const id = nanoid()
    this.props.add({ id, name: nameInpt.value, age: ageInpt.value })
  }
  render () {
    const { person, count } = this.props
    console.log(person)
    return (
      <div>
        {
          person.map(item => {
            return (
              <div key={item.id}>
                <h3>{item.name}</h3>
                <h3>{item.age}</h3>
                <input type="text" ref={c => this.nameInpt = c} />
                <input type="text" ref={c => this.ageInpt = c} />
                <button onClick={this.addP}>添加</button>
              </div>
            )
          })
        }

        <h2>COUNT: {count}</h2>
      </div>
    )
  }
}
// 多个reducer通过combine连接成的对象, 都在state中存着, 连接时的key就是这里取值是state的key
const mapStateToProps = state => ({ person: state.person, count: state.count })
const mapDispatchToProps = {
  add: addPerson
}
export default connect(mapStateToProps, mapDispatchToProps)(Person)