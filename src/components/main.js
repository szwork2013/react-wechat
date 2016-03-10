'use strict'

import React from 'react';

import MainHeader from './main-header';
import MainContent from './main-content';
import MainFooter from './main-footer';

export default class Main extends React.Component {
	render() {
		return (
			<div className="main">
				<MainHeader name="大板栗"></MainHeader>
				<MainContent></MainContent>
				<MainFooter></MainFooter>
			</div>
		);
	}
}