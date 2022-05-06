module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    },
    {
    timestamps: false,
    },
  );

  User.findAllClean = async () => User.findAll().map((user) => user.dataValues);

  return User;
};