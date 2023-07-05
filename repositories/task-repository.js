const Task = require("../models/tasks");
const BadRequestException = require("../exceptions/BadRequestException")

const addNewTask = async (task) => {
  try {
    task = new Task(task);
    await task.save();
    console.log(`task was added successfully`)
    return task;
  } catch (err) {
    throw BadRequestException("Task", "Please fill all the required fields carefully..")
  }
};

const getTaskById = async (taskId) => {
  let task = await Task.findOne({ _id: taskId });
  if (!task) {
    return null;
  }
  return task;
};

//get task of a user by their ID
const getTaskByUserId = async (userId) => {
  const tasksList = await Task.find({owner : userId});
  return tasksList;
}

const updateTaskById = async (taskId , updateObject) => {
  const updateResult = await Task.updateOne(
    {_id : taskId},
    {$set : updateObject}
  );
  if(updateResult.matchedCount){
    console.log(`task with ID ${taskId} was  updated successfully`)
    return true
  }
  console.log(`task with id ${taskId} was not updated...`)
  return false
};

const deleteTaskById = async (taskId) => {
  const deletedResult = await Task.deleteOne({
    _id : taskId
  })
  if(deletedResult.deletedCount){
    console.log(`task with Id:${taskId} has been removed from database........`);
    return true
  }
  console.error(`failed to delete......`)
  return false;
}

module.exports = {
  addNewTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
}