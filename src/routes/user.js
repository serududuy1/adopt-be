const express = require("express");
const router = express.Router();

const {
  allUser,
  register,
  login,
  updateUser,
  accessControl,
  authorize,
} = require("../controllers/user");
// end point all

router.post("/v1/register", register);
router.post("/v1/login", login);

// end point customer
router.put("/v1/updateUser", authorize(accessControl.USER), updateUser);

// end point admin
router.get("/v1/allUser", authorize(accessControl.ADMIN), allUser);
router.put("/v1/updateAdmin", authorize(accessControl.ADMIN), updateUser);

module.exports = router;
