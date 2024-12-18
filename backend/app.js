const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));

const userRouter = require("./routes/userRoutes");
app.use(userRouter);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
