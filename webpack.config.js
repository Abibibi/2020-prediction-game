module.exports = {
    // 1
    entry: './src/index.js',
    // 2
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    // 3
    devServer: {
      contentBase: './dist'
    },
    // to make sure svg files can be handled
    module: {
        rules: [
            {
                test: /\.(svg)$/,
                exclude: /fonts/, /* dont want svg fonts from fonts folder to be included */
                use: [
                    {
                    loader: 'svg-url-loader',
                    options: {
                        noquotes: true,
                    },
                    },
                ],
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    }
};