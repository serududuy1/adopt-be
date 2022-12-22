const express = require("express");
const router = express.Router();
const { allAnimal, addAnimal } = require("../controllers/animal");

router.get("/v1/allAnimal", allAnimal);
router.post("/v1/postAnimal", addAnimal);

module.exports = router;
