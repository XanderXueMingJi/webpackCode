
// 执行webpack --mode development (development 发展 ) 将会生成dist/index.bundle.js

const path = require('path');
module.exports = {  // exports 出口
    entry: { // 入口
        index: './scripts/index.js' //入口文件，若不配置webpack4将自动查找src目录下的index.js文件
    },
    output: {
        filename: '[name].bundle.js', // 输出文件名, [name]表示入口文件js名
        path: path.join(__dirname, 'dist'), //__dirname目录名  输出文件路径
    }
}