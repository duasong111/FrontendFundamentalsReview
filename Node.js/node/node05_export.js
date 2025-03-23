
//该文件可自定义函数或别的数据类型，供外界导出使用

// const baseURL = "http://localhost:8080/index.html"

// //实现递增的函数
// const getArraySum = arr => arr.reduce((sum,item) => sum += item,0)

// //实现别的函数
//  const getNumDouble = num => num * 2;


 //第一种 向外部进行暴露
//  module.exports = {
//     url:baseURL,
//     arrSum:getArraySum,
//     doubleValue:getNumDouble
//  }

// 第二种 使用ESCMAscript下的标准
//即我们的Vue常见的标准
// export default {
//     url:baseURL,
//     arrSum:getArraySum,
//     doubleValue:getNumDouble
// }

//第三种:命名导出--直接实现外部导出

export const baseURL = "http://localhost:8080/index.html"
export const getArraySum = arr => arr.reduce((sum,item) => sum += item,0)

//实现别的函数
export const getNumDouble = num => num * 2;
