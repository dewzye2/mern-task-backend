const express = require("express");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController");
const Task = require("../models/taskModel");
const router = express.Router()


router.post("/", createTask);
router.get("/", getTasks)
router.get("/:id", getTask)
router.delete("/:id", deleteTask)
router.put("/:id", updateTask)


module.exports = router

// ------ can work like this (less lines) ------ 
// router.route("/").get(getTasks).post(createTask)
// router.route("/:id").get(getTask).delete(deleteTask).put(updateTask)

// ------  routes without app.use("/api/tasks", taskRoutes) in server.js ------ 
// router.post("/api/tasks", createTask);
// router.get("/api/tasks", getTasks)
// router.get("/api/tasks/:id", getTask)
// router.delete("/api/tasks/:id", deleteTask)
// router.put("/api/tasks/:id", updateTask)
