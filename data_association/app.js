const express = require('express')
const app = express()
const userModel = require('./models/user.model')
const postModel = require('./models/posts.model')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/' , function(req , res){
    res.send('hey')
})

app.get('/create' , async function(req , res){
    const user = await userModel.create({
        username:"amith",
        age:25,
        email:"amith@gmail.com"
    })

    res.send(user)
})

app.get('/post/create' , async function(req , res){
    const post = await postModel.create({
        postdata:"hello world",
        user: '66ad90f3575342f1ba155003',
    })

    let user = await userModel.findOne({_id:'66ad90f3575342f1ba155003'})

    user.posts.push(post._id);
    await user.save()

    res.send({post , user})

})

app.listen(3000)