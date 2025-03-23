//写入node.js的文件

const fs = require('fs');
// fs.writeFile('./test.txt', "hello,node.js", { encoding: 'utf8' }, (error) => {
//     if (error) {
//         console.log("写入失败，错误信息:", error.message);
//     } else {
//         console.log("写入成功");
//     }
// });

//使用node.js去读取一个文件
fs.readFile('./test.txt',(err,data)=>{
    if (err) console.log(err);
    else console.log(data.toString());
})