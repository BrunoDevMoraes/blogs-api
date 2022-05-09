const { Category } = require('../models');

const addCategory = async (name) => {
  if (!name) return false;
  const newCategory = await Category.create({ name });
  console.log(newCategory.dataValues);
  return newCategory.dataValues;
};

module.exports = { addCategory };
