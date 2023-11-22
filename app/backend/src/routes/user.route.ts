import { Router } from 'express';
import UserController from '../controller/userController';
import loginValidate from '../middlewares/loginValidate';
import tokenValidate from '../middlewares/tokenValidate';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/login', loginValidate.validateLogin, async (req, res) => userController.login(req, res));
userRouter.get('/login/role', tokenValidate.validateToken, async (req, res) => userController.userLogin(req, res));
userRouter.get('/admin',  tokenValidate.validateToken, async (req, res) => userController.getUsers(req, res));
userRouter.post('/admin/create', tokenValidate.validateToken, async (req, res) => userController.createUser(req, res))

export default userRouter;
