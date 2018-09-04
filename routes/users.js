var express = require('express');
var router = express.Router();
var logger = require('../model/logger')

/* GET users listing. */
router.get('/', function(request, response, next) {
  logger.debug('router /users')
  response.send('Login form');
});

router.post('/login',(request , response)=>{
  logger.debug('router /users/login')
  response.send('Enter email and password...')
})

router.post('/signup',(request , response)=>{
  logger.debug('router /users/signup')
  response.send('Enter details...')
})

router.post('/forgotpassword',(request , response)=>{
  logger.debug('router /users/forgotpassowrd')
  response.send('Link for forgot Password...')
})
module.exports = router;
