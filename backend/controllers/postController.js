const { createPost, getAllPosts, deletePost, getPostDetails, createComment, getComments } = require("../db/queries");

const post = async (req, res) => {
  try {
    const { postTitle, postContent } = req.body;
    createPost(postTitle, postContent);
    return res.status(201).send("Post created successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Unknown Error");
  }
};

const getPosts = async (req, res) => {
  const data = await getAllPosts();
  return res.status(200).json({
    data: data,
  });
};

const deletePostController = async (req, res) => {
  try {
    await deletePost(parseInt(req.params.postId));
    return res.status(200).send();
  } catch (error) {
    return res.status(500).send("Unknown Error");
  }
};

const viewPostController = async (req, res) => {
  try {
    const data = await getPostDetails(parseInt(req.params.postId));
    return res.status(200).json({
      data: data,
    });
  } catch (error) {
    return res.status(500).send("Unknown Error");
  }
};

const postCommentController = async (req, res) => {
  try {
    const { username, commentContent } = req.body;
    const postId = parseInt(req.params.postId);
    createComment(username, postId, commentContent);
    return res.status(201).send("Comment created successfully");
  } catch (error) {
    return res.status(500).send(`Error: ${error}`);
  }
};

const getPostsController = async (req, res) => {
  try {
    const data = await getComments(parseInt(req.params.postId));
    return res.status(200).json({
      data: data,
    });
  } catch (error) {
    return res.status(500).send(`Error getting posts ${error}`);
  }
};

module.exports = {
  post,
  getPosts,
  deletePostController,
  viewPostController,
  postCommentController,
  getPostsController,
};
