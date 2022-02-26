require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { validationResult } = require("express-validator");

const newToken = (user) => {
  return jwt.sign({ user }, process.env.jwt_secret);
};
const register = async (req, res) => {
  // let errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }
  // res.status(400).send({ body: req.body });
  // console.log(req.file);
  // req.body.profileImages = "req.file.path";
  try {
    let user = await User.findOne({ email: req.body.email }).lean().exec();
    if (user)
      return res.status(400).send({ message: "Please try another email" });
    user = await User.create(req.body);
    const token = newToken(user);
    res
      .cookie("jwt", token, {
        expires: new Date(Date.now() + 50000),
      })
      .status(200)
      .send({ user });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const login = async (req, res) => {
  // let errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(200).json({ errors: errors.array() });
  // }
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(200).send({ message: "email not registered" });
    const match = user.passwordMatch(req.body.password);

    if (!match)
      return res.status(200).send({ message: "password is not correct" });
    const token = newToken(user);
    res
      .cookie("jwt", token, {
        expires: new Date(Date.now() + 50000),
      })
      .status(200)
      .send({ user });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { register, login };
