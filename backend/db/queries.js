const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createUser(username, password, adminCode) {
  let role = "USER";
  if (adminCode == process.env.ADMIN_CODE) {
    role = "ADMIN";
  }

  const user = await prisma.users.create({
    data: {
      username: username,
      password: password,
      role: role,
    },
  });
}

async function getUser(username) {
  const user = await prisma.users.findUnique({
    where: {
      username: username,
    },
  });
  return user;
}

async function createPost(postTitle, postContent) {
  const post = await prisma.posts.create({
    data: {
      title: postTitle,
      content: postContent,
    },
  });
}

async function getAllPosts() {
  const posts = await prisma.posts.findMany({
    orderBy: {
      id: "desc",
    },
  });
  return posts;
}

async function deletePost(id) {
  const deletePost = await prisma.posts.delete({
    where: {
      id: id,
    },
  });
}

async function getPostDetails(id) {
  const post = await prisma.posts.findUnique({
    where: {
      id: id,
    },
  });

  return post;
}

async function createComment(username, postId, commentContent) {
  const user = await getUser(username);
  const userId = user.id;
  const comment = await prisma.comments.create({
    data: {
      content: commentContent,
      Posts: {
        connect: {
          id: postId,
        },
      },
      author: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

async function getComments(postId) {
  const comments = await prisma.comments.findMany({
    orderBy: {
      id: "desc",
    },
    where: {
      postsId: postId,
    },
  });
  return comments;
}

module.exports = {
  createUser,
  getUser,
  createPost,
  getAllPosts,
  deletePost,
  getPostDetails,
  createComment,
  getComments,
};
