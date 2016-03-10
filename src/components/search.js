'use strict'

import React from 'react';

export default class Search extends React.Component {
	render() {
		return (
			<form className="search">
				<div className="input-addon">
					<input type="text" placeholder="Search"/>
					<span className="icon icon-search icon-magnifying-glass"></span>
				</div>
				<button className="group-chat">+</button>
			</form>
		);
	}
}