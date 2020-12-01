const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")
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
            app.use('/mini', express.static(path.resolve('src/mini')))
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV || 'development')
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "template.css",
            chunkFilename: "[id].css"
        })
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
