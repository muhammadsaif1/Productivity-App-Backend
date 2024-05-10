require("dotenv").config();

const express = require("express");
const app = express();

// remove lines from 7 to 9 when they are not being used in the file.
// this is unnecessary code.
const path = require("path");
const mongoose = require("mongoose");
const Task = require("./models/Task");

const tasksRouter = require("./routes/createTaskRoute");
const errorHandler = require("./middleware/errorHandler");
const connectToDatabase = require("./config/database");
const corsMiddleware = require("./middleware/corsHandler");

connectToDatabase();

app.use(express.json());
app.use(corsMiddleware);

app.use(express.urlencoded({ extended: true }));

// made changes here. With your approach, we had a problem when adding more routes.
// with this approach, you can make create as many routes as you want in the routes file.
// remove line 27 when you read this.
// app.use("/api/createTask", require("./routes/createTaskRoute"));
app.use(tasksRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log("THe server is running on port:3000");
});
