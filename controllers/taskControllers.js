const Task = require("../models/Task");
// @desc create new task
// @ POST /api/createTask
// @ access public

const createTask = async (req, res) => {
  try {
    console.log(req.body);
    const { title, description, deadline } = req.body;
    if (!title || !description || !deadline) {
      res
        .status(400)
        .json({ success: false, message: "All fields are Mandatory" });
    }
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
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to create task" });
  }
};

// @desc get all tasks
// @ POST /api/fetchTasks
// @ access public

const fetchAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to fetch tasks" });
  }
};

module.exports = { createTask, fetchAllTasks };
