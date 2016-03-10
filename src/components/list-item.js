'use strict'

import React from 'react';

export default class ListItem extends React.Component {
	render() {
		return (
			<li className="list-item">
				<div className="avatar">
					<img src={this.props.avatarSrc} alt=""/>
					<span className="unread"></span>
				</div>
				<div className="info">
					<span className="name">{this.props.name}</span>
					<span className="time">{this.props.time}</span>
					<p className="pre-read">{this.props.preRead}</p>
					<span className="icon ">+</span>
				</div>
			</li>
		);
	}
}