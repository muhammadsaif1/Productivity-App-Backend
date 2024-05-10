// Please remove the following when it's now being used in a file
const express = require("express");

// Made changes here! remove the following line when you read
// const router = express.Router();
const { Router } = require("express");

// Please remove the following when it's now being used in a file
const Task = require("../models/Task");
const { createTask } = require("../controllers/taskControllers");

const tasksRouter = Router();

// commented out this line, remove this when you read the code!
// router.route("/createTask").post(createTask);

// if you create routes like this then you can just add new routes
// here in this file and app.js will read it. Less code!
tasksRouter.post("/api/createTask", createTask);

module.exports = tasksRouter;
