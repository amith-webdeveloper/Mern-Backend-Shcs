const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const userModel = require("./models/user.model");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/create", async function (req, res) {
  let { username, email, password, age } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let createduser = await userModel.create({
        username,
        email,
        password: hash,
        age,
      });

      const token = jwt.sign({ email }, "secret");
      res.cookie("token", token);

      res.render('home');
    });
  });
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.post("/login", async function (req, res) {
  const user = await userModel.findOne({ email: req.body.email });
  if (!user) return res.send("something is wrong");

  bcrypt.compare(req.body.password, user.password, function (err, result) {
    if (result) {
      const token = jwt.sign({ email :user.email }, "secret");
      res.cookie("token", token);
      res.send("yes you can login");
    } else res.send("something is went wrong");
  });
});

app.get("/logout", function (req, res) {
  res.cookie("token", "");
  res.redirect("/");
});

app.listen(3000);
