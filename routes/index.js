const express = require('express');
const router = express.Router();
const data = require('../database');

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Tesseract data viewer', data: data.data });
});

module.exports = router;
