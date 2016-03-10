'use strict'

import React from 'react';

import Message from './message';

export default class MainContent extends React.Component {
	render() {
		return (
			<ul className="main-content chat-msg-list">
				<Message time="9:40" avatar="./img/avatar-3.png" text="This is a WeChat user interface based on ReactJS created by @JustClear."></Message>
				<Message time="9:41" avatar="./img/avatar-3.png" text="Here is the project address: https://github.com/JustClear/react-wechat."></Message>
				<Message time="9:44" avatar="./img/avatar-1.png" self="self" text="Hey! Who are you."></Message>
				<Message time="9:45" avatar="./img/avatar-3.png" text="I'm ReactJS, a JavaScript library for building user interfaces."></Message>
				<Message time="9:53" avatar="./img/avatar-1.png" self="self" text="Cool~"></Message>
				<Message time="9:54" avatar="./img/avatar-1.png" self="self" text="Where are you."></Message>
				<Message time="9:55" avatar="./img/avatar-3.png" text="http://www.reactjs.com"></Message>
			</ul>
		);
	}
}