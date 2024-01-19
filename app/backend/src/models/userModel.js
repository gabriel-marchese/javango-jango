const { User } = require('../database/models/');
const bcrypt = require('bcryptjs');

const findOne = async (email) => {
  const data = await User.findOne({ where: { email } });
  if (data === null) {
    return null;
  }
  return data;
}

const getUsers = async (role) => {
  const data = await User.findAll({ where: { role: "user" } });
  
  return data;
}

const createUser = async (user) => {
  
  const newPassword = bcrypt.hashSync(user.name);

  const { name, email, role, price, payment, type, password = newPassword, isActive } = user;

  // Converta a string de pagamento para um objeto Date
  const paymentDate = new Date(payment);

  // Crie o usuário com a data convertida
  const data = await User.create({
    name,
    email,
    role,
    price,
    payment: paymentDate,
    type,
    password,
    isActive,
  });

  return data;
}

module.exports = {
  findOne,
  getUsers,
  createUser,
}
