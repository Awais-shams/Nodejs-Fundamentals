const mongoose = require("mongoose");
const Joi = require("joi");
const config = require("config");
const hemlet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const app = express();
const genres = require("./routes/genres");

// * Built in and thirdparty middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(hemlet());

// * Mongoose Connection
mongoose
  .connect("mongodb://localhost/vidly")
  .then(() => console.log("connection successful "))
  .catch((err) => console.log("connection not successful"));

// * Environment Configuration
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`App Env: ${app.get("env")}`);

// * Custom Environment Configurations
console.log(config.get("name"));
console.log(config.get("mail.host"));

// console.log(config.get("cus-name"));
// console.log(config.get("cus-host"));
// console.log(config.get("cus-password"));

// * conditional environment what we want to use in dev/pro/staging etc
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("Morgan Enabled");
}

// * Routes Middleware
app.use("/api/genres", genres);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
