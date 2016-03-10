'use strict'

var path = require('path');

module.exports = {
	entry: [
		"./src/entry.js"
	],
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: './dist/',
		filename: 'react-wechat.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	// don't bundle the 'react' npm package with our bundle.js
	// but get it from a global 'React' variable
	// and you must load react.js in index.html
	externals: {
		'react': 'React'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}