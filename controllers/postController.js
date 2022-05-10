const postService = require('../services/postService');

const addPost = async (req, res) => {
  const object = req.body;
  try {
    const post = await postService.addPost(object);
    if (post === false) return res.status(400).send({ message: '"categoryIds" not found' });
    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = { addPost };