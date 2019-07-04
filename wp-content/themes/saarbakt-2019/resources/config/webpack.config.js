const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
	mode: "production",
	entry: {
		main: path.resolve(__dirname, "../source/scripts/main.js"),
		home: path.resolve(__dirname, "../source/scripts/home.js")
	},
	module: {
		rules: [
			loaders.JSLoader,
			loaders.CSSLoader
		]
	},
	plugins: [
		plugins.MiniCssExtractPlugin
	],
	output: {
		path: path.resolve(__dirname, "../../assets"),
		filename: "scripts/[name].js"
	}
}