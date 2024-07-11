require("./base")
const express=require('express')
const router = express.Router()
const bluedart = require('./logistics')
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json())



// routers

router.delete('/many/:location',async(request,response)=>{
    const data = await bluedart.deleteMany({receiverAddress:{'$eq':request.params.location}})
    response.json(data)
})

router.delete('/erase/:id',async(request,response)=>{
    const data = await bluedart.findByIdAndDelete(id=request.params.id)
    response.json(data)
})

router.put('/modify',async(request,response)=>{
    const data = await bluedart.updateMany({status:{'$eq':"Transit"}},{status:"Return"})
    response.json(data)
})

router.put('/',async(request,response)=>{
    const data = await bluedart.findByIdAndUpdate(id=request.body._id,request.body,{new:false})
    response.json(data)
})

router.get('/status/:given',async(request,response)=>{
    // const found = await bluedart.findOne({"status":{'$eq':request.params.given}})
    const found = await bluedart.find({"status":{'$eq':request.params.given}})
    response.json(found)
})

router.get('/:id',async(request,response)=>{
    const consignment = await bluedart.findById(id=request.params.id)
    response.json(consignment)
})

router.post("/deliver",async(request,response)=>{
    const newItem = new bluedart(request.body)
    await newItem.save()
    response.json(newItem)
})

router.get('/',async(request,response)=>{
    const tracks = await bluedart.find()
    response.json(tracks)
})

module.exports=router