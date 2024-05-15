const Task = require("../models/Task");
// @desc create new task
// @ POST /api/createTask
// @ access public

const createTask = async (req, res) => {
    try {
        // Once you are creating a PR on Github, that means the code is crystal clear and approved.
        // All the console logs should be removed before creating a PR.
        console.log(req.body);
        const { title, description, deadline } = req.body;
        if (!title || !description || !deadline) {
            res.status(400).json({ success: false, message: "All fields are Mandatory" });
        }
        const newTask = new Task({
            title,
            description,
            deadline,
        });
        await newTask.save();

        res.status(201).json({ success: true, message: "Task created successfully" });
    } catch (error) {
        //console logs in the catch scope should not removed. They can stay!
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to create task" });
    }
};

// @desc get all tasks
// @ POST /api/fetchTasks
// @ access public

const fetchAllTasks = async (req, res) => {
    try {
        // Good Job!
        const tasks = await Task.find();
        res.status(200).json({ success: true, data: tasks });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to fetch tasks" });
    }
};

// @desc get a particular task with id
// @ POST /api/:id/fetchTask
// @ access public

const fetchTaskById = async (req, res) => {
    try {
        // Good Job!
        const taskId = req.params.id;
        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }
        res.status(200).json({ success: true, data: task });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to fetch task" });
    }
};

module.exports = { createTask, fetchAllTasks, fetchTaskById };
