const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createConnection({
  host: process.env.HOST || "localhost",
  user: process.env.USER || "root",
  password: process.env.PASSWORD || "212wly13kz",
  database: process.env.DATABASE || "dorixona",
});

module.exports = pool;
