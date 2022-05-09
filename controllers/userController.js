const userService = require('../services/userService');

const addUser = async (req, res) => {
  const object = req.body;
  try {
    const token = await userService.addUser(object);
    if (token === false) return res.status(409).json({ message: 'User already registered' });
    return res.status(201).json(token);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const users = await userService.getAll();
    return res.status(401).json(users);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const getById = async (req, res) => {
  const object = req.params;
  try {
    const user = await userService.getById(object.id);
    if (!user) return { status: 404, message: 'User does not exist' };
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  addUser,
  getAll,
  getById,
};
