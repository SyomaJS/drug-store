const pool = require("../config/connect");
const createPath = require("../helpers/createPath");

exports.getHomePage = (req, res) => {
  res.render("home");
};
