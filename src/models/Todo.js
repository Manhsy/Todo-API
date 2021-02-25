const mongoose = require("../db/db");

// create schema for a Todo object
// define column names and their datatypes
// schema is a function in mongoDB
const todoSchema = new mongoose.Schema({
  id: String,
  text: String,
  created_at: Number,
});

// make model
const Todo = mongoose.model("Todo", todoSchema);

// export so other files can use it
module.exports = Todo;

