const emailChecker = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  if (!email) return { status: 400, message: '"email" is required' };
  const isValid = emailRegex.test(email);
  if (!isValid) return { status: 400, message: '"email" must be a valid email' };
  return true;
};

module.exports = {
  emailChecker,
};
