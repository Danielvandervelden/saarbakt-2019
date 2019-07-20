const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
	entry: {
		main: path.resolve(__dirname, "../source/scripts/main.js"),
		home: path.resolve(__dirname, "../source/scripts/home.js"),
		instagram_posts: path.resolve(__dirname, "../source/scripts/instagram_posts.js"),
		sb_nav: path.resolve(__dirname, '../source/scripts/sb_nav.js'),
		sb_search: path.resolve(__dirname, '../source/scripts/sb_search.js')
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