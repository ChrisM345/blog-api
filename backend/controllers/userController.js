const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const { createUser, getUser } = require("../db/queries");

const validateLogin = [
  body("username").custom(async (value) => {
    if (await getUser(value)) {
      throw new Error("Username already in use");
    }
  }),
];

const login = async (req, res) => {
  console.log("login");
  res.send("login");
};

const signup = [
  validateLogin,
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      //validate that username is unique. return error if it is in use
      return res.status(401).send("Username already in use");
    }
    try {
      bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        if (err) {
          return console.log("Error encrypting password");
        }
        createUser(req.body.username, hashedPassword);
        //send successful response
        return res.status(201).send("User created successfully");
      });
    } catch (err) {
      //return generic failure
      return res.status(500).send("Error creating user");
    }
  },
];

module.exports = {
  login,
  signup,
};
