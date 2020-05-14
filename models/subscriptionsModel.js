const mongoose = require("mongoose");

const Schema = mongoose.Schema();

const SubscriptionSchema = new Schema({
  MemberId: ObjectId(_id),
  Movies: [{ movieId: ObjectId(), date: Date }],
});

module.exports = mongoose.model("subscriptions", SubscriptionSchema);
