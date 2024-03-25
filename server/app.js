const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");
const courseRouter = require("./routes/courseRoutes");
const studentCourseRouter = require("./routes/studentCourseRoutes");
const cors = require("cors");
const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://10.10.90.191:3001");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello");
});

// 2) ROUTES

app.use("/users", userRouter);
app.use("/courses", courseRouter);
app.use("/studentCourses", studentCourseRouter);

module.exports = app;
