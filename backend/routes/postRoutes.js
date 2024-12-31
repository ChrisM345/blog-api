const express = require("express");
const router = express.Router();
const controller = require("../controllers/postController");

router.post("/posts", controller.post);

module.exports = router;
