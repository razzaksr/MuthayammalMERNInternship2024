const express=require('express')
const { default: mongoose } = require('mongoose')
const bluedart = require('./logistics')
const bodyParser = require('body-parser')

const exp = express()

exp.use(bodyParser.urlencoded({extended:true}))
exp.use(bodyParser.json())

const uri = "mongodb+srv://razak:mohamed@cluster0.ptmlylq.mongodb.net/muthayammal?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

mongoose.connect(uri,clientOptions)

// routers

exp.delete('/many/:location',async(request,response)=>{
    const data = await bluedart.deleteMany({receiverAddress:{'$eq':request.params.location}})
    response.json(data)
})

exp.delete('/erase/:id',async(request,response)=>{
    const data = await bluedart.findByIdAndDelete(id=request.params.id)
    response.json(data)
})

exp.put('/modify',async(request,response)=>{
    const data = await bluedart.updateMany({status:{'$eq':"Transit"}},{status:"Return"})
    response.json(data)
})

exp.put('/',async(request,response)=>{
    const data = await bluedart.findByIdAndUpdate(id=request.body._id,request.body,{new:false})
    response.json(data)
})

exp.get('/status/:given',async(request,response)=>{
    // const found = await bluedart.findOne({"status":{'$eq':request.params.given}})
    const found = await bluedart.find({"status":{'$eq':request.params.given}})
    response.json(found)
})

exp.get('/:id',async(request,response)=>{
    const consignment = await bluedart.findById(id=request.params.id)
    response.json(consignment)
})

exp.post("/deliver",async(request,response)=>{
    const newItem = new bluedart(request.body)
    await newItem.save()
    response.json(newItem)
})

exp.get('/',async(request,response)=>{
    const tracks = await bluedart.find()
    response.json(tracks)
})

exp.listen(1234,()=>{
    console.log("express connected!!!!!!!!!!!")
})