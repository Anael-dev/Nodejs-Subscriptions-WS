const axios = require("axios");

exports.getAll = async () => {
  const response = await axios.get("https://api.tvmaze.com/shows");
  return response.data.map((x) => {
    return {
      name: x.name,
      genres: x.genres,
      premiered: x.premiered,
      image: x.image.medium,
    };
  });
};
