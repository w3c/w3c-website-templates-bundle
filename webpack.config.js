const path = require('path');
module.exports = {
	entry: {
		'/public/dist/assets/js/s24-autocomplete': './public/apollo/assets/js/s24-autocomplete.js',
		'/public/dist/assets/js/comments': './public/apollo/assets/js/comments.js',
		'/public/dist/assets/js/main': './public/apollo/assets/js/main.js'
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