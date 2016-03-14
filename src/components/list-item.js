'use strict'

import React from 'react';

import classNames from 'classnames';

export default class ListItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentActive: 0,
			isActive: false,
			unRead: true
		};
	}

	itemClickHandle() {
		this.setState({
			isActive: !this.state.isActive,
			unRead: false
		});
	}

	render() {
		const className = classNames({
			'list-item': true,
			'active': this.state.isActive,
			'unread': this.state.unRead
		});
		return (
			<li className={className} onClick={this.itemClickHandle.bind(this)}>
				<div className="avatar">
					<img src={this.props.avatarSrc} alt=""/>
					<span className="bubble"></span>
				</div>
				<div className="info">
					<span className="name">{this.props.name}</span>
					<span className="time">{this.props.time}</span>
					<p className="pre-read">{this.props.preRead}</p>
					<span className="icon">+</span>
				</div>
			</li>
		);
	}
}