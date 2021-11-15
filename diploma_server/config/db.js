const mongoose = require("mongoose");
const { databaseConnectionMessage } = require("../messages");
const { DATABASE_URI } = require("./");

const connectDatabase = async () => {
  try {
    await mongoose.connect(DATABASE_URI);
    console.log(databaseConnectionMessage);
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectDatabase;
