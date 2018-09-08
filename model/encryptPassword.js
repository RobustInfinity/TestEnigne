const jwt = require('jsonwebtoken')
const logger = require('./logger')

module.exports = (payload, key)=>{
    logger.debug('encryptPassword');
    console.log(payload + key)
    return jwt.sign(payload, key);
}