const express = require("express");
const {
  allHistoryAdopt,
  addHistoryAdopt,
  historyById,
} = require("../controllers/history");
const { authorize, accessControl } = require("../controllers/user");
const router = express.Router();

router.get("/v1/history", allHistoryAdopt);
router.post("/v1/addHistory", authorize(accessControl.USER), addHistoryAdopt);
router.get(
  "/v1/history/:idhistory",
  authorize(accessControl.USER),
  historyById
);
// router.get()

module.exports = router;
