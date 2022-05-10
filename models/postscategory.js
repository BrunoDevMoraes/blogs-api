module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define(
    'PostsCategory',
    {},
    { timestamps: false },
  );

  PostsCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts', foreignKey: 'categoryId', through: PostsCategory, otherKey: 'postId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories', foreignKey: 'postId', through: PostsCategory, otherKey: 'categoryId',
    });
  };

  return PostsCategory;
};
