const express = require('express');
const router = express.Router();
const {users} = require('../controller/controllerUsers')

/* GET users listing. */
router.get('/', users);

module.exports = router;
