const userService = require("../services/userService");

const getUsers = (req, res) => {
  const allUsers = userService.getAllUsers();
  res.json(allUsers);
};

const getUser = (req, res) => {
  const id = parseInt(req.params.id);
  const user = userService.getUserById(id);
  if (!user) return res.status(404).send("User not found");
  res.json(user);
};

const createUser = (req, res) => {
  const newUser = req.body;
  const user = userService.addUser(newUser);
  res.status(201).json(user);
};

module.exports = {
  getUsers,
  getUser,
  createUser,
};
