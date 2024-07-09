const express = require('express')
const bodyParser = require('body-parser')

const exp = express()

exp.use(bodyParser.urlencoded({extended:true}))
exp.use(bodyParser.json())

let tempData=[{
    "projectorId":7654678,
    "projectorName":"Epson",
    "projectorPrice":29000
},{
    "projectorId":56789,
    "projectorName":"MARQ",
    "projectorPrice":19000
},{
    "projectorId":987678,
    "projectorName":"Sony",
    "projectorPrice":79000
},{
    "projectorId":8778,
    "projectorName":"BenQ",
    "projectorPrice":9232
}]

exp.delete("/remove/:index",async(request,response)=>{
    tempData = tempData.filter((val,ind)=>{
        return ind!=request.params.index
    })
    response.json(tempData)
})

exp.put("/replace",async(request,response)=>{
    for(var index=0;index<tempData.length;index++){
        if(tempData[index].projectorId==request.body.projectorId){
            tempData[index]=request.body
            response.json({"success":request.body})
            return
        }
    }
    response.json({"Failed":"Updation failed"})
})

exp.put("/change/:position",async(request,response)=>{
    const index = request.params.position
    tempData[index]=request.body
    response.json(tempData)
})

exp.get("/",async(request,response)=>{
    response.json({"records":tempData})
})

exp.post('/include',async(request,response)=>{
    const received = request.body
    tempData.push(received)
    console.log(tempData.length+" "+JSON.stringify(received))
    response.json({"msg":JSON.stringify(received)+" added to the stock"})
})

exp.listen(1100,()=>{
    console.log('stocks initiated!!!!!!!!!!!!!!!!')
})