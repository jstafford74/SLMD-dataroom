const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//TODO Implement Dropbox authentication

const fileSchema = new Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true}
});

const Book = mongoose.model("File", fileSchema);

module.exports = File;
