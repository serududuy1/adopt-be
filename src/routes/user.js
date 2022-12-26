const express = require("express");
const router = express.Router();

const { allUser, register, login } = require("../controllers/user");

router.get("/v1/allUser", allUser);
router.post("/v1/register", register);
router.post("/v1/login", login);

module.exports = router;
