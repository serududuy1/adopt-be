const express = require("express");
const router = express.Router();
const {
  allAnimal,
  addAnimal,
  updateAnimal,
  deleteAnimal,
  animalById,
  animalByUser,
} = require("../controllers/animal");
const { accessControl, authorize } = require("../controllers/user");

router.get("/v1/allAnimal", allAnimal);
router.post("/v1/postAnimal", authorize(accessControl.USER), addAnimal);
router.put(
  "/v1/updateAnimal/:idAnimal",
  authorize(accessControl.USER),
  updateAnimal
);
router.delete(
  "/v1/deleteAnimal/:idAnimal",
  authorize(accessControl.USER),
  deleteAnimal
);
router.get("/v1/animalById/:idAnimal", animalById);
router.get("/v1/animalByUser/:idUser", animalByUser);
module.exports = router;
