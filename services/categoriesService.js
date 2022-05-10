const { Category } = require('../models');

const addCategory = async (name) => {
  if (!name) return false;
  const newCategory = await Category.create({ name });
  return newCategory.dataValues;
};

const getAll = async () => {
  const allCategories = await Category.findAll();
  return allCategories.map((category) => category.dataValues);
};

module.exports = { addCategory, getAll };
