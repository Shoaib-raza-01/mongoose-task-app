const userRepository = require("../repositories/user-repository");
const BadRequestException = require("../exceptions/BadRequestException");

const EDITALE_USER_FIELDS = ["name", "password", "age"];

const addNewUser = async (user) => {
  user = await userRepository.addNewUser(user);
  return user;
};

const getUserById = async (userId) => {
  const user = await userRepository.getUserById(userId);
  return user;
};

const updateUserById = async (userId, dataToUpdate) => {
  let updateObject = {};
  EDITALE_USER_FIELDS.forEach(
    (field) => {
      dataToUpdate[field] && (updateObject[field] = dataToUpdate[field])
    }
  );
  if (Object.keys(updateObject).length) {
    const isUpdated = await userRepository.updateUserById(userId, updateObject);
    return isUpdated;
  }
  throw new BadRequestException("user", "Please enter valid field names");
};

const deleteUserById = async (userId) => {
  const deleteUser = await userRepository.deleteUserById(userId);
  return deleteUser;
};

const getAllUsers = async () => {
  const user = await userRepository.getAllUsers();
  return user;
}

module.exports = {
  addNewUser,
  getUserById,
  updateUserById,
  deleteUserById,
  getAllUsers,
}