const mongoose = require("mongoose");

// create blog schema
// if u dont want to use mongoose.Schema or mongoose.model you can just const {Schema, model} = mongoose

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    lowercase: true,
  },
  published: {
    type: Boolean,
    default: false,
  },
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  content: String,
  tags: [String],
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: Date,
  comments: [
    {
      user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true,
      },
      content: String,
      votes: Number,
    },
  ],
});

blogSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
