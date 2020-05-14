const axios = require("axios");

exports.getAll = () => {
  return axios.get("https://api.tvmaze.com/shows");
};
