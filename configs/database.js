const mongoose = require("mongoose");
const membersBL = require("../models/membersBL");
const moviesBL = require("../models/moviesBL");

mongoose.connect("mongodb://localhost:27017/subscriptionsDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.once("open", async () => {
  console.log("DB connected!");

  try {
    const membersData = await membersBL.getAll();
    const moviesData = await moviesBL.getAll();

    if ((membersData.length && moviesData.length) === 0) {
      const members = await membersBL.getMembers();
      await db.collection("members").insertMany(members);

      const movies = await moviesBL.getMovies();
      await db.collection("movies").insertMany(movies);
    }
  } catch (e) {
    console.log(e);
  }
});
