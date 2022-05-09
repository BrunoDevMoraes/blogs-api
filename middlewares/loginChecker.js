const loginChecker = (req, res, next) => {
  const object = req.body;
  console.log(object.email);
  if (object.email === undefined) return res.status(400).json({ message: '"email" is required' });
  if (object.email.length === 0) {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  if (object.password === undefined) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (object.password.length === 0) {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  next();
};

module.exports = {
  loginChecker,
};