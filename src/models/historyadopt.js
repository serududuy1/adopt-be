"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HistoryAdopt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HistoryAdopt.belongsTo(models.User, {
        foreignKey: "idUser",
      });
      HistoryAdopt.belongsTo(models.Animal, {
        foreignKey: "idAnimal",
      });
    }
  }
  HistoryAdopt.init(
    {
      idUser: DataTypes.INTEGER,
      idAnimal: DataTypes.INTEGER,
      dp: DataTypes.STRING,
      alamat: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "HistoryAdopt",
    }
  );
  return HistoryAdopt;
};
