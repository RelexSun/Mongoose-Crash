const mongoose = require("mongoose");
const Blog = require("./model/blog.js");
const bUser = require("./model/user.js");

const run = async () => {
  try {
    // connect with mongoDB
    await mongoose.connect(
      "mongodb+srv://sun:12345@cluster0.zdgud6i.mongodb.net/"
    );

    // Create a new user
    const user = await bUser.create({
      name: "SunSun",
      email: "sun@haha.lol",
    });

    //  Create a new blog post object
    const article = await Blog.create({
      title: "Awesome Post!",
      slug: "awesome-post",
      author: user._id,
      plublished: true,
      content: "This is the best post ever",
      tags: ["featured", "announcement"],
    });

    article.title = "Hahahah siuuuu";
    await article.save();

    // Insert the article in our MongoDB database
    // await article.save();

    // Find a single blog post
    // const firstArtical = await Blog.findOne({});
    console.log(article);
    console.log(user);
  } catch (err) {
    console.log(err);
  }
};

run();
