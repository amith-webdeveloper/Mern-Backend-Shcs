const express = require('express')
const app = express()
const userModel = require('./user.model')

app.get('/create' , async function(req , res){
   let createduser = await userModel.create({
        username : "sopan",
        email : "amithbhise@gmail.com",
        password:'123908'
    })

    res.send(createduser)
})

app.get('/read' , async function(req , res){
    const users = await userModel.find()
    // const users = await userModel.find({username:'sopan'})
    res.send(users)
})

app.get('/update' ,async function(req , res){
    const updatedUser = await userModel.findOneAndUpdate({username : "amith_bhise"} , {email :"amithweb@gmail.com"} , {new:true})

    res.send(updatedUser)
})


app.get('/delete' , async function(req , res){
    let users = await userModel.findOneAndDelete({email:"amithweb@gmail.com"})
    res.send(users)
})

app.listen(3000)