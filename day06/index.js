const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.use(express.json())   // these are parsers
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname , 'public')))
app.set('view engine' , 'ejs')

app.get('/profile/:username' , function(req , res){
    res.send(`welcome ${req.params.username}`)
})

app.get('/profile/:username/:age' , function(req , res){
    res.send(req.params)
})

app.listen(port , function(){
    console.log(`app is listening at port : ${port}`);
    
})