//实现node.js的后端接口功能

const http = require('http');

const serve = http.createServer();

serve.on('request',(req,res)=>{
    res.setHeader('Content-Type','text/plain;charset=utf-8');

    res.end("Web服务已响应！！！");
})

//配置端口号，启动web服务

serve.listen(8000,()=>{
    console.log("Web服务程序已经启动");
})