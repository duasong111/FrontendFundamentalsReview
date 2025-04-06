//采用promis进行异步输出的效果。其实能够同时进行多个

const fs = require("fs").promises;

setTimeout(() => {
  fs.readFile("test.txt", "utf8")
    .then((data1) => {
      console.log("Data from file1:", data1);
      return fs.readFile("file2.txt", "utf8");
    })

    .catch((err) => {
      console.error("Error reading files:", err);
    });
}, 5000);
