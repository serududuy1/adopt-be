const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SALT = 10;

const encryptPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, SALT, (err, encryptedPassword) => {
      if (!!err) {
        reject(err);
        return;
      }
      resolve(encryptedPassword);
    });
  });
};

const checkPassword = (encryptedPassword, password) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, encryptedPassword, (err, isPasswordCorrect) => {
      if (!!err) {
        reject(err);
        return;
      }
      resolve(isPasswordCorrect);
    });
  });
};

const createToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET || "Rahasia", {
    expiresIn: "1d",
  });
};

module.exports = {
  accessControl: {
    USER: 1,
    ADMIN: 2,
  },
  async allUser(req, res) {
    await User.findAll()
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
  async register(req, res) {
    const encryptedPassword = await encryptPassword(req.body.password);
    let existingUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (existingUser) {
      res.status(422).json({
        message: "Email sudah dipakai",
        x,
      });
      return;
    }

    await User.create({
      username: req.body.username,
      password: encryptedPassword,
      email: req.body.email,
      saldo: 0,
      images: "images\\avatar.png",
      role: 1,
    }).then((response) => {
      res.status(201).json({
        data: response,
        available: true,
      });
    });
  },
  async login(req, res) {
    const email = req.body.email;
    const pwd = req.body.password;
    const loginAccess = await User.findOne({
      where: {
        email: email,
      },
    });
    if (!loginAccess) {
      res.status(404).json({
        message: "Email tidak ditemukan",
      });
      return;
    }
    const isPasswordCorrect = await checkPassword(loginAccess.password, pwd);
    if (!isPasswordCorrect) {
      res.status(401).json({
        message: "Password salah!",
      });
      return;
    }
    const accessToken = createToken({
      id: loginAccess.id,
      username: loginAccess.username,
      email: loginAccess.email,
      role: loginAccess.role,
    });

    res.status(200).json({
      statusLogin: "Berhasil",
      email: loginAccess.email,
      token: `Bearer ${accessToken}`,
      createdAt: loginAccess.createdAt,
      updatedAt: loginAccess.updatedAt,
    });
  },
};
