'use strict'

import React from 'react';

import Search from './search';
import ListItem from './list-item';

export default class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					avatarSrc: './img/avatar-1.png',
					name: 'JustClear',
					time: '16:39',
					icon: 'state',
					preRead: 'React WeChat'
				},
				{
					avatarSrc: './img/avatar-3.png',
					name: 'React',
					time: '17:24',
					icon: 'state',
					preRead: 'A JsvaScript Library for Building User Interfaces'
				},
				{
					avatarSrc: './img/avatar-4.png',
					name: 'Webpack',
					time: '17:30',
					icon: 'state',
					preRead: 'Webpack Module Bundler'
				},
				{
					avatarSrc: './img/avatar-5.png',
					name: 'Github',
					time: '17:43',
					icon: 'state',
					preRead: 'Hello World!'
				},
			]
		};
	}
	render() {
		let itemNodes = this.state.data.map(function(session) {
			return (
				<ListItem
					avatarSrc={session.avatarSrc}
					name={session.name}
					time={session.time}
					icon={session.icon}
					preRead={session.preRead}
				/>
			);
		});
		return (
			<div className="list">
				<Search></Search>
				<ul>
					{itemNodes}
				</ul>
			</div>
		);
	}
}