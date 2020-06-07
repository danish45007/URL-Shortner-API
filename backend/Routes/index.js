const express = require('express');
const router = express.Router();
const {Getindex} = require('../Controllers/index')

// @route     GET /:code
// @desc      Redirect to long/original URL
router.get('/:code',Getindex);
module.exports = router;