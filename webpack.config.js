var path = require('path');
var webpackData = require("./webpack.data.js");

module.exports = {
    entry: webpackData.dev.entries,
    //devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, 'build'),
        filename:  '[name].build.js',
        publicPath: '/scripts/build/',
        hash: true
    },
    plugins: webpackData.dev.plugins,
    module: {
        loaders: [
            // {
            //     test: /\.js$/,
            //     loader: 'react-hot',
            //     include: path.join(__dirname, 'scripts')
            // },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'scripts'),
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
