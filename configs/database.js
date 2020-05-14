const mongoose = require("mongoose");
const membersBL = require("../models/membersBL");
const moviesBL = require("../models/moviesBL");

const Member = require("../models/membersModel");
const Movie = require("../models/moviesModel");

mongoose.connect("mongodb://localhost:27017/subscriptionsDB", {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.once("open", async () => {
  console.log("DB connected!");

  try {
    const membersData = await membersBL.findAllMembers();
    if (membersData.length === 0) {
      const response = await membersBL.insertMembers();
      console.log(response);
    }
    const moviesData = await moviesBL.findAllMovies();
    if (moviesData.length === 0) {
      const response = await moviesBL.insertMovies();
      console.log(response);
    }
  } catch (err) {
    console.log(err);
  }
});
