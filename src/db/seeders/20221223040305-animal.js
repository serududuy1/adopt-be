"use strict";
const { Op } = require("sequelize");

const names = ["Kucing", "Anjing", "Kelinci"];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const timestamp = new Date();
    const users = names.map((name) => ({
      idUser: 1,
      name: name,
      jenis: "mamalia",
      deskripsi: "hewan yang lucu, jinak",
      harga: "1000000",
      images: "images\\animal.png",
      createdAt: timestamp,
      updatedAt: timestamp,
    }));

    await queryInterface.bulkInsert("Animals", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      "Animals",
      { name: { [Op.in]: names } },
      {}
    );
  },
};
