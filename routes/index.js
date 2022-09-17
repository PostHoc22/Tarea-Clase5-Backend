const express = require('express');
const router = express.Router();
const {index} = require('../controller/controllerIndex')

/* GET home page. */
router.get('/', index);

module.exports = router;
