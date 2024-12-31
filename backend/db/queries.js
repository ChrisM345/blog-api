const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createUser(username, password, adminCode) {
  console.log(adminCode);
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

module.exports = {
  createUser,
  getUser,
  createPost,
};
