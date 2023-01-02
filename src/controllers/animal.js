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
  async updateAnimal(req, res) {
    if (!req.file) {
      const err = new Error("harap masukkan file");
      err.errorStatus = 422;
      throw err;
    }
    console.log(req.params.idAnimal);

    const data = {
      name: req.body.name,
      jenis: req.body.jenis,
      harga: req.body.harga,
      images: req.file.path,
    };
    Animal.update(data, {
      where: {
        id: req.params.idAnimal,
      },
    })
      .then((result) => {
        res.status(202).json({
          message: "data update",
          data: result,
        });
      })
      .catch((err) => res.status(422).json(err));
  },
  async deleteAnimal(req, res) {
    console.log(req.params);
    Animal.destroy({
      where: {
        id: req.params.idAnimal,
      },
    })
      .then((result) => {
        res.status(204).json({
          message: "data Delete",
          data: result,
        });
      })
      .catch((err) => res.status(422).json(err));
  },
  async animalById(req, res) {
    await Animal.findAll({
      where: {
        id: req.params.idAnimal,
      },
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
};
