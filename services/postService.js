const { BlogPost, Category, PostsCategory, User } = require('../models');

const addPost = async ({ title, categoryIds, content, payload }) => {
  const allCategories = await Category.findAll();

  const data = allCategories.map((user) => user.dataValues.id);

  const verifiedArr = categoryIds.map((id) => data.includes(id));

  if (verifiedArr.includes(false)) return false;

  const post = await BlogPost.create({ title, content, userId: payload.id });

  categoryIds.forEach(async (id) => PostsCategory.create({ postId: post.id, categoryId: id }));

  return { id: post.id, userId: post.userId, title: post.title, content: post.content };
};

const getAll = async () => {
  const allPosts = await BlogPost.findAll({
    attributes: { exclude: ['createdAt, updatedAt'] },
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });
  return allPosts.map((category) => category.dataValues);
};

module.exports = { addPost, getAll };