const express = require('express')
const app = express()
const path  = require('path')
app.set('view engine' , 'ejs')
const fs = require('fs')

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname , "public")))

app.get('/' , function(req , res){
    fs.readdir(`./files` , function(err, files){
        // console.log(files);
        res.render('index' , {files: files})
    })
})

app.post('/create' , function(req , res){
    // console.log(req.body);
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt` , req.body.details , function(err){
        res.redirect('/')

    })    
})



app.listen(3000)