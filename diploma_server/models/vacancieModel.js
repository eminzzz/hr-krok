const { Schema, model } = require("mongoose");

const vacancieSchema = new Schema({
  title: {
    type: String,
  },
  desctiption: {
    type: String,
  },
  hashTags: {
    type: Schema.Types.ObjectId,
    ref: "hashTag",
  },
  isShowed: {
    type: Boolean,
    default: true,
  },
});

module.exports = model("Vacancie", vacancieSchema);
