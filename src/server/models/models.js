var mongoose = require('mongoose');

//update with auth.
var userSchema = new mongoose.Schema({
  username: String,
  password: String, //hash created from password
  created_at: {type:Date, default: Date.now}
});

//looks good  but verify
var eventSchema = new mongoose.Schema({
  name: String,
  desc: String,
  promoters: [],
  promotions: [],
  currentPromotion: String,
  created_at: {type:Date, default: Date.now}
});

//Ask Hoon and team for input on this. Task or date based. Define promotions.
var rewardSchema = new mongoose.Schema({
  name: String,
  type: [],
  description: String,
});



mongoose.model('User', userSchema);
mongoose.model('Event', eventSchema);
mongoose.model('Reward', rewardSchema);