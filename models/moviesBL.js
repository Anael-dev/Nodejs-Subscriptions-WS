const mongoose = require("mongoose");
const moviesDAL = require("../DAL/moviesDAL");

const Movie = require("../models/moviesModel");

exports.findAllMovies = () => {
  return new Promise((resolve, reject) => {
    Movie.find({}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.insertMovies = async () => {
  const response = await moviesDAL.getAll();
  const movies = response.data.slice(0, 10);

  return new Promise((resolve, reject) => {
    movies.forEach((x) => {
      const movie = new Movie({
        Name: x.name,
        Genres: x.genres,
        Image: x.image.medium,
        Premiered: x.premiered,
      });

      movie.save((err) => {
        if (err) {
          //   return res.send(err);
          reject(err);
        } else {
          //   return res.send("Member created!");
          resolve("Movie created!");
        }
      });
    });
  });
};
