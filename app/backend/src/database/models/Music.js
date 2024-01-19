module.exports = (sequelize, DataTypes) => {
  const musicModel = sequelize.define('Music', {
      id: { 
          type: DataTypes.INTEGER,
          primaryKey: true,
      },
      music: { 
        type: DataTypes.STRING,
        allowNull: false,
      },
      band: { 
        type: DataTypes.STRING,
        allowNull: false,
      },
      instrument: { 
        type: DataTypes.STRING,
        allowNull: false,
      },
      key: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: { 
        type: DataTypes.STRING,
        allowNull: false,
      },
  }, {
      tableName: 'musics',
      underscored: true,
      timestamps: false,
  })

  return musicModel;
};