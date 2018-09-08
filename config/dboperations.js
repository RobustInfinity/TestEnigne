const User = require('./schemas/userSchema');
var logger = require('../model/logger')

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
    }
}

module.exports = dbOperation;