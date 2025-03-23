//这边实现的功能是导入功能 并进行使用

// const obj = require('./node05_export')
// console.log(obj);
// const result = obj.arrSum([23,45,67,32])
// console.log("最终的结果:",result);
// const doubleValue = obj.doubleValue(100);
// console.log("最终的结果是:",doubleValue);

//使用新的版本去进行自定义导出功能
//需要注意的是去在package.json文件中去进行配置一下


//第二种引用

// import obj from './node05_export.js'
// console.log(obj);
// const result = obj.arrSum([23,45,67,32])
// console.log("最终的结果:",result);

// 第三种：直接导出函数名称的那种
//***注意，一定添加文件后缀名.js */
// import { baseURL,getArraySum,getNumDouble } from "./node05_export.js";

// console.log(baseURL);
// const result = getArraySum([23,45,67,32])
// console.log("最终的结果:",result);


//第四种： 采用自定义封装成包的形式去进行导入

const obj = require('./utils')
console.log("导入的内容是:",obj);
console.log("测试输出:",obj.getArraySum([1,2,3,4,5]));


