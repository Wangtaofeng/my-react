import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MyLink from '../../../MyLink'
import Detil from '../Detil'

export default class Message extends Component {
	state = {
		message: [
			{ id: 1, tittle: '我是1消息' },
			{ id: 2, tittle: '我是2消息' },
			{ id: 3, tittle: '我是3消息' }
		]
	}
	toThree = (id, tittle) => {
		// 传递search参数
		// this.props.history.push(`/home/message/?id=${id}$tittle=${tittle}`)
		// 传递params参数, 需要声明接收
		// this.props.history.push(`/home/message/${id}/${tittle}`)
		// 传递state参数, 第二个参数就是用来传递state的
		// this.props.history.push('/home/message', { id, tittle })
	}
	render () {
		const { message } = this.state
		return (
			<div>
				<ul>
					<li>
						<MyLink to={`/home/message/?id=${message[0].id}&tittle=${message[0].tittle}`}>message001</MyLink>
						<button onClick={() => { this.toThree(message[2].id, message[2].tittle) }}>消息3</button>
					</li>
				</ul>
				<Route path="/home/message" component={Detil} />


			</div>
		)
	}
}
