const login = async (req, res) => {
  console.log("login");
  res.send("login");
};

const signup = async (req, res) => {
  console.log("signup");
  console.log(req.body);
  res.send("signup");
};

module.exports = {
  login,
  signup,
};
