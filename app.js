const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.static("styles"));
app.use(express.static("images"));
app.use(express.static("views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));



const routes = require("./routes/index");
app.use("/", routes);

// End ------
app.listen(process.env.PORT || 8080, () => {
  console.log("Listening on port " + process.env.PORT);
});
