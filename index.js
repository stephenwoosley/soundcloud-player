var express = require("express");
var exphbs = require("express-handlebars");
var Soundcloud = require("soundcloud-audio");

var app = express();

var PORT = process.env.PORT || 8080;

app.set('view engine', 'handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.use(express.static('public'));

var player = new Soundcloud('95f22ed54a5c297b1c41f72d713623ef');

app.get('/', function (req, res) {
  
  res.render("index");
});

app.listen(PORT, function () {
  console.log('listening on PORT ' + PORT);
});