/* eslint-env node */
var path = require("path");
var webpack = require("webpack");
//var FlowCheck = require('webpack-plugin-flow');
//see: https://github.com/researchgate/webpack-plugin-flow

module.exports = {
    resolve: {
        alias: {
            "ondomready$": path.join(__dirname,"./bower_components/ondomready/ondomready.js")//,
            //"socket.io-client$": path.join(__dirname,"./bower_components/socket.io-client/socket.io.js")
        },

        // root: [
        //     path.join(__dirname, "bower_components"),
        // ]
    },

    devtool:"source-map",
    output: {
        filename:'main.js'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
    ],
    externals: {
        "cocos2d":"{ cc: cc }"
    },
    module: {
        // plugins: [
        //     new webpack.ResolverPlugin(
        //         new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        //     )
        // ],
        //
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                "cacheDirectory": "cache",
            }
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'flowcheck'
        }, {
            test: /\.json$/,
            loader: 'json'
        }],
    }
};
