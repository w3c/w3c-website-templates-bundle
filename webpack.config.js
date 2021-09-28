const path = require('path');
module.exports = {
	entry: {
		'/public/dist/assets/js/libraries-extensions/s24-autocomplete': './assets-src/js/libraries-extensions/s24-autocomplete.js',
		'/public/dist/assets/js/comments': './assets-src/js/comments.js',
		'/public/dist/assets/js/main': './assets-src/js/main.js'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js']
	},
	mode: 'none',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, '.')
	},
	optimization: {
		minimize: false
	}
};