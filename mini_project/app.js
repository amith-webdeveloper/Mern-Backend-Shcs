const express = require('express')
const app = express()
const userModel = require('./models/user.model')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', function (req, res) {
    res.render('index')
})

app.get('/login', function (req, res) {
    res.render('login')
})

app.get('/profile', isLoggedIn, function (req, res) {
    console.log(req.user);
    
    res.render('login')
})

app.post('/register', async (req, res) => {
    const { email, password, username, name, age } = req.body;
    const user = await userModel.findOne({ email })
    if (user) return res.status(500).send("user already registered")

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            const user = await userModel.create({
                username,
                email,
                age,
                name,
                password: hash,
            });

            const token = jwt.sign({ email: email, userid: user._id }, "secret");
            res.cookie('token', token)
            res.send('registered!')


        })

    })
})
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email })
    if (!user) return res.status(500).send("Something went wrong!")

    bcrypt.compare(password, user.password, function (err, result) {
        if (result) res.status(200).send('you can login');
        else res.redirect('/login');
    })
})

app.get('/logout', function (req, res) {
    res.cookie("token", '')
    res.redirect('/login')
})

function isLoggedIn(req, res, next) {
    if (req.cookies.token === "") res.send("you must be logged in")
    else {
        const data = jwt.verify(req.cookies.token, 'secret')
        req.user = data;

    }
    next()

}

app.listen(3000)