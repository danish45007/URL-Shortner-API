const express = require('express');
const router = express.Router();
const {GetUrl} = require('../Controllers/url')


// @route     POST /api/url/shorten
// @desc      Create short URL
router.post('/shorten',GetUrl);

module.exports = router;