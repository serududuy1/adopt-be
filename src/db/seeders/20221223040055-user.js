"use strict";
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");

const names = ["Adnan", "Bambang", "Jeje", "Maul", "Setya", "Jaya"];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const password = "123456";
    const encryptedPassword = bcrypt.hashSync(password, 10);
    const saldo = "1000000";
    const images = "images\\avatar.jpeg";
    const timestamp = new Date();
    const address = "jl kebagusan 3 no 12s, jaksel";

    const users = names.map((name) => ({
      username: name,
      email: `${name.toLowerCase()}@mail.com`,
      password: encryptedPassword,
      images,
      address,
      saldo,
      role: 1,
      createdAt: timestamp,
      updatedAt: timestamp,
    }));

    await queryInterface.bulkInsert("Users", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", { name: { [Op.in]: names } }, {});
  },
};
