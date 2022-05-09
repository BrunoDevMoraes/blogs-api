const { User } = require('../models');
const { createToken } = require('../jwt');

const addUser = async ({ displayName, email, password, image }) => {
  const userByEmail = await User.findOne({ where: { email } });
  if (!userByEmail) {
    const user = await User.create({
      displayName,
      email,
      password,
      image,
    });
    const token = createToken({
      id: user.dataValues.id,
      displayName: user.dataValues.displayName,
      image: user.dataValues.image,
      email: user.dataValues.email,
    });
    return { token };
  }
  return false;
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users.map((user) => user.dataValues);
};

const getById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!user) {
    return false;
  }

  return user.dataValues;
};

const logIn = async ({ email, password }) => {
  const userByEmail = await User.findOne({ where: { email } });
  if (!userByEmail || userByEmail.dataValues.password !== password) {
    return false;
  }
  const token = createToken({
    id: userByEmail.dataValues.id,
    displayName: userByEmail.dataValues.displayName,
    image: userByEmail.dataValues.image,
    email: userByEmail.dataValues.email,
  });
  return { token };
};

module.exports = {
  addUser,
  getAll,
  getById,
  logIn,
};
