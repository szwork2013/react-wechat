'use strict'

import React from 'react';

export default class MainHeader extends React.Component {
	render() {
		return (
			<div className="main-header">
				<span className="name">{this.props.name}</span>
				<span className="close">×</span>
				<span className="maximize">□</span>
				<span className="minimize">-</span>
				<div className="overlay"></div>
			</div>
		);
	}
}