const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	devServer: {
		compress: true,
		port: 8000,
		open: true
	},
	performance: {
		hints: 'error',
		maxEntrypointSize: 512000,
    maxAssetSize: 512000
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
			styles: {
				name: 'styles',
				test: /\.css$/,
				chunks: 'all',
				enforce: true,
			},
			},
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, './src/index.html'),
			inject: 'body',
			minify: { collapseWhitespace: true }
		}),
	],
	module: {
		rules: [
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{
						loader: 'file-loader',
					},
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 60
							},
								optipng: {
									enabled: false,
							},
								pngquant: {
									quality: '65-90',
									speed: 4
							},
								gifsicle: {
									interlaced: false,
									optimizationLevel: 3
							},
								webp: {
									quality: 60
							}
						}
					},
				],
			},
		]
	}
});
