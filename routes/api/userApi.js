const express = require("express");
const uR = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userCon");  

// /api/user
uR.route("/").get(getAllUsers).post(createUser);

// /api/user/:id
uR.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// /api/user/:id/friends/:friendId
uR.route("/:id/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = uR;
