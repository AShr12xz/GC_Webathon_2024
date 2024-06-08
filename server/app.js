const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");
const courseRouter = require("./routes/courseRoutes");
const studentCourseRouter = require("./routes/studentCourseRoutes");
const cors = require("cors");
const app = express();
const cron = require("node-cron");
const authController = require("./controllers/authController");

// 1) MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

// const backendUrl = "http://localhost:3000/";
const backendUrl = "https://gc-webathon-2024-l5b7.onrender.com/data";
cron.schedule("*/10 * * * * *", function () {
  console.log("Restarting server");

  https
    .get(backendUrl, (res) => {
      console.log("abcd");
      if (res.statusCode === 200) {
        console.log("Restarted");
      } else {
        console.error(`failed to restart with status code: ${res.statusCode}`);
      }
    })
    .on("error", (err) => {
      console.error("Error ", err.message);
    });
  console.log("abcd");
});

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://gc-webathon-2024-fchp2a3fs-krutarth-s-projects-3d3597ce.vercel.app/"
  );
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

app.get("/data", authController.fetchData);
app.use("/users", userRouter);
app.use("/courses", courseRouter);
app.use("/studentCourses", studentCourseRouter);

module.exports = app;
