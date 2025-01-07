const express = require("express");
const router = express.Router();
const controller = require("../controllers/postController");
const { verifyToken, verifyAdminToken } = require("../auth");

router.post("/posts", verifyAdminToken, controller.post);
router.get("/posts", verifyToken, controller.getPosts);
router.delete("/posts/:postId", verifyAdminToken, controller.deletePostController);
router.get("/posts/:postId", verifyToken, controller.viewPostController);
router.get("/posts/:postId/comments", verifyToken, controller.getPostsController);
router.post("/posts/:postId/comment", verifyToken, controller.postCommentController);
router.put("/posts/:postId/", verifyAdminToken, controller.updatePostController);
router.get("/posts/:postId/comment/:commentId", controller.getCommentController);
router.put("/posts/:postId/comment/:commentId", controller.updateCommentController);

module.exports = router;
