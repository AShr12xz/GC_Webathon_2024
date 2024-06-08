const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
const cors = require("cors");
const cron = require("node-cron");
const authController = require("./controllers/authController");
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

const backendUrl = "https://gc-webathon-2024-l5b7.onrender.com/data";
cron.schedule("*/180 * * * * *", function () {
  console.log("Restarting server");

  https
    .get(backendUrl, (res) => {
      if (res.statusCode === 200) {
        console.log("Restarted");
      } else {
        console.error(`failed to restart with status code: ${res.statusCode}`);
      }
    })
    .on("error", (err) => {
      console.error("Error ", err.message);
    });
});


app.use(cors());
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 3000;

app.get("/data", authController.fetchData);

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
