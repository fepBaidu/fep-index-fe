var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var chunks = require("./webpack.trunk.js");

var webpackData = {

};
webpackData['dev'] = {
    entries : {},
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

webpackData['prod'] = {
    entries : {},
    plugins : [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
}

for(var i = 0; i < chunks.length; i++) {
    for(var p in webpackData) {
        webpackData[p].entries[chunks[i]] = './scripts/' + chunks[i] + '/' + chunks[i] + '.js';
        webpackData[p].plugins.push(
            new webpack.optimize.CommonsChunkPlugin({
                name : chunks[i] + '-common',
                filename : chunks[i] + '.common.js',
                chunks : [chunks[i]]
            })
        );
        webpackData[p].plugins.push(
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'views/' + chunks[i] +'.ejs'),
                filename: chunks[i] + ".ejs",
                chunks : [chunks[i], chunks[i] + '-common'],
                inject: true,
                hash: true
            })
        );
    }
}

module.exports = webpackData;