'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './sidebar';
import Main from './Main';

export default class WeChat extends React.Component {
	render() {
		return (
			<div className="wechat">
				<Sidebar></Sidebar>
				<Main></Main>
			</div>
		);
	}
}

ReactDOM.render(<WeChat></WeChat>, document.getElementById("wechat"));