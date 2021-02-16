const { Schema, model } = require("mongoose");

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  secondname: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  isbn: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  }
});

module.exports = model("BooksList", schema);
//