const { Schema, model } = require("mongoose");

const hashTagSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = model("hashTag", hashTagSchema);
