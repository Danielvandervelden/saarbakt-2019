const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const JSLoader = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader'
	}
}

const CSSLoader = {
	test: /\.scss$/,
	exclude: /node_modules/,
	use: [
		{
			loader: MiniCssExtractPlugin.loader,
			options: {
				publicPath: path.resolve(__dirname, '../../build/styles/')
			}
		},
		{
			loader: 'css-loader',
			options: {
				importLoaders: 1
			},
		},
		{
			loader: 'postcss-loader',
			options: {
				config: {
					path: __dirname + '/postcss.config.js'
				}
			},
		},
		{
			loader: 'sass-loader'
		}
	],
}

const URLLoader = {
	test: /\.(png|jpg|gif|svg)$/,
	loader: 'url-loader'
}


module.exports = {
	JSLoader,
	CSSLoader,
	URLLoader
}