import User from '../Interfaces/Iuser';
import UserModelInterface from '../Interfaces/IUserModel';
import UserModel from '../database/models/User';
import Login from '../Interfaces/Ilogin';
import * as bcrypt from 'bcryptjs';

class UserModelT implements UserModelInterface {
  private userModel = UserModel;

  async findOne(email: Login['email']): Promise<User | null> {
    const data = await this.userModel.findOne({ where: { email } });
    if (data === null) {
      return null;
    }
    return data;
  }

  async getUsers(): Promise<User[]> {
    const data = await this.userModel.findAll();
    return data;
  }

  async createUser(user: User): Promise<User> {
    
    const newPassword = bcrypt.hashSync(user.name);

    const { name, email, role, price, payment, type, password = newPassword, isActive } = user;

    // Converta a string de pagamento para um objeto Date
    const paymentDate = new Date(payment);

    // Crie o usuário com a data convertida
    const data = await this.userModel.create({
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
}

export default UserModelT;
