import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from 'sequelize';
  import db from '.';
  
  class User extends Model<InferAttributes<User>,
  InferCreationAttributes<User>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare role: string;
    declare email: string;
    declare password: string;
    declare isActive: boolean;
    declare price: number;
    declare payment: Date;
    declare type: string;
  }
  
  User.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    payment: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_active',
    }
  }, {
    sequelize: db,
    modelName: 'users',
    timestamps: false,
  });
  
  export default User;
  