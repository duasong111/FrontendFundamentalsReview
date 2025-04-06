const { clear } = require('console');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname,'src/login/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出目录，使用绝对路径
    filename: './login/index.js', // 输出文件名，仅文件名，不含路径
    clean : true
  },
};