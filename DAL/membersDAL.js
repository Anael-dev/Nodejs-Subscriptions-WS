const axios = require("axios");

exports.getAll = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data.map((x) => {
    return {
      name: x.name,
      email: x.email,
      city: x.address.city,
    };
  });
};
