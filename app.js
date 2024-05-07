require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");

const mongoose = require("mongoose");
const Task = require("./models/Task");

app.use(express.json());

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

app.use(express.urlencoded({ extended: true }));

app.post("/api/createTask", async (req, res) => {
  try {
    console.log(req.body);
    const { title, description, deadline } = req.body;
    const newTask = new Task({
      title,
      description,
      deadline,
    });
    await newTask.save();

    res
      .status(201)
      .json({ success: true, message: "Task created successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create task" });
  }
});

app.listen(process.env.PORT, () => {
  console.log("THe server is running on port:3000");
});
