const categoriesService = require('../services/categoriesService');

const addCategory = async (req, res) => {
  const object = req.body;
  try {
    const newCategory = await categoriesService.addCategory(object.name);
    if (newCategory === false) return res.status(400).json({ message: '"name" is required' });
    return res.status(201).json(newCategory);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const allCategories = await categoriesService.getAll();
    return res.status(200).json(allCategories);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = { addCategory, getAll };