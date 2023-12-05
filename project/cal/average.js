// 计算各个省份平均值

const json = require('../crawlers/data1128.json')
let sum = 0
for (x in json) {
    console.log(json[x].value)
    // 拆分出数值
    let value = json[x].value.split(' ')[0]
    // 将value转换为数字
    value = Number(value)
    // 累加
    sum += value
    console.log(value)
}

// 计算平均值
const average = sum / json.length
console.log(average)
