const taskServices = require("../services/task-services");

const addNewTask = async (req,res) =>{
  try{
    const {title, description, owner} = req.body;
    let task = {title, description, owner};
    task = await taskServices.addNewTask(task);
    return res.status(201).send(task)
  }catch(err) {
    console.log("Error in adding new Task : ", err);
    return res.status(400).send({message: err.message});
  }
}

const getTaskById = async (req,res) => {
  try{
    const {id : taskId } = req.params
    let task =await taskServices.getTaskById(taskId)
    if(!task) {
      return res.status(400).send({message: "task with given id was not found.."})
    }
    return res.status(201).send(task);
  }catch(err){
    console.log('error getting tasks by id  :  ', err);
    return res.status(500).send({message: err.message});
  }
};

const updateTaskById = async (req,res) => {
  try{
    const {id } = req.params
    // const {title, description} = req.body;
    // let updatedData={ title ,description };
    let updatedData = req.body
    //updating the data using service method
    let result = await taskServices.updateTaskById(id,updatedData);
    if(result){
      return res.status(201).send({"success": true,"status" :"Updated successfully!"
    });
    }
    return res.status(400).send({"success": false,"status" :"Update failed!"
  })
  }catch(err){
    return res.status(500).send({message : "Updation failed..."})
  }
}

const deleteTaskById = async (req,res) => {
  try{
    const {id }= req.params;
    let deletedResult = await taskServices.deleteTaskById(id);
    if (!deletedResult ) {
      return res.status(400).send({message : "deletion failed......."})
  }
  return res.status(201).send({message:"deleted successfully"})
}catch (err){
  return res.status(500).send({message : err.message})
}
}

module.exports = {
  addNewTask,
  getTaskById,
  updateTaskById,
  deleteTaskById
}