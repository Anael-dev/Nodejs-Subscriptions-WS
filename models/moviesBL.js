const mongoose = require("mongoose");
const moviesDAL = require("../DAL/moviesDAL");

const Movie = require("./movieModel");

exports.getMovies = async () => {
  const response = await moviesDAL.getAll();
  const movies = response.slice(0, 10);
  return movies;
};

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    Movie.find({}, function (err, movies) {
      if (err) {
        reject(err);
      } else {
        resolve(movies);
      }
    });
  });
};

exports.getById = (id) => {
  return new Promise((resolve, reject) => {
    Movie.findById(id, function (err, movie) {
      if (err) {
        reject(err);
      } else {
        resolve(movie);
      }
    });
  });
};

exports.deleteMovie = (id) => {
  return new Promise((resolve, reject) => {
    Movie.findByIdAndDelete(id, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("deleted");
      }
    });
  });
};

exports.postMovie = (reqBody) => {
  const newMovie = new Movie(reqBody);
  return new Promise((resolve, reject) => {
    newMovie.save(function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.editMovie = (id, reqBody) => {
  return new Promise((resolve, reject) => {
    Movie.findByIdAndUpdate(id, reqBody, function (err, movie) {
      if (err) {
        reject(err);
      } else {
        resolve(movie);
      }
    });
  });
};
