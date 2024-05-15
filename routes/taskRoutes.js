// Try to write as less code as possible. Different files were unnecessary in our case.
// I have brought all the task related routes here in this file.
// Please create all the routes in this file. A good job!

// [IMPORTANT] Please create the update and delete routes in this same branch.

const { Router } = require("express");
const { createTask } = require("../controllers/taskControllers");
const { fetchAllTasks, fetchTaskById } = require("../controllers/taskControllers");

const tasksRouter = Router();
tasksRouter.post("/api/createTask", createTask);
tasksRouter.get("/api/fetchTasks", fetchAllTasks);
// Changed the location of /:id in the end.
tasksRouter.get("/api/fetchTask/:id", fetchTaskById);

module.exports = tasksRouter;
