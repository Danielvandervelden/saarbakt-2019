const _MiniCssExtractPlugin = require('mini-css-extract-plugin');


const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
	filename: 'styles/[name].css',
	chunkFilename: '[id].css'
});

module.exports = {
	MiniCssExtractPlugin: MiniCssExtractPlugin
};