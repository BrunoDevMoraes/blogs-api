const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const { authChecker } = require('../middlewares/authChecker');

const routes = express.Router();

routes.post('/', authChecker, categoriesController.addCategory);

routes.get('/', authChecker, categoriesController.getAll);

module.exports = routes;