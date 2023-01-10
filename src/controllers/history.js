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
            ["idUser", "idUser"],
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
  async addHistoryAdopt(req, res) {
    await HistoryAdopt.create({
      idUser: req.user.id,
      idAnimal: req.body.idAnimal,
      dp: req.body.dp,
      alamat: req.body.alamat,
      status: req.body.status,
    })
      .then((response) => {
        res.status(201).json(response);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  },
  async updateHistoryAdopt(req, res) {
    await HistoryAdopt.update(req.body, {
      where: {
        id: req.body.id,
      },
    })
      .then((response) => {
        res.status(201).json(response);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  },
  async historyById(req, res) {
    await HistoryAdopt.findAll({
      where: {
        id: req.params.idhistory,
      },
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
            ["idUser", "idUser"],
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
  async historyByUser(req, res) {
    await HistoryAdopt.findAll({
      where: {
        idUser: req.user.id,
      },
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
            ["idUser", "idUser"],
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
};
