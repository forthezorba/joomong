const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogCategory = mongoose.Schema(
  {
    category: {
      type: String,
    },
    sub_category:[{
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
  },
  { timestamps: true }
);

const BlogCategory = mongoose.model("BlogCategory", blogCategory);

module.exports = { BlogCategory };
