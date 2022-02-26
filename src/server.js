require("dotenv").config();
const express = require("express");
const app = express();
const start = require("./configs/db");
// const upload = require("./configs/multer");
const { register, login } = require("./controllers/auth");
const prodPage = require("./controllers/product");
// const { body } = require("express-validator");
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/product", prodPage);
app.post("/reg", register);
app.post("/log", login);
port = process.env.PORT || 80;
module.exports = async () => {
  try {
    start();
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

//make way for some custom css, js and images
// app.use("/css", express.static(__dirname + "/public/css"));
// app.use("/js", express.static(__dirname + "/public/js"));
// app.use("/images", express.static(__dirname + "/public/images"));

// var server = app.listen(8081, function () {
//   var port = server.address().port;
//   console.log("Server started at http://localhost:%s", port, __dirname);
// });
