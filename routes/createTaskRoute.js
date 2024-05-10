const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const { createTask } = require("../controllers/taskControllers");

router.route("/").post(createTask);

module.exports = router;
