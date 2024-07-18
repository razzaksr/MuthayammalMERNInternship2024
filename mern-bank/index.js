require("./db")
const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const account = require('./account')
const beneficiary = require('./beneficiary')

const exp = express()
exp.use(cors())
exp.use(parser.urlencoded({extended:true}))
exp.use(parser.json())


// routes for login
exp.post('/signup',async(request,response)=>{
    const newAccount = new account(request.body)
    await newAccount.save()
    response.json({"message":newAccount.accountno+" has opened"})
})

exp.post('/login',async(request,response)=>{
    const user = request.body.username
    const pass = request.body.password
    const t = await account.findOne({'$and':[{"username":{'$eq':user}},{"password":{'$eq':pass}}]})
    if(t){
        const m = await beneficiary.find({"beneficiarymapped":{"$eq":t.accountno}})
        const res = {
            "user":t,
            "bene":m
        }
        response.json(res)
    }
    else{
        response.json({"message":"error"})
    }
})

// routes for beneficiary
exp.post('/ben/new',async(request,response)=>{
    const ben = new beneficiary(request.body)
    await ben.save()
    response.json(ben)
})

exp.listen(1234,()=>{
    console.log("Backend connected!!!")
})