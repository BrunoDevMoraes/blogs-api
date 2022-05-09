const passwordChecker = (password) => {
  if (!password) return { status: 400, message: '"password" is required' };
  if (password.length !== 6) {
    return {
      status: 400,
      message: '"password" length must be 6 characters long',
    };
  }
  return true;
};

module.exports = {
  passwordChecker,
};
