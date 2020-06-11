const Subscription = require("./subscriptionModel");

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    Subscription.find({}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.getById = (id) => {
  return new Promise((resolve, reject) => {
    Subscription.findById(id, function (err, subscription) {
      if (err) {
        reject(err);
      } else {
        resolve(subscription);
      }
    });
  });
};

exports.deleteSubscription = (id) => {
  return new Promise((resolve, reject) => {
    Subscription.findByIdAndDelete(id, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("deleted");
      }
    });
  });
};

exports.postSubscription = (reqBody) => {
  const newSubscription = new Subscription(reqBody);
  return new Promise((resolve, reject) => {
    newSubscription.save(function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.editSubscription = (id, reqBody) => {
  return new Promise((resolve, reject) => {
    Subscription.findByIdAndUpdate(
      // find by document id and update and push item in array
      id,
      { $push: { movies: reqBody } },
      { safe: true, upsert: true },
      function (err, doc) {
        if (err) {
          reject(err);
        } else {
          resolve(doc);
          //do stuff
        }
      }
    );
  });
};
