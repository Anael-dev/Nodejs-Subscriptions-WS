const express = require("express");
const moviesBL = require("../models/moviesBL");
const Movie = require("../models/movieModel");

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const movies = await moviesBL.getAll();
    res.json(movies);
  } catch (err) {
    res.send(err);
  }
});

router.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  try {
    const movie = await moviesBL.getById(id);
    res.json(movie);
  } catch (err) {
    res.send(err);
  }
});

router.route("/:id").delete(async (req, res) => {
  const id = req.params.id;
  try {
    const movie = await moviesBL.deleteMovie(id);
    res.json(movie);
  } catch (err) {
    res.send(err);
  }
});

router.route("/").post(async (req, res) => {
  try {
    const newMovie = await moviesBL.postMovie(req.body);
    res.json(newMovie);
  } catch (err) {
    res.send(err);
  }
});

router.route("/:id").put(async (req, res) => {
  const id = req.params.id;
  try {
    const updatedMovie = await moviesBL.editMovie(id, req.body);
    res.json(updatedMovie);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
