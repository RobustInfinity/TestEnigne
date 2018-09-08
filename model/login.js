
var logger = require('../model/logger')
var dboperations = require('../config/dboperations')
var {validateLogin} = require('../config/validate');

module.exports = (obj, request, response)=>{
    logger.debug('login')
    var {email, password} = obj;
    var errors = validateLogin(obj);
    console.log("12 " + password)
    if(Object.keys(errors).length === 0){
        dboperations.login({email, password}, request, response)
    }else{
        logger.error("login" + errors)
        response.status(401).send(errors);
    }

    
}