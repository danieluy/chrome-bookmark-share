const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = env => {
	const config = {
		entry: {
			index: path.join(__dirname, 'src', 'index.js'),
		},
		output: {
			filename: '[name].js',
			path: path.join(__dirname, 'dist'),
			library: 'bookmarks-sync',
			libraryTarget: 'umd',
		},
		mode: env.development ? 'development' : 'production',
		module: {
			rules: [
				{
					test: /\.js$/,
					include: [
						path.join(__dirname, '/src/'),
					],
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
							],
							plugins: [
								'@babel/plugin-transform-runtime',
								'@babel/plugin-proposal-class-properties',
								'@babel/plugin-proposal-export-namespace-from',
								'@babel/plugin-proposal-function-sent',
								'@babel/plugin-proposal-json-strings',
								'@babel/plugin-proposal-numeric-separator',
								'@babel/plugin-proposal-throw-expressions',
								'@babel/plugin-syntax-dynamic-import',
								'@babel/plugin-syntax-import-meta',
							],
						},
					},
				},
			],
		},
	};

	if (env.development) {
		config.devtool = 'inline-source-map';
	}

	if (env.production) {
		config.optimization = {
			minimizer: [new UglifyJsPlugin({
				uglifyOptions: {
					mangle: true,
				},
			})],
		};
	}

	return config;
};
