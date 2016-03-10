'use strict'

import React from 'react';

export default class MsgInput extends React.Component {
	render() {
		return (
			<form action="" method="post" className="message-input">
				<textarea name="message"></textarea>
				<button type="submit" className="btn btn-success">发送(S)</button>
			</form>
		);
	}
}