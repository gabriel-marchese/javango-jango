const { userService } = require('../services/index');

const  login = async (req, res) => {
  const { email, password } = req.body;
  const serviceResponse = await userService.verifyLogin({ email, password });
  if (serviceResponse.status === 'INVALID_DATA') {
    return res.status(400).json(serviceResponse.data);
  }
  if (serviceResponse.status === 'UNAUTHORIZED') {
    return res.status(401).json(serviceResponse.data);
  }
  return res.status(200).json(serviceResponse.data);
}

const userLogin = async (req, res) => {
  const { user } = res.locals;
  const serviceResponse = await userService.findEmail(user.email);
  if ('role' in serviceResponse.data) {
    const { role } = serviceResponse.data;
    return res.status(200).json({ role });
  }
  return res.status(401).json({ message: 'User not found' });
}

const getUsers = async (req, res) => {
  const { user } = res.locals;
  
  const serviceResponse = await userService.getUsers(user.role);
  return res.status(200).json(serviceResponse.data);
}

const createUser = async (req, res) => {
  const user = req.body;
  const serviceResponse = await userService.createUser(user);
  return res.status(200).json(serviceResponse.data);
}

module.exports = {
  login,
  userLogin,
  getUsers,
  createUser
}
