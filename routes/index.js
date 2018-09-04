var express = require('express');
var router = express.Router();
var logger = require('../model/logger')

/* GET home page. */
router.get('/', function(req, res, next) {
  logger.debug('router /')
  res.send('Home Page');
});

module.exports = router;
