const { Router } = require("express");
const {
  fetchAllTasks,
  fetchTaskById,
} = require("../controllers/taskControllers");

const tasksRouter = Router();

tasksRouter.get("/api/fetchTasks", fetchAllTasks);
tasksRouter.get("/api/:id/fetchTask", fetchTaskById);

module.exports = tasksRouter;
