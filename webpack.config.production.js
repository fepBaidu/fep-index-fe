var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    cdnArr = [1, 2, 3],
    cdn = 'http://web' + cdnArr[ Math.floor( Math.random() * cdnArr.length ) ] + '.waimai.bdimg.com';;
module.exports = {
    entry: [
        './scripts/index/main.js'
    ],
    output: {
        path: path.join(__dirname, 'build/index'),
        filename: 'index.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        /*new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),*/
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'views/index.ejs'),
            filename : "index.ejs",
            inject: true,
            hash: true
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'scripts'),
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=images/[name]_[md5:hash:8].[ext]' // 限定 <=8k 的图片, 其他的用 URL
            }
        ]
    }
};
