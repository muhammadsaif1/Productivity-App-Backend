const Task = require("../models/task");
// @desc create new task
// @ POST /api/createTask
// @ access public

const createTask = async (req, res) => {
    try {
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
        res.status(500).json({ success: false, message: `ERROR: ${error}` });
    }
};

// @desc get a particular task with id
// @ POST /api/fetchTask/:id
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

// @desc update a particular task wit id
// @ PUT /api/updateTask/:id
// @ access public

const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const { title, description, deadline } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(taskId, { title, description, deadline }, { new: true });

        if (!updatedTask) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }

        res.status(200).json({ success: true, data: updatedTask });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to update task" });
    }
};

// @desc delete a particular task wit id
// @ DELETE /api/deleteTask/:id
// @ access public

const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const deletedTask = await Task.findByIdAndDelete(taskId);

        if (!deletedTask) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }
        res.status(200).json({ success: true, message: "Task deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to delete task" });
    }
};

module.exports = {
    createTask,
    fetchAllTasks,
    fetchTaskById,
    updateTask,
    deleteTask,
};
