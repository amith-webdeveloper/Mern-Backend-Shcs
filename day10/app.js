const express = require("express");
const path = require("path");
const app = express();
const usermodel = require("./models/user.model");
const userModel = require("./models/user.model");
const { trusted } = require("mongoose");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/read", async function (req, res) {
const all_users = await userModel.find()
  res.render("read" , {users : all_users});
});

app.get("/edit/:userid", async function (req, res) {
  const user = await usermodel.findOne({_id: req.params.userid})
  res.render('edit' , {user})

});

app.post("/update/:userid", async function (req, res) {
  let {name , email , image} = req.body
  const user = await usermodel.findOneAndUpdate({_id: req.params.userid} , {name , email , image} , {new:true})
  res.redirect('/read')

});

app.post("/create", async function (req, res) {
  let { name, email, image } = req.body;
  const createdUser = await userModel.create({
    name,
    email,
    image,
  });
  res.redirect('/read')
});



app.get('/delete/:id' , async function(req , res){
    let users = await userModel.findOneAndDelete({_id: req.params.id})
    res.redirect("/read")
})

app.listen(3000);


