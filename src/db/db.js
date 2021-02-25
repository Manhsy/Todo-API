//reference: https://mongoosejs.com/docs/
const mongoose = require('mongoose');
// connect to database
mongoose.connect(
    "mongodb+srv://Todo:AuT77h@97DJYyeD@cluster0.27zwa.mongodb.net/todos?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  const db = mongoose.connection;

  db.once("open", function () {
    console.info("successfully connected to MongoDB!");
  });
  
  module.exports = mongoose;