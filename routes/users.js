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
  var {email, password} = request.body;
  console.log({email, password})
  response.send('Enter email and password...')
})

router.post('/signup',(request , response)=>{
  logger.debug('router /users/signup')
  var {name, email, mobile, password} = request.body;
  
  
 

  response.send({email, name, password, mobile})
})

router.post('/forgotpassword',(request , response)=>{
  logger.debug('router /users/forgotpassowrd')
  response.send('Link for forgot Password...')
})
module.exports = router;
