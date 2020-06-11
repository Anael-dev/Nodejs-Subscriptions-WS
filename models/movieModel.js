const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let MovieSchema = new Schema({
  name: String,
  genres: [String],
  image: String,
  premiered: String,
});

module.exports = mongoose.model("movies", MovieSchema);
