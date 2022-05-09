const express = require('express');
const userController = require('../controllers/userController');
const { checkUserBody } = require('../middlewares/userMiddleware');
const { authChecker } = require('../middlewares/authChecker');

const routes = express.Router();

routes.get('/:id', authChecker, userController.getById);
routes.get('/', authChecker, userController.getAll);

routes.post('/', checkUserBody, userController.addUser);

module.exports = routes;