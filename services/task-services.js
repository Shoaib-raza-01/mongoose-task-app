const taskRepository = require("../repositories/task-repository");

const UPDATEABLE_FIELD = ["title", "description"];
const addNewTask = async (task) => {
  return await taskRepository.addNewTask(task);
}
const getTaskById = async (taskId) => {
  return await taskRepository.getTaskById(taskId);
}

const updateTaskById =async (taskId, dataToUpdate) => {
  let updateObject = {}
  UPDATEABLE_FIELD.forEach((field) => {
    dataToUpdate[field] && (updateObject[field] = dataToUpdate[field]);
  })

  if(Object.keys(updateObject).length){
    const updatedTask=await taskRepository.updateTaskById(taskId, updateObject);
    return updatedTask;
  }
  console.error("unable to update...")
}

const deleteTaskById = async (taskId) => {
  return await taskRepository.deleteTaskById(taskId);
}
module.exports = {
  addNewTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
}