const bcrypt = require('bcryptjs');
const { userModel } = require('../models/index');
const jwt = require('../utils/jwt');


const verifyLogin = async (login) => {
    if (!login.email || !login.password) {
      return {
        status: 'INVALID_DATA',
        data: { message: 'All fields must be filled' },
      };
    }
    const user = await userModel.findOne(login.email);
    const valid = user && bcrypt.compareSync(login.password, user.password);
    if (!valid) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }
    const { email } = user;
    const token = jwt.sign({ email });
    return { status: 'SUCCESSFUL', data: { token } };
}

const findEmail = async (email) => {
    const user = await userModel.findOne(email);
    if (!user) {
      return { status: 'UNAUTHORIZED', data: { message: 'User not found' } };
    }
    return { status: 'SUCCESSFUL', data: user };
}

const getUsers = async (role) => {
    const user = await userModel.getUsers(role);
    console.log(role);
    return { status: 'SUCCESSFUL', data: user };
}

const createUser = async (user) => {
    const newUser = await userModel.createUser(user);
    return { status: 'SUCCESSFUL', data: user };
}

module.exports = {
  verifyLogin,
  findEmail,
  getUsers,
  createUser,
}
