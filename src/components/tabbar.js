'use strict'

import React from 'react';

import Icon from './icon';

export default class Tabbar extends React.Component {
	render() {
		return (
			<ul className="tabbar">
				<li>
					<i className="icon">
						<img src={this.props.currentUserAvatarSrc} alt={this.props.currentUserName}/>
					</i>
				</li>
				<li><Icon iconSrc="icon-chat"></Icon></li>
				<li><Icon iconSrc="icon-profile-male"></Icon></li>
				<li><Icon iconSrc="icon-ribbon"></Icon></li>
				<li><Icon iconSrc="icon-gears"></Icon></li>
			</ul>
		);
	}
}