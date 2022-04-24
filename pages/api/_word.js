const mongoose = require("mongoose");

const WordSchema = new mongoose.Schema({
  geez: {
    type: String,
    required: false,
  },
  amharic: {
    type: String,
    required: true,
  },
  english: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.models?.Word || mongoose.model("Word", WordSchema);
