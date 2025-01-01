const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  console.log(req.headers);
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>
  console.log(token);
  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send("Unauthorized");
    }
    next();
  });
};

const verifyAdminToken = (req, res, next) => {
  console.log(req.headers);
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>
  console.log(token);
  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send("Unauthorized");
    }

    if (decoded.role != "ADMIN") {
      return res.status(401).send("Unauthorized");
    }
    next();
  });
};

module.exports = {
  verifyToken,
  verifyAdminToken,
};
