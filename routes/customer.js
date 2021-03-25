const express = require("express");
const router = express.Router();

var customerController = require('../controllers/customerController');

router.get('/',customerController.customerDetailGet);

router.post('/login',customerController.customerLoginPost);

module.exports = router;