const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

let corsOptions = {
  origin: ["http://127.0.0.1:5173"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require("./routes/userRoutes");
app.use(userRouter);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
