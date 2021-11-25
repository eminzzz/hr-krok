const { Schema, model } = require("mongoose");

const vacancieSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  hashTags: [{
    type: Schema.Types.ObjectId,
    ref: "hashTag",
  }],
  isShowed: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Vacancie", vacancieSchema);
