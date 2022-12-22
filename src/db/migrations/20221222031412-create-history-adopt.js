"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("HistoryAdopts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idUser: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          as: "idUser",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      idAnimal: {
        type: Sequelize.INTEGER,
        references: {
          model: "Animals",
          key: "id",
          as: "idAnimal",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      dp: {
        type: Sequelize.STRING,
      },
      alamat: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("HistoryAdopts");
  },
};
