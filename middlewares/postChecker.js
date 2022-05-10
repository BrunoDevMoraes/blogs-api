const postChecker = async (req, res, next) => {
  const object = req.body;
  if (!object.title) return res.status(400).json({ message: '"title" is required' });
  if (!object.content) return res.status(400).json({ message: '"content" is required' });
  if (!object.categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });
  next();
};

module.exports = { postChecker };