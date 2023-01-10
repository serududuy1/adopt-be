const express = require("express");
const router = express.Router();

const {
  allUser,
  register,
  login,
  updateUser,
  accessControl,
  authorize,
  UserById,
  UserId,
  updateUserById,
} = require("../controllers/user");
// end point all

router.post("/v1/register", register);
router.post("/v1/login", login);
router.get("/v1/userId", authorize(accessControl.USER), UserId);
router.get("/v1/userById/:idU", UserById);

// end point customer
router.put("/v1/updateUser", authorize(accessControl.USER), updateUser);
router.put("/v1/updateUserById/:idUser", updateUserById);

// end point admin
router.get("/v1/allUser", authorize(accessControl.USER), allUser);
router.put("/v1/updateAdmin", authorize(accessControl.USER), updateUser);

module.exports = router;
