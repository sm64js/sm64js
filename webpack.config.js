const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const express = require('express')
const path = require('path')
const fs = require('fs')

let https
if (fs.existsSync('./localhost-key.pem') && fs.existsSync('./localhost.pem')) {
    https = {
      key: fs.readFileSync('./localhost-key.pem'),
      cert: fs.readFileSync('./localhost.pem'),
      ca: fs.readFileSync('./localhost.pem'),
    }
}

module.exports = env => ({
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
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
        port: 9300,
        before(app) {
            app.use('/mmo', express.static(path.resolve('src/mmo')))
        },
        http2: true,
        https
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.PRODUCTION': JSON.stringify(process.env.PRODUCTION),
            'process.env.BACKEND_URL': JSON.stringify(env !== 'development' ? env : ''),
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "stylesheet.css",
            chunkFilename: "[id].css"
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/mmo/assets", to: "./mmo/assets" },
                { from: "./src/mmo/html", to: "./mmo/html" },
                { from: "./src/credits.html", to: "./credits.html" },
                { from: "./src/favicon.ico", to: "./favicon.ico" }
            ],
        }),
    ],
    output: {
        publicPath: "/",
        filename: "[name]-[hash].js"
    },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({}),
            new OptimizeCSSAssetsWebpackPlugin({})
        ]
    },
})
