'use strict'

import React from 'react';

import Message from './message';
import Data from '../virtual-data';

export default class MainContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					time: '9:40',
					avatar: './img/avatar-3.png',
					text: 'This is a WeChat user interface based on ReactJS created by @JustClear.'
				},
				{
					time: "9:44",
					avatar: './img/avatar-3.png',
					text: 'Here is the project address: https://github.com/JustClear/react-wechat.'
				},
				{
					self: 'self',
					time: '9:45',
					avatar: './img/avatar-1.png',
					text: 'Hey! Who are you.'
				},
				{
					time: "9:40",
					avatar: './img/avatar-3.png',
					text: 'I\'m ReactJS, a JavaScript library for building user interfaces.'
				},
				{
					self: 'self',
					time: '9:53',
					avatar: './img/avatar-1.png',
					text: 'Cool~'
				},
				{
					self: 'self',
					time: '9:54',
					avatar: './img/avatar-1.png',
					text: 'Where are you.'
				},
				{
					time: '9:55',
					avatar: './img/avatar-3.png',
					text: 'http://www.reactjs.com'
				},
			]
		};
	}
	// data() {
	// 	let virtualData = Data.fetch();

	// 	return {
	// 		user: virtualData.user,
	// 		userList: virtualData.userList,
	// 		sessionList: virtualData.sessionList
	// 	};
	// }
	render() {
		let sessionNodes = this.state.data.map(function(message) {
			return (
				<Message
					self = {message.self}
					time = {message.time}
					avatar = {message.avatar}
					text = {message.text}
					key = {message.id}
				/>
			);
		});
		return (
			<ul className="main-content chat-msg-list">
				{sessionNodes}
			</ul>
		);
	}
}