var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    host = 'http://sunbin.waimai.baidu.com';
module.exports = {
    host: host,
    entry: [
        'webpack-dev-server/client?' + host + ':3000',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    //devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js',
        publicPath: '',
        hash: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('common.js'),
/*        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),*/
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            inject: true,
            hash: true
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'react-hot',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
                query: {
                    presets: ['es2015', 'react']
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
