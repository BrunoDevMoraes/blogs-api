const express = require('express');
const categoriesController = require('../controllers/categoriesController');

const routes = express.Router();

routes.get('/', categoriesController.getAll);