
//index是接口文件,可以先将内部的导入，然后进行同意到处

//采用解构的方式去进行赋值
const { getArraySum } = require('./lib/arr.js')

const {checkUser,checkPwd} = require('./lib/str.js')

//然后再进行统一的进行暴露

module.exports ={
    getArraySum,
    checkUser,
    checkPwd
}