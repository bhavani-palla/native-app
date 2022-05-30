const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
//Router with methods

// GET all tasks
router.get("/", async (req, res) => {
  try {
    res.json(await Task.find());
  } catch (error) {
    res.json({ message: error });
  }
});

//POST to create task in db
router.post("/", async (req, res) => {
  /* res.end (title) */

  const task = new Task({
    text: req.body.text,
    completed: req.body.completed,
  });

  try {
    const savedTask = await task.save();
    res.json(savedTask);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
});

// Delete a task by id
router.delete("/:taskId", async (req, res) => {
  try {
    const deletedTask = await Task.deleteOne({ _id: req.params.taskId });
    res.json(deletedTask);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update a task by id
router.patch("/:taskId", async (req, res) => {
  try {
    const updatedTask = await Task.updateOne(
      { _id: req.params.taskId },
      {
        $set: {
          completed:
            req.body
              .completed /* to change ONLY status, while saving all the other lines untouched */,
        },
      }
    );
    res.json(updatedTask);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
