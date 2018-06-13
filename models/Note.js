// Require Mongoose
const mongoose = require("mongoose");
// Create a schema class
const Schema = mongoose.Schema;

// Create Note schema
var NoteSchema = new Schema({
  // String
  title: {
    type: String
  },
  // String
  body: {
    type: String
  },
  // String
  user: {
    type: String
  }
});

// Create the Note model with the NoteSchema
var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;