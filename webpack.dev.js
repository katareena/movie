const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		compress: true,
		port: 9000,
		open: true,
		hot: true
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, './src/index.html'),			
			inject: 'body',
		}),
	],
	module: {
		rules: [
			
		]
	}
});
