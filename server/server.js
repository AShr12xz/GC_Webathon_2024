const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app.js");
const cors = require("cors");

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





app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
