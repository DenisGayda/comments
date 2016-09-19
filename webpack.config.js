var path = require('path');


module.exports = {
	entry: './app/components/CommentBox.js',
	output: {
		path: path.resolve('./public/'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};