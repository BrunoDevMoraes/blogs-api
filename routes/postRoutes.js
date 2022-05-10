const express = require('express');
const postController = require('../controllers/postController');
const { authChecker } = require('../middlewares/authChecker');
const { postChecker } = require('../middlewares/postChecker');

const routes = express.Router();

routes.post('/', authChecker, postChecker, postController.addPost);

routes.get('/', authChecker, postController.getAll);

module.exports = routes;