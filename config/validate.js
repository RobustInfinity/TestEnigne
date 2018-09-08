
var Validator = require('validator')
var logger = require('../model/logger')

validateSignUp =  (obj)=> {
    logger.debug('validate signup()');
     var {isEmpty} = Validator
     var errors = {}
     var {name, email, mobile, password} = obj
    //check Email
    if(isEmpty(email)){
        errors.email = "Email is required"
    }
    if(!Validator.isEmail(email)){
        errors.email = "Email is not valid"
    }

    //check Name
    if(isEmpty(email)){
        errors.name = "Name is required"
    }
    if(!Validator.isLength(name,{min : 2, max : 10})){
        errors.name = "Name is either too long or short"
    }
    
    //check Mobile
    if(isEmpty(mobile)){
        errors.mobile = "Mobile is required"
    }
    if(!Validator.isMobilePhone(mobile,"en-IN")){
        errors.mobile = "Invalid Mobile number"
    }

    //check Password
    if(isEmpty(password)){
        errors.password = "Password cannot be empty";
    }
    if(!Validator.isLength(password,{min : 2, max : 10})){
        errors.password = "Too long or too short";
    }

    return errors;

}

module.exports = validateSignUp;
