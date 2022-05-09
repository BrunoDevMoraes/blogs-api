const express = require('express');
const userController = require('../controllers/userController');
const { loginChecker } = require('../middlewares/loginChecker');

const routes = express.Router();

routes.post('/', loginChecker, userController.logIn);

module.exports = routes;