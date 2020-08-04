const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siteSchema = mongoose.Schema({
  category: {
    type: String,
  },
  todo:[{
    name: {
      type: String,
    },
    url: {
      type: String,
    },
    checked: {
      type: Boolean,
    },
    
  }],
  writer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Site = mongoose.model("Site", siteSchema);

module.exports = { Site };
