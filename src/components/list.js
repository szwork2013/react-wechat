'use strict'

import React from 'react';

import Search from './search';
import ListItem from './list-item';

export default class List extends React.Component {
	render() {
		return (
			<div className="list">
				<Search></Search>
				<ul>
					<ListItem avatarSrc="./img/avatar-1.png" name="JustClear" time="16:39" preRead="React WeChat" icon="state"></ListItem>
					<ListItem avatarSrc="./img/avatar-3.png" name="React" time="17:22" preRead="A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES" icon="state"></ListItem>
					<ListItem avatarSrc="./img/avatar-4.png" name="Webpack" time="17:22" preRead="Webpack Module Bundler" icon="state"></ListItem>
					<ListItem avatarSrc="./img/avatar-5.png" name="Github" time="17:22" preRead="Hello World!" icon="state"></ListItem>
				</ul>
			</div>
		);
	}
}