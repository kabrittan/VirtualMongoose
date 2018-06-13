// Require mongoose and the database connection
const db = require('../config/connect');
const mongoose = require("mongoose");

// Create Schema class
const Schema = mongoose.Schema;

// Create article schema
const ArticleSchema = new Schema({

  // Title is a required string
  headline: {
        type: String,
        required: true
    },
  // Link is a required string
  link: {
        type: String,
        required: true
    },
  // Image is a required string
   image: {
        type: String,
        required: true
    },

  //  Content is a required string
   content: {
        type: String,
        required: true
    },

//  Genre is a required string
    genre:  {
        type: String,
        require: true
    },

  // This only saves one note's ObjectId, ref refers to the Note model
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;