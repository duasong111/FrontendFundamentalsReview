const http = require("http");

const fs = require("fs");

const path = require("path");

const mime = require("mime");

const cache = {};

//提供静态的报错文件
function send404(response) {
  response.writeHeader(404, { "Content-Type": "text/plain;charset=utf-8" });
  response.write("Error 404 : resource not found");
  response.end();
}

//提供返回成功的函数
function sendFile(response, filePath, fileContents) {
  response.writeHeader(200, {
    "Content-Type": mime.lookup(path.basename(filePath)),
  });
  response.end(fileContents);
}
function serveStatic(response, cache, absPath) {
  if (cache[absPath]) {
    sendFile(response, absPath, cachel[absPath]);
  } else {
    fs.exists(absPath, function (exists) {
      if (exists) {
        fs.readFile(absPath, function (err, data) {
          if (err) {
            send404();
          } else {
            cachel[absPath] = data;
            sendFile(response, absPath, data);
          }
        });
      } else {
        send404(response);
      }
    });
  }
}
