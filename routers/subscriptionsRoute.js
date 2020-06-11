const express = require("express");
const subscriptionsBL = require("../models/subscriptionsBL");

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const subscriptions = await subscriptionsBL.getAll();
    res.json(subscriptions);
  } catch (err) {
    res.send(err);
  }
});

router.route("/:id").get(async (req, res) => {
  try {
    const id = req.params.id;
    const subscription = await subscriptionsBL.getById(id);
    res.json(subscription);
  } catch (err) {
    res.send(err);
  }
});

router.route("/:id").delete(async (req, res) => {
  try {
    const id = req.params.id;
    const subscription = await subscriptionsBL.deleteSubscription(id);
    res.json(subscription);
  } catch (err) {
    res.send(err);
  }
});

router.route("/").post(async (req, res) => {
  try {
    const newSubscription = await subscriptionsBL.postSubscription(req.body);
    res.json(newSubscription);
  } catch (err) {
    res.send(err);
  }
});

router.route("/:id").put(async (req, res) => {
  try {
    const id = req.params.id;
    const updatedSubscription = await subscriptionsBL.editSubscription(id, req.body);
    res.json(updatedSubscription);
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
