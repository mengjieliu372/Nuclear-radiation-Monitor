const express = require('express');
const router = express.Router();
const json = require('../crawlers/data1128.json')

router.get('/', function (req, res, next) {
    res.send(json);
});

module.exports = router;