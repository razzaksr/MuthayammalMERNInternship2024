const mongoose = require('mongoose')

var logSchema=new mongoose.Schema({
    trackId:{type:Number},
    receiverName:{type:String},
    receiverAddress:{type:String},
    receiverContact:{type:Number},
    itemName:{type:String},
    itemPrice:{type:Number},
    status:{type:String}
})

const ekart = mongoose.model('ekart',logSchema)
module.exports=ekart