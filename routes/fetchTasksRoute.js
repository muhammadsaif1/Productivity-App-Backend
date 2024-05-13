const { Router } = require("express");
const { fetchAllTasks } = require("../controllers/taskControllers");

const fetchTasksRouter = Router();

fetchTasksRouter.get("/api/fetchTasks", fetchAllTasks);

module.exports = fetchTasksRouter;
