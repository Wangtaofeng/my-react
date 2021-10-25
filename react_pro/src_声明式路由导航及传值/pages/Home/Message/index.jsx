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
	render () {
		const { message } = this.state
		return (
			<div>
				<ul>
					<li>
						<MyLink to={`/home/message/?id=${message[0].id}&tittle=${message[0].tittle}`}>message001</MyLink>
					</li>
					{/* <li>
						<MyLink to={`/home/message/${message[1].id}/${message[1].tittle}`}>message002</MyLink>&nbsp;&nbsp;
					</li>
					<li>
						<MyLink to={`/home/message/${message[2].id}/${message[2].tittle}`}>message003</MyLink>&nbsp;&nbsp;
					</li> */}
				</ul>
				{/* 上面既然传值了, 这里就匹配路由的时候就需要接收 */}
				<Route path="/home/message" component={Detil} />


			</div>
		)
	}
}
