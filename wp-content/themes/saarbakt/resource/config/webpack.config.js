const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
	entry: {
		saarbakt: path.resolve(__dirname, "../source/scripts/saarbakt.js"),
		style: path.resolve(__dirname, "../source/styles/style.scss")
	},
	module: {
		rules: [
			loaders.JSLoader,
			loaders.CSSLoader,
			loaders.URLLoader
		]
	},
	plugins: [
		plugins.MiniCssExtractPlugin
	],
	output: {
		path: path.resolve(__dirname, "../../build/"),
		filename: "scripts/[name].min.js"
	},
	resolve: {
		alias: {
			images: path.resolve(__dirname, '../../build/images/')
		}
	}
}