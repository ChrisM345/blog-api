const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createUser(username, password) {
  const user = await prisma.users.create({
    data: {
      username: username,
      password: password,
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

module.exports = {
  createUser,
  getUser,
};
