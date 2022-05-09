const { User } = require('../models');
const { createToken } = require('../jwt');

const addUser = async ({ displayName, email, password, image }) => {
  console.log(email);
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

module.exports = {
  addUser,
  getAll,
  getById,
};
