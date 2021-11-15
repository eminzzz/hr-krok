const { StatusCodes } = require("http-status-codes");
const { userModel } = require("../models");
const { DoesNotExist, AlreadyExist } = require("../messages/users");

const getAllUsers = async (req, res) => {
  const users = await userModel.find({});
  res.json(users).status(StatusCodes.OK);
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    res.json(user).status(StatusCodes.OK);
  } catch (e) {
    res.json({ error: DoesNotExist }).status(StatusCodes.NOT_FOUND);
  }
};

const createUser = async (req, res) => {
  const { firstName, lastName, userName, phoneNumber } = req.body;
  const candidate = await userModel.findOne({ phoneNumber: phoneNumber });
  if (candidate) {
    res.json({ error: AlreadyExist }).status(StatusCodes.CONFLICT);
    return;
  }
  const userToRegister = {
    firstName,
    lastName,
    userName,
    phoneNumber,
  };
  await userModel.create({ ...userToRegister });
  res.json(userToRegister).status(StatusCodes.CREATED);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
