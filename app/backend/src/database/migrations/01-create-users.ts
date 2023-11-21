import { DataTypes, Model, QueryInterface } from 'sequelize';
import User from '../../Interfaces/Iuser';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<User>>('users', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'is_active',
      }
    })
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('users')
  }
}