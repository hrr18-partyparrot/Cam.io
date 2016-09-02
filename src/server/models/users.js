var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
  email: {type: String, unique: true, lowercase: true},
  username: String,
  password: String,
});


module.exports = mongoose.model("User", userSchema);