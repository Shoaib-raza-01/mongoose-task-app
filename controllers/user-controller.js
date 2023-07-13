const BadRequestException = require("../exceptions/BadRequestException");
const userServices = require("../services/user-services");

const addNewUser = async (req, res) => {
  try {
    const { name, email, age, password } = req.body;
    let user = { name, email, age, password };
    user = await userServices.addNewUser(user);
    return res.status(201).send(user);
  } catch (err) {
    if(err instanceof BadRequestException){
      res.status(400).send({ message: "please use valid fields" })
    }
    res.status(500).send({ message: err.message })
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userServices.getUserById(req.params.id)
    return res.status(201).send(user);
  } catch (err) {
    return res.status(404).send({ message: err.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    let toUpdate = req.body
    const { id } = req.params
    const isUpdated = await userServices.updateUserById(id,toUpdate)
    if(isUpdated){
      console.log("updated.......");
      return res.status(200).send({message : "Successfully updated"})
    }
    console.error("updation failed....")
  } catch (err) {
    console.error(err)
    if(err instanceof BadRequestException){
      return  res.status(400).send({message : "please use valid filed names"})
    }
    return res.status(503).send({ message: "server error" });
  }
};

const deleteUserById =  async (req,res) => {
  try{
    const { id } = req.params;
    const deleteUser = await userServices.deleteUserById(id);
    if(deleteUser){
      return res.status(200).send({message:'Record deleted successfully'});
    }
    return res.status(400).send({message : "deletion has be failed...."})
  }catch(err){
    console.error('Error in deleting the record')
    return res.status(500).send({message : err.message});
  }
};

const getAllUsers = async (req,res) => {
  try{
    const usersList=await userServices.getAllUsers();
    return res.status(201).send(usersList);
  } catch (err) {
    return res.status(400).send({message : err.message})
  }
}

const loginUser = async (req, res) => {
  try{
  const {email, password} = req.body;
  const user = await userServices.loginUser(email,password)
  return res.status(201).send(user)
  }catch(err){
    return res.status(500).send({message: err.message})
  }
}

module.exports = {
  addNewUser,
  getUserById,
  updateUserById,
  deleteUserById,
  getAllUsers,
  loginUser
}