const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

router.post("/auth/login", controller.login);
router.post("/auth/signup", controller.signup);
router.post("/auth/signup/admin", controller.signup);

module.exports = router;
