const Task = require("../models/Task");
// @desc create new task
// @ POST /api/createTask
// @ access public

// good job!
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

module.exports = { createTask };
