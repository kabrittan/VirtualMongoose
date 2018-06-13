// Require Mongoose
const mongoose = require("mongoose");
const mongojs = require("mongojs");

//Set access to ES6 Promises
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/virtualmongoose");
const db = mongoose.connection;

// Database configuration
//const databaseUrl = "virtualmongoose";
//const collections = ["scrapedData"];

// Hook mongojs configuration to the db variable
//const db = mongojs(databaseUrl, collections);

// Show connection errors
db.on("error", function(error) {
  console.log("Database Error: ", error);
});

//After connection to dB, log message
db.once("open", function() {
    console.log("Connection successful!");
});

// Export db
module.exports = db;