const membersDAL = require("../DAL/membersDAL");

const Member = require("../models/membersModel");

exports.findAllMembers = () => {
  return new Promise((resolve, reject) => {
    Member.find({}, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.getMembers = async () => {
  const response = await membersDAL.getAll();
  return response.data;
};

///
exports.insertMembers = async () => {
  const response = await membersDAL.getAll();
  const users = response.data;

  return new Promise((resolve, reject) => {
    users.forEach((x) => {
      const member = new Member({
        Name: x.name,
        Email: x.email,
        City: x.address.city,
      });

      member.save((err) => {
        if (err) {
          reject(err);
        } else {
          resolve("Member created!");
        }
      });
    });
  });
};
