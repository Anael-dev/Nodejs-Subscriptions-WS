const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SubscriptionSchema = new Schema({
  memberId: String,
  movies: [{movieId: String, date: String }],
});

module.exports = mongoose.model("subscriptions", SubscriptionSchema);
