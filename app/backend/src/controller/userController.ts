import { Request, Response } from 'express';
import UserService from '../services/userServices';

class userController {
  constructor(private userService = new UserService()) {}

  public async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const serviceResponse = await this.userService.verifyLogin({ email, password });
    if (serviceResponse.status === 'INVALID_DATA') {
      return res.status(400).json(serviceResponse.data);
    }
    if (serviceResponse.status === 'UNAUTHORIZED') {
      return res.status(401).json(serviceResponse.data);
    }
    return res.status(200).json(serviceResponse.data);
  }

  public async userLogin(req: Request, res: Response): Promise<Response> {
    const { user } = res.locals;
    const serviceResponse = await this.userService.findEmail(user.email);
    if ('role' in serviceResponse.data) {
      const { role } = serviceResponse.data;
      return res.status(200).json({ role });
    }
    return res.status(401).json({ message: 'User not found' });
  }

  public async getUsers(req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.userService.getUsers();
    return res.status(200).json(serviceResponse.data);
  }

  public async createUser(req: Request, res: Response): Promise<Response> {
    const user = req.body;
    const serviceResponse = await this.userService.createUser(user);
    return res.status(200).json(serviceResponse.data);
  }
}

export default userController;
