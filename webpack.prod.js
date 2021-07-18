const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'production',
    entry: './src/index.js',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'styel-loader',
                    'css-loader',
                    "postcss-loader",
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hrm: 'development'
                        }
                    }
                ],
            }
        ]
    },
})