const mongoose  = require('mongoose')

mongoose.connect('mongodb://localhost:27017/TestEngine',{useNewUrlParser : true},()=>{
    console.log('Database Connected')
})

module.exports = mongoose