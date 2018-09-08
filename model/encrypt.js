const jwt = require('jsonwebtoken')
const logger = require('./logger')

signPayload = (payload, key)=>{
    logger.debug('encrypt signPayload()');
    console.log(payload + key)
    return jwt.sign(payload, key);
}

verifyPayload = (token, key)=>{
    logger.debug('encrypt verifyPayload()');
    console.log(token)
    return jwt.verify(token, key);
}

module.exports = {signPayload, verifyPayload}