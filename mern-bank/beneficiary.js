const mongoose = require('mongoose')

var beneficiarySchema=new mongoose.Schema({
    beneficiaryaccount:{type:Number},
    beneficiaryname:{type:String},
    beneficiarymapped:{type:Number}
})

const beneficiary = mongoose.model('beneficiary',beneficiarySchema)
module.exports=beneficiary