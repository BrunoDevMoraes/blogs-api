const { displayNameChecker } = require('../helpers/displayNameChecker');
const { emailChecker } = require('../helpers/emailChecker');
const { passwordChecker } = require('../helpers/passwordChecker');

const checkUserBody = (req, res, next) => {
  const object = req.body;
  const displayNameStatus = displayNameChecker(object.displayName);
  const emailStatus = emailChecker(object.email);
  const passwordStatus = passwordChecker(object.password);

  if (displayNameStatus !== true) {
    return res.status(displayNameStatus.status).json({ message: displayNameStatus.message });
  }
  if (emailStatus !== true) {
    return res.status(emailStatus.status).json({ message: emailStatus.message });
  }
  if (passwordStatus !== true) {
    return res.status(passwordStatus.status).json({ message: passwordStatus.message });
  }
  next();
};

module.exports = {
  checkUserBody,
};