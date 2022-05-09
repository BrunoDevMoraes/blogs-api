const displayNameChecker = (displayName) => {
  if (displayName.length < 8) {
    return {
      status: 400,
      message: '"displayName" length must be at least 8 characters long',
    };
  }
  return true;
};

module.exports = {
  displayNameChecker,
};
