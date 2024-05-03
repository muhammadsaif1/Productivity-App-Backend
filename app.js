require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("THe server is running on port:3000");
});
