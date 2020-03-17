const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebSchema = new Schema(
  {
    name: {type: String, required: true, unique: true},
    occupation: {type: String, required: true},
    catchPhrase: String,
    image: String

  },
  {
    timestamps: true
  }
);

const Celeb = mongoose.model('Celeb', celebSchema);

module.exports = Celeb;
