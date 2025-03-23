//实现HTML的压缩功能

const fs = require('fs');
const path = require('path');
// 读取文件
fs.readFile(path.join(__dirname, './Front/index.html'), { encoding: 'utf8' }, (err, data) => {
    if (err) {
        console.log("读取失败，错误信息:", err.message);
        return;
    }

    // 压缩：去除换行符和回车符
    const compressedStr = data.replace(/[\r\n]/g, '');

    // 写入新文件
    fs.writeFile(path.join(__dirname, '/Front/newHtml.html'), compressedStr, { encoding: 'utf8' }, (error) => {
        if (error) {
            console.log("写入失败，错误信息:", error.message);
        } else {
            console.log("写入成功");
        }
    });
});