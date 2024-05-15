const { Router } = require("express");
const {
  createTask,
  updateTask,
  fetchAllTasks,
  fetchTaskById,
} = require("../controllers/taskControllers");

const tasksRouter = Router();
tasksRouter.post("/api/createTask", createTask);
tasksRouter.get("/api/fetchTasks", fetchAllTasks);
tasksRouter.get("/api/fetchTask/:id", fetchTaskById);
tasksRouter.put("/api/updateTask/:id", updateTask);

module.exports = tasksRouter;
