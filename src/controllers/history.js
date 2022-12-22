const { HistoryAdopt, User, Animal } = require("../models");
module.exports = {
  async allHistoryAdopt(req, res) {
    await HistoryAdopt.findAll({
      include: [
        {
          model: User,
          attributes: [
            ["id", "idUser"],
            ["email", "email"],
            ["username", "username"],
            ["images", "images"],
            ["role", "role"],
          ],
        },
        {
          model: Animal,
          attributes: [
            ["id", "idAnimal"],
            ["name", "name"],
            ["jenis", "jenis"],
            ["images", "images"],
            ["deskripsi", "deskripsi"],
          ],
        },
      ],
    })
      .then((response) => {
        res.status(200).json({
          message: "berhasil",
          data: response,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "failed",
          message: err,
        });
      });
  },
  //   async addHistoryAdopt(req, res) {
  //     await HistoryAdopt.create({
  //       name: req.body.name,
  //       jenis: req.body.jenis,
  //       deskripsi: req.body.deskripsi,
  //       harga: req.body.harga,
  //       images: "images\\HistoryAdopt.jpeg",
  //     }).then((response) => {
  //       res.status(201).json(response);
  //     });
  //   },
};
