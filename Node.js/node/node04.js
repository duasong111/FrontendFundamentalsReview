//将HTMLu页面展示给Web前端页面
/*功能说明，当请求网址http://localhost:8080/index.html 会将index.html页面
渲染到服务器，可进行页面渲染功能*/
const fs = require('fs');
const path = require('path');
const http = require('http');
const serve = http.createServer();

// 设置服务请求路径
serve.on('request', (req, res) => {
    if (req.url === "/index.html") {
        // 正确拼接文件路径
        const filePath = path.join(__dirname, 'Front', 'index.html');
        fs.readFile(filePath, { encoding: 'utf8' }, (error, data) => {
            if (error) {
                console.log("读取文件失败:", error.message);
                res.setHeader('Content-Type', 'text/plain;charset=utf-8');
                res.statusCode = 500;
                res.end("服务器读取文件出错");
            } else {
                // 设置正确的 MIME 类型为 text/html
                res.setHeader('Content-Type', 'text/html;charset=utf-8');
                res.end(data); // data 已通过 utf8 编码读取，无需 toString()
            }
        });
    } else {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        res.statusCode = 404;
        res.end("该路径不存在");
    }
});

serve.listen(8080, () => {
    console.log("Web服务程序已启动！！！");
});