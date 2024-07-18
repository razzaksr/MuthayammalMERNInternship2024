const mongoose = require('mongoose')

var accountSchema=new mongoose.Schema({
    username:{type:String},
    password:{type:String},
    fullname:{type:String},
    accountno:{type:Number},
    accountbal:{type:Number}
})

const account = mongoose.model('account',accountSchema)
module.exports=account