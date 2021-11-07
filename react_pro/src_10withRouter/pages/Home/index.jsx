import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import MyLink from '../../MyLink'
import Message from './Message'
import News from './News'

export default class Home extends Component {
	render () {
		return (
			<div>
				<h3>我是Home的内容</h3>
				<div>
					<ul className="nav nav-tabs">
						<li>
							<MyLink to="/home/news">news</MyLink>
						</li>
						<li>
							<MyLink to="/home/message">message</MyLink>
						</li>
					</ul>
					<Route path="/home/message" component={Message} />
					<Route path="/home/news" component={News} />
					<Redirect to="/home/message" />
				</div>
			</div>
		)
	}
}
