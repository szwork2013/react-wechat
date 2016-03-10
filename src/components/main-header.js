'use strict'

import React from 'react';

export default class MainHeader extends React.Component {
	render() {
		return (
			<div className="main-header">
				<span className="name">{this.props.name}</span>
				<div className="state-bar">
					<span className="minimize">-</span>
					<span className="maximize">□</span>
					<span className="close">×</span>
				</div>
				<div className="overlay"></div>
			</div>
		);
	}
}