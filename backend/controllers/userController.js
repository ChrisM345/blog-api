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
  const { username, password } = req.body;
  const user = await getUser(username);

  try {
    if (!user) {
      console.log("Username not found in database");
      return res.status(404).send("Username does not exist");
    }

    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
      console.log("Incorrect password");
      return res.status(404).send("Incorrect password");
    }
    console.log(user);
    return res.status(200).send("Logging in");
  } catch (err) {
    console.log("unknown error");
    return res.status(400).send("Unknown Error");
  }
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
