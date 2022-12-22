const { Animal } = require("../models");
module.exports = {
  async allAnimal(req, res) {
    await Animal.findAll()
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
  async addAnimal(req, res) {
    await Animal.create({
      name: req.body.name,
      jenis: req.body.jenis,
      deskripsi: req.body.deskripsi,
      harga: req.body.harga,
      images: "images\\animal.jpeg",
    }).then((response) => {
      res.status(201).json(response);
    });
  },
};
