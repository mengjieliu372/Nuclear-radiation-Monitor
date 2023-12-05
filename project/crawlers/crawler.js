//导入模块
const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

//目标网址
const url = 'https://data.rmtc.org.cn/gis/listtype0M.html'

//数据
const data = []

//发送请求
request(url, function (err, response, body) {
    if(!err && response.statusCode == 200) {
        //传入body，得到一个类似于jQuery的对象
        const $ = cheerio.load(body)
        
        const stations = $('li.datali')

        stations.each(function (index, item) {
            const obj = {
                station: $(item).find('a[data-ajax="false"]').text().trim(),
                value: $(item).find('span.label').text(),
                time: $(item).find('span.showtime').text()
            }
            data.push(obj)
        })

        fs.writeFile('./data1128.json', JSON.stringify(data), () => console.log('写入完成'))
    }
    else {
        console.error(err)
    }
});
