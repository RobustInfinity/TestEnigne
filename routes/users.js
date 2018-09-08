var express = require('express');
var router = express.Router();
var logger = require('../model/logger')
var signUp = require('../model/signup');
var login = require('../model/login')
var dbOperation = require('../config/dboperations')


router.get('/', function(request, response, next) {
  logger.debug('router /users')
  response.send('Login form');
});

router.post('/login',(request , response)=>{
  logger.debug('router /users/login')
  var {email, password} = request.body;
  login({email, password}, request, response)
  // console.log({email, password})
})

router.post('/signup',(request , response)=>{
  
  logger.debug('router /users/signup')
  var {name, email, mobile, password} = request.body;
  signUp({name, email, mobile, password}, request, response);
   
})

router.post('/forgotpassword',(request , response)=>{
  logger.debug('router /users/forgotpassowrd')
  response.send('Link for forgot Password...')
})
module.exports = router;
