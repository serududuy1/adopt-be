const express = require("express");
const router = express.Router();
const {
  allAnimal,
  addAnimal,
  updateAnimal,
  deleteAnimal,
  animalById,
} = require("../controllers/animal");
const { accessControl, authorize } = require("../controllers/user");

router.get("/v1/allAnimal", allAnimal);
router.post("/v1/postAnimal", authorize(accessControl.ADMIN), addAnimal);
router.put(
  "/v1/updateAnimal/:idAnimal",
  authorize(accessControl.ADMIN),
  updateAnimal
);
router.delete(
  "/v1/deleteAnimal/:idAnimal",
  authorize(accessControl.ADMIN),
  deleteAnimal
);
router.get("/v1/animalById/:idAnimal", animalById);
module.exports = router;
