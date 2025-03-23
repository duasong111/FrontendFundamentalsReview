/**定义一个包，向外部进行导出使用commonjs的导出方式 */

const getArraySum = arr => arr.reduce((sum,item) => sum += item,0)

module.exports={
    getArraySum
}