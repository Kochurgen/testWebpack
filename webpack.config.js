var path = require('path');
var webpack = require("webpack");
var BowerWebpackPlugin = require('bower-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var PROD = (process.env.NODE_ENV === 'production');

module.exports = {
    entry:   ["babel-polyfill",
        "./app/index.js",
        'file?name=index.html!jade-html!./src/index.jade',
    ],

    output:  {
        path:     __dirname,
        filename: "./index.min.js"
    },
    module:  {
        loaders: [
            {test: /\.styl/, loader: "style!css!autoprefixer?browsers=last 2 versions!stylus?resolve url"},
            {test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=[name].[ext]"},
            {
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                plugins: ["transform-runtime"],
                query: {
                    presets: ["es2015"],
                    cacheDirectory: false,
                },
                test: /\.js$/,
            },
            { test: /\.less$/, loader: "style!css!autoprefixer?browsers=last 2 versions!less?resolve url" },
        ]
    },
    stylus: {
        define: {
            'inline-image': require('stylus-inline-webpack')({
                limit: 50000
            })
        }
    },
    resolve: {
        extensions: ['', ".js", ".ls", ".css", ".styl", ".less", ".html", ".jade"]
    },
    plugins: [
        new BowerWebpackPlugin({
            excludes: /.*\.styl/
        }),
        new LiveReloadPlugin({
            port:8081

        }),
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]

};
