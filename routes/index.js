const express = require('express');
const router = express.Router();
const fs = require('fs');

const data = require('../database');
const images = require('../file_reader');

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Tesseract data viewer', data: data.data, images: images.images });
});

module.exports = router;
