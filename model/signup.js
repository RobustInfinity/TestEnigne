var dbOperation = require('../config/dboperations')
var {validateSignUp} = require('../config/validate')
var {signPayload} = require('./encrypt');
var {SALT} = require('../config/property')
var logger = require('./logger')

module.exports = (obj, request, response)=>{
    logger.debug('signup')
    var {name, email, mobile, password} = obj;
    var errors = validateSignUp({name, email, mobile, password});
    
    if( Object.keys(errors).length === 0){
        password = signPayload(password,SALT);
        console.log(password);
        dbOperation.add({name, email, mobile, password}, request, response)
    }else{
        logger.error('signup ' + errors)
        response.send(errors);
    }
}