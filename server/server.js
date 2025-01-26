const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app.js");
const cors = require("cors");
const cron = require("node-cron");
const https = require("https");

dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 3000;

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);




app.use(cors());
mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful!"));

const backendUrl = "http://localhost:3000/users/data";
// const backendUrl = "https://gc-webathon-2024-l5b7.onrender.com/users/data";
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




app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
