var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  date: { type: Date, default: Date.now }
});
module.exports = mongoose.model('User', userSchema);
