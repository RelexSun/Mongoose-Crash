const mongoose = require("mongoose");

const buserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    minLength: 10,
    required: true,
    lowercase: true,
  },
});

const bUser = mongoose.model("bUser", buserSchema);
module.exports = bUser;
