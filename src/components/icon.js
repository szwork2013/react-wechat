'use strict'

import React from 'react';

export default class Icon extends React.Component {
	render() {
		return (
			<i className="icon">
				<i className={this.props.iconSrc}></i>
			</i>
		);
	}
}