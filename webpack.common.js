const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
	},
	resolve: {
		modules: [path.resolve(__dirname, './src'), 'node_modules'],
		extensions: ['.tsx', '.ts', '.js', '.json'],
	},
	resolveLoader: {
		modules: [
			path.join(__dirname, './node_modules')
		]
	},
	stats: 'errors-only',
	plugins: [
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin(
			{ 
				patterns: [
					{ 
						from: path.resolve(__dirname, './src/assets/images/favicon.ico'),
						to: path.resolve(__dirname, './dist/favicon.ico') 
					},
				]
			}
		),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[name].css'
		})
	],
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node-modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-react', 
							'@babel/preset-typescript'
						]
					}
				},
			},
			{
				test: /\.scss$/,
				exclude: /node-modules/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					'css-loader',
					'sass-loader'
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/inline',
			},
			{
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack'],
      },
			{
				test: /\.(?:ico|png|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			},		
		],
	},
};
