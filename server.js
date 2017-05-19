var express = require("express");
var app = express();
var pallete = require('lib/get_pallete.js') 

app.set('view engine', 'jade');

app.get("/", function (req, res) {
  res.render("index", { palette: pallete });
});

console.log("Server runing on http://localhost:9000")
app.listen(9000);
