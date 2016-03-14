'use strict'

import React from 'react';

import classNames from 'classnames';

export default class Message extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isSelf: true
		};
	}
	render() {
		const className = classNames({
			'self': this.state.isSelf
		});
		return (
			<li className={this.props.self}>
				<p className="time"><span>{this.props.time}</span></p>
				<div className="message">
					<img className="avatar" src={this.props.avatar} />
					<p>{this.props.text}</p>
				</div>
			</li>
		);
	}
}