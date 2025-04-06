//导入项目的接口
import { checkCode,checkPhone } from "./utils/check.js";
console.log(checkPhone('11111222222'));
console.log(checkCode('11111222222'));


document.querySelector(".btn-login").addEventListener('click', () => {
    // 修复选择器，获取手机号和验证码
    const phone = document.querySelector('.login-form [name="username"]').value;
    const code = document.querySelector('.login-form [name="password"]').value;

    // 定义检查函数
    function checkPhone(phone) {
        return phone.length === 11 && /^\d+$/.test(phone); // 检查是否为11位数字
    }

    function checkCode(code) {
        return code.length === 6 && /^\d+$/.test(code); // 检查是否为6位数字
    }

    // 检查手机号
    if (!checkPhone(phone)) {
        console.log("手机号必须是11位数字");
        alertFn("手机号必须是11位数字", false); // 使用现有提示框函数
        return;
    }

    // 检查验证码
    if (!checkCode(code)) {
        console.log("验证码必须是6位数字");
        alertFn("验证码必须是6位数字", false); // 使用现有提示框函数
        return;
    }

    console.log("数据发送到服务器");
    
});
