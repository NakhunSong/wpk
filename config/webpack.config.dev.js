const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname + '/dist'),
    },
    devServer: {
        index: 'index.html',
        contentBase: path.resolve('./build'),
        port: 5000,
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env', {
                                targets: { node: 'current' },
                                modules: 'false'
                            }
                        ],
                        '@babel/preset-react'
                    ],
                },
                exclude: ['/node_modules'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
              test: /\.scss$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
          filename: 'style.css'
        }),
        new webpack.EnvironmentPlugin(['NODE_ENV']),
    ]
}