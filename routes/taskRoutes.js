const express = require("express");
const router = express.Router();
const Task = require("../models/task");

// CREATE TASK
router.post("/", async (req, res) => {
  try {
    const task = new Task(req.body);
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
