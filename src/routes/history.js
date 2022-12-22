const express = require("express");
const { allHistoryAdopt } = require("../controllers/history");
const router = express.Router();

router.get("/v1/history", allHistoryAdopt);
// router.get()

module.exports = router;
