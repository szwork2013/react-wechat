'use strict'

import React from 'react';

export default class MsgInput extends React.Component {
	handleSubmit(event) {
		event.preventDefault();
	}
	render() {
		return (
			<form className="message-input" onSubmit={this.handleSubmit}>
				<textarea name="message"></textarea>
				<button type="submit" className="btn btn-success">发送(S)</button>
			</form>
		);
	}
}