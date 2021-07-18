const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    plugins: [
        new HTMLWebpackPlugin({}),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
}