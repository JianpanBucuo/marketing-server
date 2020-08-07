const { resolve } = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base')
const clientConfig = {
    entry: resolve(__dirname, './src/client/client.render.js'),
    output: {
        filename: 'index.js',
        path: resolve(__dirname, 'client-dist')
    },
    module: {
        rules: [
            {
                test: /\.css?$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        // modules: {
                        //     localIdentName: '[name]__[local]--[hash:base64:5]'
                        // },
                        modules: true
                    }
                }]
            }
        ]
    }

}

module.exports = merge(config, clientConfig)