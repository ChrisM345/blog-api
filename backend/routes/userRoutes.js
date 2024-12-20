const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

router.post("/auth/login", controller.login);
router.post("/auth/signup", controller.signup);

module.exports = router;
