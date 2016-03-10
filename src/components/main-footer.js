'use strict'

import React from 'react';

import MsgInput from './message-input';

export default class MainFooter extends React.Component {
	render() {
		return (
			<div className="main-footer">
				<MsgInput></MsgInput>
			</div>
		);
	}
}