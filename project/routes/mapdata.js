const express = require('express');
const router = express.Router();

// 映射
const nameMap = new Map();
nameMap.set('北京 (北京万柳中路站)', '北京市');
nameMap.set('天津 (南开复康路站)', '天津市');
nameMap.set('河北 (石家庄槐岭路站)', '河北省');
nameMap.set('山西 (太原长治路站)', '山西省');
nameMap.set('内蒙 (内蒙古环境监测中心站)', '内蒙古自治区');
nameMap.set('辽宁 (沈阳市东陵站)', '辽宁省');
nameMap.set('吉林 (长春青年路站)', '吉林省');
nameMap.set('黑龙江 (哈尔滨南直路站)', '黑龙江省');
nameMap.set('上海 (普陀沪太路站)', '上海市');
nameMap.set('江苏 (南京新城科技园站)', '江苏省');
nameMap.set('浙江 (杭州三义村站)', '浙江省');
nameMap.set('安徽 (合肥怀宁路站)', '安徽省');
nameMap.set('福建 (福州市福飞北路站)', '福建省');
nameMap.set('江西 (南昌洪都北大道站)', '江西省');
nameMap.set('山东 (济南经十路站)', '山东省');
nameMap.set('河南 (郑州大王庄站)', '河南省');
nameMap.set('湖北 (武汉市公正路站)', '湖北省');
nameMap.set('湖南 (长沙万家丽中路站)', '湖南省');
nameMap.set('广东 (广州大道站)', '广东省');
nameMap.set('广西 (广西辐射站)', '广西省');
nameMap.set('海南 (海口红旗镇站)', '海南省');
nameMap.set('重庆 (大礼堂站)', '重庆市');
nameMap.set('四川 (成都熊猫基地站)', '四川省');
nameMap.set('贵州 (贵阳青云路站)', '贵州省');
nameMap.set('云南 (昆明环城西路站)', '云南省');
nameMap.set('西藏 (拉萨东嘎镇站)', '西藏自治区');
nameMap.set('陕西 (西安北郊污水处理厂站)', '陕西省');
nameMap.set('甘肃 (兰州市东岗站)', '甘肃省');
nameMap.set('青海 (西宁纳家山站)', '青海省');
nameMap.set('宁夏 (银川市环保局西夏分局站)', '宁夏回族自治区');
nameMap.set('新疆 (乌鲁木齐北京中路站)', '新疆维吾尔自治区');

const mapData = GetMapData()

// 接受前端axios请求的参数

router.get('/', function (req, res, next) {
    const { year, month, day } = req.query;
    //console.log(year, month, day);
    // 格式化字符串
    const date = `../crawlers/data${month}${day}.json`;
    const json = require(date);
    res.send(mapData);
});

function GetMapData() {
    const mapdata = []
    for (var i = 0; i < json.length; i++) {
        var item = {}
        item.name = nameMap.get(json[i].station)
        item.value = json[i].value
        mapdata.push(item)
    }
    return mapdata;
}

module.exports = router;