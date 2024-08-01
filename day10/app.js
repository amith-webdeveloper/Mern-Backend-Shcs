const express = require("express");
const path = require("path");
const app = express();
const usermodel = require("./models/user.model");
const userModel = require("./models/user.model");

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


