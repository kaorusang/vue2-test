const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

console.log("====================================");
console.log("process.env:",process.env.NODE_ENV);
console.log("====================================");

process.env.NODE_ENV = process.env.NODE_ENV||"production";
const isDev = process.env.NODE_ENV == "development"?true:false;
const mode = isDev?"development":"production";
function resolve (dir) {
    return path.join(__dirname,dir)
}
module.exports={
    mode,
    //mode:"production",
    entry:"./src/main.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "main.bundle.js"
    },
    resolve:{
        extensions: ['.js', '.vue', '.json',".css"],
         alias: {
           'vue$': 'vue/dist/vue.esm.js',
           '@': resolve('src'),
         }
    },
    devServer:{
        overlay: { 
            errors: true, //页面提示错误信息
            warnings: true
        },
        //host: 'localhost',
        host:'10.32.65.143',
        port:9000,
        open:true,
        hot: true,
        // proxy: {
        //     '/api': 'http://189.23.333.3:999'
        // }
    },
    plugins:[
        //new UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
              //NODE_ENV: JSON.stringify(process.env.NODE_ENV)
              NODE_ENV: JSON.stringify(mode)
            }
        }),
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            { test: /\.vue$/, loader: 'vue-loader' }, // npm i -D vue-loader
            { test: /\.css$/, use: ['style-loader','css-loader'] }, // npm i -D style-loader css-loader
            { test: /\.less$/, use: ['vue-style-loader','css-loader','less-loader']}, // npm i -D less-loader less vue-style-loader
            { test: /\.scss$/, use: ['vue-style-loader','css-loader','sass-loader']}, // npm i -D sass-loader node-sass
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, // 排除
                use: {loader: "babel-loader"}
                
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader', // npm i -D url-loader
                    options: {
                      limit: 8192
                    }
                  }
                ]
            },
        ]
    }

}