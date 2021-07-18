const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: join(__dirname, "dist"),
      port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    { loader: "postcss-loader", options: { sourceMap: true } },
                    { loader: 'css-loader', options: {sourceMap: true}},
                    { loader:  'styel-loader', options: {sourceMap: true}},
                ],
            }
        ]
    },
})