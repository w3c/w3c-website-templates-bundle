const path = require('path');
module.exports = {
	entry: {
		'/public/dist/assets/js/libraries-extensions/s24-autocomplete': './assets-src/js/libraries-extensions/s24-autocomplete.js',
		'/public/dist/assets/js/comments': './assets-src/js/comments.js',
		'/public/dist/assets/js/main': './assets-src/js/main.js',
		'/public/dist/assets/js/country-autocomplete': './assets-src/js/country-autocomplete.js',
		'/public/dist/assets/js/slider': './assets-src/js/slider.js',
		'/public/dist/assets/js/members': './assets-src/js/members.js',
		'/public/dist/assets/js/working-group-autocomplete': './assets-src/js/working-group-autocomplete.js'
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