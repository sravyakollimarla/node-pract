const users=require("../models/userModel");


// src/services/userService.js

const getAllUsers = () => {
  
  return [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
};

const getUserById = (id) => {
  return { id, name: `User${id}` };
};

const createUser = (userData) => {
  return { id: new Date().getTime(), ...userData };
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser
};

