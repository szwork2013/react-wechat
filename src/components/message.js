'use strict'

import React from 'react';

export default class Message extends React.Component {
	render() {
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