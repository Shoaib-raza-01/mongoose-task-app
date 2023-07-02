const BadRequestException = require("../exceptions/BadRequestException");
const User = require("../models/Users");


const addNewUser = async (user) => {
  try{
  user = new User(user);
  await user.save();
  console.log(`A new user with email : ${user.email} was added....`);
  return user;
  }catch(err){
    throw new BadRequestException("user" , "please enter valid values for the entity.")
  };
};

const getUserById = async (userId) => {
  const user = await User.findById({ _id: userId });
  if (!user) {
    console.log(`User with userId : ${userId} was not found.........`);
    return null;
  }
  console.log(`user With UserId : ${userId} was successfully fetched from the database.......`);
  return user;
};

const updateUserById = async (userId, updateObject) => {
    const updateResult = await User.updateOne(
      { _id: userId },
      { $set: updateObject }
    );
    if (updateResult.matchedCount) {
      console.log(`User with id: ${userId} was updated successfully....`)
      return true;
    }
    console.error(`User with id: ${userId} was not found in the database......`);
    return false;
};

const deleteUserById = async (userId) => {
  const deleteUser = await User.deleteOne(
    {_id : userId}
  );
  if(deleteUser.deletedCount){
    console.log(`user with id: ${userId} was deleted successfully........`)
    return true;
  }
  console.error(`user with id: ${userId} was not found........`)
  return false;
};

module.exports = {
  addNewUser,
  deleteUserById,
  updateUserById,
  getUserById,
}