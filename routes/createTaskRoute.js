const { Router } = require("express");
const { createTask } = require("../controllers/taskControllers");

const tasksRouter = Router();
tasksRouter.post("/api/createTask", createTask);

module.exports = tasksRouter;
