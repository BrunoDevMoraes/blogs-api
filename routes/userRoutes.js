const express = require('express');
const userController = require('../controllers/userController');
const { checkUserBody } = require('../middlewares/userMiddleware');

const routes = express.Router();

routes.get('/', checkUserBody, userController.getAll);