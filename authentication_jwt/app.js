const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


app.use(cookieParser())

app.get('/' , function(req , res){
    // res.cookie("name" , "amith")

    // salt is an random string
    // bcrypt.genSalt(10 , function(err , salt){
    //     bcrypt.hash("amith1840" , salt , function(err , hash){
    //         console.log(hash);
    //     })
    // })
    // // it encryption method
    // res.send('working')
    // now we have to compare the hash and plaitext
    // bcrypt.compare('amith1840' , '$2b$10$A.oV.ZWdNySNAx2ucagIYuYIMZISgzGVz0AIkqjLwzCiN8I7phe4u' , function(err , result){
    //     console.log(result);
        
    // })

    const token = jwt.sign({email : "amith@example.com"} , "secret")
    console.log(token);
    res.cookie("token" , token)
    res.send('done!')
    

})

app.get('/read' , function(req , res){
    // console.log(req.cookies.token);
    const data = jwt.verify(req.cookies.token , "secret")
    console.log(data);
    

})

// app.get('/read' , function(req , res){
//     // console.log(req.cookies);
//     res.send("read page")
// })

app.listen(3000)