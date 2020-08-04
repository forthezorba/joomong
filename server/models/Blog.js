const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "BlogCategory",
    },
    category_item: {
      type: Schema.Types.ObjectId,
      ref: "BlogCategory.sub_category",
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = { Blog };
