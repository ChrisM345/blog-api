const express = require("express");
const router = express.Router();
const controller = require("../controllers/postController");
const { verifyToken, verifyAdminToken } = require("../auth");

router.post("/posts", verifyAdminToken, controller.post);
router.get("/posts", verifyToken, controller.getPosts);
router.delete("/posts/:postId", verifyAdminToken, controller.deletePostController);

module.exports = router;
