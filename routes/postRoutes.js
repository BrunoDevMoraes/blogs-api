const express = require('express');
const postController = require('../controllers/postController');
const { authChecker } = require('../middlewares/authChecker');
const { postChecker } = require('../middlewares/postChecker');

const routes = express.Router();

routes.post('/', authChecker, postChecker, postController.addPost);

module.exports = routes;