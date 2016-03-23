var webpack = require("webpack");
var BowerWebpackPlugin = require('bower-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');


module.exports = {
    entry:   "./index.js",
    output:  {
        path:     __dirname,
        filename: "bundle.js"
    },
    module:  {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=[name].[ext]"}
        ]
    },
    plugins: [
        new BowerWebpackPlugin({
            excludes: /.*\.less/
        }),
        new webpack.ProvidePlugin({
            $:      "jquery",
            jQuery: "jquery"
        }),
        new LiveReloadPlugin({
            port:8081

        })

    ]
};
