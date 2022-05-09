module.exports = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define(
    'PostCategory',
    {
    categoryId: DataTypes.INTEGER,
    },
    {
    timestamps: false,
    },
  );

  PostsCategory.associate = (models) => {
    PostsCategory.belongsTo(models.BlogPost, { as: 'post', foreignKey: 'postId' });
  };

  return PostsCategory;
};