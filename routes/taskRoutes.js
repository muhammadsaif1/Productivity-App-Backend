const { Router } = require("express");
const {
  createTask,
  updateTask,
  fetchAllTasks,
  fetchTaskById,
  deleteTask,
} = require("../controllers/taskControllers");
const authenticateUser = require("../middleware/authHandler");

const tasksRouter = Router();
tasksRouter.post("/api/createTask", authenticateUser, createTask);
tasksRouter.get("/api/fetchTasks", authenticateUser, fetchAllTasks);
tasksRouter.get("/api/fetchTask/:id", authenticateUser, fetchTaskById);
tasksRouter.put("/api/updateTask/:id", authenticateUser, updateTask);
tasksRouter.delete("/api/deleteTask/:id", authenticateUser, deleteTask);

module.exports = tasksRouter;
