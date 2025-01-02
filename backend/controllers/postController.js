const { createPost, getAllPosts, deletePost } = require("../db/queries");

const post = async (req, res) => {
  try {
    const { postTitle, postContent } = req.body;
    console.log(postTitle);
    console.log(postContent);
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
    return res.status(201).send();
  } catch (error) {
    return res.status(500).send("Unknown Error");
  }
};

module.exports = {
  post,
  getPosts,
  deletePostController,
};
