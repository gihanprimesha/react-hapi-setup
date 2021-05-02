'use strict';
const webpack = require('webpack'),
    path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BUILD_DIR = path.resolve(__dirname, 'public/dist/');
const APP_DIR = path.resolve(__dirname, 'public/');

module.exports = {
    mode: 'development',
    entry: {
        app: [APP_DIR + '/index.jsx'],
    },

    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'symphony.styles.css' }),
        new HtmlWebpackPlugin({
            hash: true,
            filename: './index.html',
            template: APP_DIR + '/index.html',
        }),
    ],
    devServer: {
        contentBase: BUILD_DIR,
        compress: true,
        port: 8000,
    },
};
