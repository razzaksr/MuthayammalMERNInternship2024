const express = require('express')

const exp = express()

exp.get('/sip/:principle/:tenure/:roi',async(request,response)=>{
    let maturity=request.params.principle*(request.params.roi)/100;
    maturity*=request.params.tenure
    response.json({"maturity":maturity,"principle":request.params.principle})
})

exp.get('/:data',async(request,response)=>{
    response.json({"newData":request.params.data*2})
})

exp.get('/term',async(request,response)=>{
    response.json({"projectorId":656789,"projectorName":"Epson"})
})

exp.get('/',async(request,response)=>{
    // response.json({"data":"My empty page"})
    response.send("<h1 style='color:blue'>My empty tag</h1>")
})

exp.listen(1100,()=>{
    console.log('my router is running!!!!!!!!!!!!!!!!')
})