const userService = require('../services/userService');

const addUser = async (req, res) => {
  const object = req.body;
  try {
    const user = await userService
      .addUser(object.displayName, object.email, object.password, object.password);
    if (user === false) return res.status(409).json({ message: 'User already registered' });
    return res.status(201).json(user);
  } catch (err) {
      return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  addUser,
};
