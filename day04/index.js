const express = require('express')

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use(function(req , res , next){
    console.log("middleware is started..");
    next() 
})

app.use(function(req , res , next){
    console.log("middleware is started 2nd time..");
    next()
    
})

app.get('/' , (req , res) => {
    res.send('Hello world')
})



app.get('/profile' , (req , res , next) => {
    return next(new Error("Something Went Wrong"))
    
})

app.use(function(err , req , res , next){
    console.error(err.stack);
    res.status(500).send("Something Broke!")
    
})

app.listen(3000 , function(){
    console.log("app is listening...");
    
})

