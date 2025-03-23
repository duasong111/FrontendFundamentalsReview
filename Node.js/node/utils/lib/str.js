/**同样向外部进行导出 */

const checkName = username =>{
    return username.lenth > 8;
}

const checkPassword = password =>{
    return password.lenth >= 6;
}

module.exports={
    checkUser:checkName,
    checkPwd:checkPassword
}