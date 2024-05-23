//处理当前文件目录
const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/dist/plugin');

module.exports={
    //入口文件配置项
    entry:{
        main:''
    },
    //出口文件配置项
    output:{
        path:path.resolve(__dirname),
        filename:''
    },
    //模块：解读css，图片如何转换，压缩
    module:{
        rules: [
            { 
                test: /\.css$/,
                use: ['style-loader','css-loader'] 
                }
          ],
    },
    //插件，用于生产模板和各项功能
 
    plugins:[
        new uglify(),
        new VueLoaderPlugin()
    ],

    //配置webpack开发服务功能
    devServer:{
        contentBase: path.join(__dirname,''),//项目目录
        compress:true,//gzip压缩
        port:9000,//服务端口
        host:'0.0.0.0',//ip地址
        hot:true,//热更新，需要webpack.HotModuleReplacementPlugin插件
        https:true,//开启https
        open:true,//启动后自动打开浏览器
        Proxy:{
            '/api':{//'/api'开始请求会被代理
                target : 'http://localhost:3000',//代理地址
                pathRewrite:{'^/api':''}//替换接口种'/api'字符串
            }
        }
    }
}