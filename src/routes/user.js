const express = require("express");
const router = express.Router();

const { allUser, register } = require("../controllers/user");

router.get("/v1/allUser", allUser);
router.post("/v1/register", register);

module.exports = router;
