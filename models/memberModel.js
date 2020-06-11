const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let MemberSchema = new Schema({
  name: String,
  email: String,
  city: String,
});

module.exports = mongoose.model("members", MemberSchema);
