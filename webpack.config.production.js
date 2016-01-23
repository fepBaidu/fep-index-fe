var path = require('path'),
    cdnArr = [1, 2, 3],
    cdn = 'http://web' + cdnArr[ Math.floor( Math.random() * cdnArr.length ) ] + '.waimai.bdimg.com';;

var webpackData = require("./webpack.data.js");

module.exports = {
    entry: webpackData.prod.entries,
    output: {
        path: path.join(__dirname, 'build'),
        filename:  '[name].build.js',
        publicPath: cdn + 'scripts/[name]/',
        hash: true
    },
    plugins: webpackData.prod.plugins,
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
