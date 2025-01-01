const { createPost, getAllPosts } = require("../db/queries");

const post = async (req, res) => {
  try {
    const { postTitle, postContent } = req.body;
    console.log(postTitle);
    console.log(postContent);
    // createPost(postTitle, postContent);
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

module.exports = {
  post,
  getPosts,
};
