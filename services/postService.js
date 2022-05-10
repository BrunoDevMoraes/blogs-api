const { BlogPost, Category, PostsCategory } = require('../models');

const addPost = async ({ title, categoryIds, content, payload }) => {
  const categories = categoryIds;

  categories.map(async (id) => {
    const idStatus = await Category.findByPk(id);
    if (idStatus) {
      return idStatus.dataValues.id;
    }
  });

  if (categories.length !== categoryIds.length) return false;

  const post = BlogPost.create({ title, content, userId: payload.id });

  console.log(post.dataValues);

  categoryIds.forEach(async (id) => PostsCategory.create({ postId: post.id, categoryId: id }));

  return { id: post.id, userId: post.userId, title: post.title, content: post.content };
};

module.exports = { addPost };