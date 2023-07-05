const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task-controller");

router.post("/add", taskController.addNewTask);
router.get("/:id", taskController.getTaskById);
router.put("/:id", taskController.updateTaskById);
router.delete("/:id",taskController.deleteTaskById);
module.exports = router