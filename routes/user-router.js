const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");

router.post("/add",userController.addNewUser);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUserById);
router.delete("/:id",userController.deleteUserById);

module.exports = router;