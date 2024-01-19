const { Router } = require('express');
const userController = require('../controller/userController');
const loginValidate = require('../middlewares/loginValidate');
const tokenValidate = require('../middlewares/tokenValidate');

const userRouter = Router();

userRouter.post('/login', loginValidate.validateLogin, async (req, res) => userController.login(req, res));
userRouter.get('/login/role', tokenValidate.validateToken, async (req, res) => userController.userLogin(req, res));
userRouter.get('/admin',  tokenValidate.validateToken, async (req, res) => userController.getUsers(req, res));
userRouter.post('/admin/create', tokenValidate.validateToken, async (req, res) => userController.createUser(req, res))

module.exports = userRouter;
