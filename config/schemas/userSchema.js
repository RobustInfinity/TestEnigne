const mongoose = require('../dbconnection')
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    email :{
        unique : true,
        type : String,
        required : true
    },
    name : {
        type : true,
        required : true
    },
    password : {
        type:String,
        required : true
    },
    mobile : {
        type : String,
        required : true
    }
})

var User = mongoose.model('User',UserSchema)

module.exports = User;