const express = require("express");
const router = express.Router();
const controllerMedicine = require("../controllers/medicine");

router.post("/", controllerMedicine.getMedicine);

module.exports = router;
