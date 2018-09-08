const User = require('./schemas/userSchema');
var logger = require('../model/logger')
var {verifyPayload} = require('../model/encrypt')
var {SALT} = require('../config/property')

const dbOperation = {
    add: function (user, request, response){
        logger.debug('dboperation add()')
        var data = new User({
            email : user.email,
            name : user.name,
            password : user.password,
            mobile : user.mobile
        })

        User.create(data)
        .then((result)=>{
            logger.debug('dboperations add() User.create()')
            response.send(result)
            console.log(result);
        })
        .catch((err)=>{
            logger.error(err);
            response.status(400).send(err);
            console.log(err)
        })
    },
    login : (obj, request, response)=>{
        logger.debug("dboperation login()")
        User.findOne({
            email : obj.email,
        },(err , user)=>{
            logger.debug("dboperation login() User.findOne()")
            console.log(user)
            console.log(err);
            if(user){
                user.password = verifyPayload(user.password,SALT)
                console.log(user.password)
                console.log(obj.password)
                if(obj.password === user.password){
                    console.log(obj.password === user.password)
                    response.send(`${user.email} logged in`)
                }else{
                    response.status(401).send("Invalid Password");
                }
            }else{
                console.log("error")
                response.status(401).send("Invalid Email");
            }
        })
        
        
    }
}

module.exports = dbOperation;