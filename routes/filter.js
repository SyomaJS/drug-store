const express = require("express");
const router = express.Router();
const filterController = require("../controllers/filter");

router.get("/", filterController.getFilter);
router.post("/", filterController.getFilterData);

module.exports = router;
