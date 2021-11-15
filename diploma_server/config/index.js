// Remove code down
require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 2115,
  SERVER_URI: process.env.SERVER_URI,
  DATABASE_URI: process.env.DATABASE_URI,
};
