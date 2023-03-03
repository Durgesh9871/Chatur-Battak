const express = require("express");
const { UserModel } = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//const {adminauthenticate}=require("../middleware/adminauth.middlrware")

const userrouter = express.Router();

//routes for sign up
userrouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const userexist = await UserModel.findOne({ email: email });
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.send({ message: "something went wrong", error: err.message });
      } else {
        if (userexist) {
          res.send({ message: "Email already register" });
        } else {
          const user = new UserModel({ name, email, password: hash });
          await user.save();
          res.send({ message: "user registered", user });
        }
      }
    });
  } catch (err) {
    res.send({ msg: "something went wrong", error: err.message });
  }
});

//login
userrouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      //console.log(user)
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          let token = jwt.sign({ userID: user[0]._id }, "rajesh", {
            expiresIn: "1h",
          });
          res.send({ msg: "login success", token: token });
        } else {
          res.send({ msg: "wrong credentials" });
        }
      });
    } else {
      res.send({ msg: "wrong credentials" });
    }
  } catch (err) {
    res.send({ msg: "something went wrong", error: err.message });
  }
});

//get all users
userrouter.get("/", async (req, res) => {
  try {
    const notes = await UserModel.find();
    res.send(notes);
  } catch (err) {
    res.send({ msg: "cannot get the users data", error: err.message });
  }
});

module.exports = { userrouter };
