require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Task = require("./models/Task");
const errorHandler = require("./middleware/errorHandler");
const connectToDatabase = require("./config/database");
const corsMiddleware = require("./middleware/corsHandler");

connectToDatabase();

app.use(express.json());
app.use(corsMiddleware);

app.use(express.urlencoded({ extended: true }));

app.use("/api/createTask", require("./routes/createTaskRoute"));
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("THe server is running on port:3000");
});
