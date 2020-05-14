const axios = require("axios");

exports.getAll = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};
