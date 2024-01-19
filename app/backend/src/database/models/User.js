module.exports = (sequelize, DataTypes) => {
  const userModel = sequelize.define('User', {
      id: { 
          type: DataTypes.INTEGER,
          primaryKey: true,
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
      },
      
  }, {
      tableName: 'users',
      underscored: true,
      timestamps: false,
  })
  return userModel;
};