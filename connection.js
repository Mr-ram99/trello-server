const mongoose = require("mongoose");

const connectMongoDB = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to trello database");
    })
    .catch((error) => {
      console.log("database not connected:", error);
    });
};

module.exports = { connectMongoDB };
