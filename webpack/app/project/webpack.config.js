const path = require('path');
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist' ,
        before(app){
            app.get('/some/data', function(req,res) {
                console.log('---------')
                res.end("devServer.before data")
            })
        },
        hot:true,
        hotOnly: true
    },
    module: {
        rules: [
            // {
            //     test: /config.json$/,
            //     use: [{
            //         loader: path.resolve('handleconfig.js'),
            //         options: {optionDat: '----1234----'}
            //     }]
            // },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: path.resolve('loader.js'),
                        options: { x: 111 }
                    },
                    
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [ 'file-loader']
            },{

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};