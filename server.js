// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const mongojs = require("mongojs");
const bodyParser = require("body-parser");

// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");

// Require the routes
var routes = require("./routes/routes");

// Require the models
const Article = require('./models/Article.js');
const Note = require('./models/Note.js');

// Set Handlebars.
const exphbs = require("express-handlebars");

// Set the PORT
const PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set the app up with body-parser, and a static folder
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));

// Import routes and give the server access to them.
app.use('/', routes);

// Listen on port 3000
app.listen(8080, () => {
  console.log("App running on port:" + PORT + "!");
});
