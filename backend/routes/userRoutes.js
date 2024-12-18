const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

router.post("/api/login", controller.login);

module.exports = router;
