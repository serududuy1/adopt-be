"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Animal.belongsTo(models.User, {
        foreignKey: "idUser",
      });
    }
  }
  Animal.init(
    {
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      jenis: DataTypes.STRING,
      deskripsi: DataTypes.STRING,
      harga: DataTypes.STRING,
      images: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Animal",
    }
  );
  return Animal;
};
