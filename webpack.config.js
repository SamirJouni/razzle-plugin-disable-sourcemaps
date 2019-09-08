const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.js',
		libraryTarget: 'commonjs2'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components|build)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	target:'node'
};
