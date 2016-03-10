'use strict'

import React from 'react';

import Tabbar from './tabbar';
import List from './list';

export default class Sidebar extends React.Component {
	render() {
		return (
			<div className="sidebar">
				<Tabbar currentUserAvatarSrc="./img/avatar-1.png" currentUserName="大板栗"></Tabbar>
				<List></List>
			</div>
		);
	}
}