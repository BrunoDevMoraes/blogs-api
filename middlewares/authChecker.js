const { checkToken } = require('../jwt');

const authChecker = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  const tokenStatus = checkToken(token);
  if (tokenStatus === false) res.status(401).json({ message: 'Expired or invalid token' });
  req.payload = tokenStatus;
  next();
};

module.exports = {
  authChecker,
};
