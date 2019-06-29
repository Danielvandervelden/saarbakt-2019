const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
	mode: "production",
	entry: path.resolve(__dirname, "../source/scripts/main.js"),
	module: {
		rules: [
			loaders.JSLoader,
			loaders.ESLintLoader,
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