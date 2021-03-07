const HtmlWebPackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const express = require('express')
const path = require('path')


module.exports = env => ({
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    devServer: {
        port: 9400,
        before(app) {
            app.use('/mmo', express.static(path.resolve('src/mmo')))
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.GAMEMASTER_KEY': JSON.stringify(process.env.GAMEMASTER_KEY),
            'process.env.PRODUCTION': JSON.stringify(process.env.PRODUCTION),
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
})
