const express = require("express");
const router = express.Router();

router.use("/", require("./home"));
router.use("/medicine", require("./medicine"));
router.use("/filter", require("./filter"));

module.exports = router;
